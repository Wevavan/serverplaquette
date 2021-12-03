const Finance = require("../models/FinancesModel")

module.exports = function(){
    /***************/
    //  CREATE
    /*************/
    //Create one
    this.createOne = async function(body){
        const newFinance = new Finance(body);
        await newFinance.save()
        return {success: true}
    }
    /************/
    //  READ
    /***********/
    //FIND ALL
    this.getFinance = async function(){
        return Finance.find()
    }
    //FIND ONE
    this.getFinanceById = async function (id){
        return Finance.findOne({_id: id})
    }
     /***************/
    //  UPDATE
    /*************/
    //Update one 
    this.updateFinance = async function (id, body){
        return Finance.updateOne({_id: id}, body, {new: true})    
    }
    //Delete one
    this.deleteFinance = async function (id){
        return Finance.deleteOne({_id: id})    
    }

}