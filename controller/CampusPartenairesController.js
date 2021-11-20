const CampusPartenaires = require("../models/CampusPartenairesModel")

module.exports = function(){
    /***************/
    //  CREATE
    /*************/
    //Create one
    this.createOne = async function(body){
        const newCampusPartenaires = new CampusPartenaires(body);
        await newCampusPartenaires.save()
        return {success: true}
    }
    /************/
    //  READ
    /***********/
    //FIND ALL
    this.getCampusPartenaires = async function(){
        return CampusPartenaires.find()
    }
    //FIND ONE
    this.getCampusPartenairesById = async function (id){
        return CampusPartenaires.findOne({_id: id})
    }
     /***************/
    //  UPDATE
    /*************/
    //Update one 
    this.updateCampusPartenaires = async function (id, body){
        return CampusPartenaires.updateOne({_id: id}, body, {new: true})    
    }
    //Delete one
    this.deleteCampusPartenaires = async function (id){
        return CampusPartenaires.deleteOne({_id: id})    
    }

}