const Entreprise = require("../models/EntrepriseModel")

module.exports = function(){
    /***************/
    //  CREATE
    /*************/
    //Create one
    this.createOne = async function(body){
        const newEntreprise = new Entreprise(body);
        await newEntreprise.save()
        return {success: true}
    }
    /************/
    //  READ
    /***********/
    //FIND ALL
    this.getEntreprise = async function(){
        return Entreprise.find()
    }
    //FIND ONE
    this.getEntrepriseById = async function (id){
        return Entreprise.findOne({_id: id})
    }
     /***************/
    //  UPDATE
    /*************/
    //Update one 
    this.updateEntreprise = async function (id, body){
        return Entreprise.updateOne({_id: id}, body, {new: true})    
    }
    //Delete one
    this.deleteEntreprise = async function (id){
        return Entreprise.deleteOne({_id: id})    
    }

}