const {handleError} = require("../utils/functions")
const BlocompetenceController = require("../controller/BlocompetenceController")
const Blocompetence = new BlocompetenceController()

module.exports = (app) => {
    //CREATE
    app.post(`/api/blocompetence/add`, async (req, res) => {
        const {body} = req
        try {
            const response = await Blocompetence.createOne(body)
            res.send(response)
        } catch (err) {
            handleError(err, res)
        }
    })
    //READ
    //get all
    app.get(`/api/blocompetences`, async (req, res) => {
        try {
            const blocompetence = await Blocompetence.getBlocompetence()
            res.status(200).send(blocompetence)
        } catch (err) {
            handleError(err, res)
        }
    })
    //get by id
    app.get(`/api/blocompetence/:id`, async (req, res) => {
        const id = req.params.id
        try {
            const blocompetence = await Blocompetence.getBlocompetenceById(id)
            res.status(200).send({success: true, blocompetence})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Upade by id
    app.put(`/api/blocompetence/:id`, async (req, res) => {
        const id = req.params.id
        try {
            await Blocompetence.updateBlocompetence(id, req.body)
            res.status(200).send({success: true})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Delete by id
    app.delete(`/api/blocompetence/:id`, async (req, res) =>{
        const id = req.params.id
        try {
            await Blocompetence.deleteBlocompetence(id)
            res.status(200).send({success: true})
        } catch (err) {
           handleError(err,res) 
        }
    })
}