const {handleError} = require("../utils/functions")
const AdminController = require("../controller/AdminController")
const Admin = new AdminController()
const Admino = require("../models/AdminModel");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

module.exports = (app) => {
    //CREATE
    app.post(`/api/admins/add`, async (req, res) => {
        Admin.allowIfLoggedin
        Admin.grantAccess('createAny', 'profile')
        const {body} = req
        try {
            const response = await Admin.createOne(body)
            res.send(response)
        } catch (err) {
            handleError(err, res)
        }
    })
    //Login
    app.post(`/api/admin/login`, async (req, res) =>{

        try {
            const {email, password} = req.body;
            const user = await Admino.findOne({email})
            if(!user) return res.json({message : "Email Incorrect"})
            const validPassword = await validatePassword(password, user.password);
            if(!validPassword) return res.json({message : "Password Incorrect"})
            const accessToken = jwt.sign({userId: user._id}, process.env.JWT_SECRET,{
                expiresIn: "1d"
            });
            await Admino.findByIdAndUpdate(user._id, {accessToken})
            res.status(200).json({
                data: {email: user.email, role: user.role},
                accessToken
            })
        }
        catch (err) {
            handleError(err, res)
        }
    })
    async function validatePassword(plainPassword, hashPassword){
        return await bcrypt.compare(plainPassword, hashPassword);
    }
    //READ
    //get all
    app.get(`/api/admins`, async (req, res) => {
        try {
            const admins = await Admin.findAll()
            res.status(200).send(admins)
        } catch (err) {
            handleError(err, res)
        }
    })
    //get by id
    app.get(`/api/admins/:id`, async (req, res) => {
        const id = req.params.id
        try {
            const admin = await Admin.findById(id)
            res.status(200).send({success: true, admin})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Upade by id
    app.put(`/api/admin/:id`, async (req, res) => {
        const id = req.params.id
        try {
            await Admin.updateAdmin(id, req.body)
            res.status(200).send({success: true})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Delete by id
    app.delete(`/api/admin/:id`, async (req, res) =>{
        const id = req.params.id
        try {
            await Admin.deleteAdmin(id)
            res.status(200).send({success: true})
        } catch (err) {
           handleError(err,res) 
        }
    })
}