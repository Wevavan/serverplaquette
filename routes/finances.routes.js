const {handleError} = require("../utils/functions")
const FinancesController = require("../controller/FinancesController")
const Finance = new FinancesController()

module.exports = (app) => {
    //CREATE
    app.post(`/api/finance/add`, async (req, res) => {
        const {body} = req
        try {
            const response = await Finance.createOne(body)
            res.send(response)
        } catch (err) {
            handleError(err, res)
        }
    })
    //READ
    //get all
    app.get(`/api/finances`, async (req, res) => {
        try {
            const finance = await Finance.getFinance()
            res.status(200).send(finance)
        } catch (err) {
            handleError(err, res)
        }
    })
    //get by id
    app.get(`/api/finance/:id`, async (req, res) => {
        const id = req.params.id
        try {
            const finance = await Finance.getFinanceById(id)
            res.status(200).send({success: true, finance})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Upade by id
    app.put(`/api/finance/:id`, async (req, res) => {
        const id = req.params.id
        try {
            await Finance.updateFinance(id, req.body)
            res.status(200).send({success: true})
        } catch (err) {
            handleError(err, res)
        }
    })
    //Delete by id
    app.delete(`/api/finance/:id`, async (req, res) =>{
        const id = req.params.id
        try {
            await Finance.deleteFinance(id)
            res.status(200).send({success: true})
        } catch (err) {
           handleError(err,res) 
        }
    })
}