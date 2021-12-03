const Blocompetence = require("../models/BlocompetenceModel")

module.exports = function(){
    /***************/
    //  CREATE
    /*************/
    //Create one
    this.createOne = async function(body){
        const newBlocompetence = new Blocompetence(body);
        await newBlocompetence.save()
        return {success: true}
    }
    /************/
    //  READ
    /***********/
    //FIND ALL
    this.getBlocompetence = async function(){
        return Blocompetence.find()
    }
    //FIND ONE
    this.getBlocompetenceById = async function (id){
        return Blocompetence.findOne({_id: id})
    }
     /***************/
    //  UPDATE
    /*************/
    //Update one 
    this.updateBlocompetence = async function (id, body){
        return Blocompetence.updateOne({_id: id}, body, {new: true})    
    }
    //Delete one
    this.deleteBlocompetence = async function (id){
        return Blocompetence.deleteOne({_id: id})    
    }
}