const Admin = require('../models/AdminModel');
const bcrypt = require('bcryptjs');

module.exports = function(){
    /***************/
    //  CREATE
    /*************/
    //Create one
    this.createOne = async function(body){
        body.password = bcrypt.hashSync(body.password, 10)
        const newAdmin = new Admin(body);
        await newAdmin.save()
        return {success: true}
    }
    //Log In

    /************/
    //  READ
    /***********/
    //FIND ALL
    this.findAll = async function(){
        return Admin.find()
    }
    //FIND ONE
    this.findById = async function (id){
        return Admin.findOne({_id: id})
    }
    //Update one 
    this.updateAdmin = async function (id, body){
        return Admin.updateOne({_id: id}, body, {new: true})    
    }
    //Delete one
    this.deleteAdmin = async function (id){
        return Admin.deleteOne({_id: id})    
    } 
}