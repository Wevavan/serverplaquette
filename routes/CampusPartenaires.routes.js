const {handleError} = require("../utils/functions")
const CampusPartenairesController = require("../controller/CampusPartenairesController")
const CampusPartenaires = new CampusPartenairesController()

module.exports = (app) => {
    //CREATE
    app.post(`/api/campuspartenaires/add`, async (req, res) => {
        const {body} = req
        try {
            const response = await CampusPartenaires.createOne(body)
            res.send(response)
        } catch (err) {
            handleError(err, res)
        }
    })
    //READ
    //get all
    app.get(`/api/campuspartenaires`, async (req, res) => {
        try {
            const campuspartenaires = await CampusPartenaires.getCampusPartenaires()
            res.status(200).send(campuspartenaires)
        } catch (err) {
            handleError(err, res)
        }
    })
    //get by id
    app.get(`/api/campuspartenaires/:id`, async (req, res) => {
        const id = req.params.id
        try {
            const campuspartenaires = await CampusPartenaires.getCampusPartenairesById(id)
            res.status(200).send({success: true, campuspartenaires})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Upade by id
    app.put(`/api/campuspartenaires/:id`, async (req, res) => {
        const id = req.params.id
        try {
            await CampusPartenaires.updateCampusPartenaires(id, req.body)
            res.status(200).send({success: true})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Delete by id
    app.delete(`/api/campuspartenaires/:id`, async (req, res) =>{
        const id = req.params.id
        try {
            await CampusPartenaires.deleteCampusPartenaires(id)
            res.status(200).send({success: true})
        } catch (err) {
           handleError(err,res) 
        }
    })
}