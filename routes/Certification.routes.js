const {handleError} = require("../utils/functions")
const CertificationController = require("../controller/CertificationController")
const Certification = new CertificationController()

module.exports = (app) => {
    //CREATE
    app.post(`/api/certifications/add`, async (req, res) => {
        const {body} = req
        try {
            const response = await Certification.createOne(body)
            res.send(response)
        } catch (err) {
            handleError(err, res)
        }
    })
    //READ
    //get all
    app.get(`/api/certifications`, async (req, res) => {
        try {
            const certification = await Certification.getCertification()
            res.status(200).send(certification)
        } catch (err) {
            handleError(err, res)
        }
    })
    //get by id
    app.get(`/api/certifications/:id`, async (req, res) => {
        const id = req.params.id
        try {
            const certification = await Certification.getCertificationById(id)
            res.status(200).send({success: true, certification})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Upade by id
    app.put(`/api/certifications/:id`, async (req, res) => {
        const id = req.params.id
        try {
            await Certification.updateCertification(id, req.body)
            res.status(200).send({success: true})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Delete by id
    app.delete(`/api/certifications/:id`, async (req, res) =>{
        const id = req.params.id
        try {
            await Certification.deleteCertification(id)
            res.status(200).send({success: true})
        } catch (err) {
           handleError(err,res) 
        }
    })
}