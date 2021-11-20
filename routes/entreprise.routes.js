const {handleError} = require("../utils/functions")
const EntrepriseController = require("../controller/EntrepriseController")
const Entreprise = new EntrepriseController()

module.exports = (app) => {
    //CREATE
    app.post(`/api/entreprise/add`, async (req, res) => {
        const {body} = req
        try {
            const response = await Entreprise.createOne(body)
            res.send(response)
        } catch (err) {
            handleError(err, res)
        }
    })
    //READ
    //get all
    app.get(`/api/entreprises`, async (req, res) => {
        try {
            const entreprise = await Entreprise.getEntreprise()
            res.status(200).send(entreprise)
        } catch (err) {
            handleError(err, res)
        }
    })
    //get by id
    app.get(`/api/entreprise/:id`, async (req, res) => {
        const id = req.params.id
        try {
            const entreprise = await Entreprise.getEntrepriseById(id)
            res.status(200).send({success: true, entreprise})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Upade by id
    app.put(`/api/entreprise/:id`, async (req, res) => {
        const id = req.params.id
        try {
            await Entreprise.updateEntreprise(id, req.body)
            res.status(200).send({success: true})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Delete by id
    app.delete(`/api/entreprise/:id`, async (req, res) =>{
        const id = req.params.id
        try {
            await Entreprise.deleteEntreprise(id)
            res.status(200).send({success: true})
        } catch (err) {
           handleError(err,res) 
        }
    })
}