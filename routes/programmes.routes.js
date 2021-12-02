const {handleError} = require("../utils/functions")
const ProgrammeController = require("../controller/ProgrammesController")
const Programme = new ProgrammeController()

module.exports = (app) => {
    //CREATE
    app.post(`/api/programme/add`, async (req, res) => {
        const {body} = req
        try {
            const response = await Programme.createOne(body)
            res.send(response)
        } catch (err) {
            handleError(err, res)
        }
    })
    //READ
    //get all
    app.get(`/api/programmes`, async (req, res) => {
        try {
            const programme = await Programme.getProgramme()
            res.status(200).send(programme)
        } catch (err) {
            handleError(err, res)
        }
    })
    //get by id
    app.get(`/api/programme/:id`, async (req, res) => {
        const id = req.params.id
        try {
            const programme = await Programme.getProgrammeById(id)
            res.status(200).send({success: true, programme})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Upade by id
    app.put(`/api/programme/:id`, async (req, res) => {
        const id = req.params.id
        try {
            await Programme.updateProgramme(id, req.body)
            res.status(200).send({success: true})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Delete by id
    app.delete(`/api/programme/:id`, async (req, res) =>{
        const id = req.params.id
        try {
            await Programme.deleteProgramme(id)
            res.status(200).send({success: true})
        } catch (err) {
           handleError(err,res) 
        }
    })
}