const Programme = require("../models/ProgrammesModel")

module.exports = function(){
    /***************/
    //  CREATE
    /*************/
    //Create one
    this.createOne = async function(body){
        const newProgramme = new Programme(body);
        await newProgramme.save()
        return {success: true}
    }
    /************/
    //  READ
    /***********/
    //FIND ALL
    this.getProgramme = async function(){
        return Programme.find()
    }
    //FIND ONE
    this.getProgrammeById = async function (id){
        return Programme.findOne({_id: id})
    }
    /*************/
    //  UPDATE
    /*************/
    //Update one 
    this.updateProgramme = async function (id, body){
        return Programme.updateOne({_id: id}, body, {new: true})    
    }
    //Delete one
    this.deleteProgramme = async function (id){
        return Programme.deleteOne({_id: id})    
    }
}