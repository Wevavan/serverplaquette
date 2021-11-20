const Certification = require("../models/CertificationModel")

module.exports = function(){
    /***************/
    //  CREATE
    /*************/
    //Create one
    this.createOne = async function(body){
        const newCertification = new Certification(body);
        await newCertification.save()
        return {success: true}
    }
    /************/
    //  READ
    /***********/
    //FIND ALL
    this.getCertification = async function(){
        return Certification.find()
    }
    //FIND ONE
    this.getCertificationById = async function (id){
        return Certification.findOne({_id: id})
    }
     /***************/
    //  UPDATE
    /*************/
    //Update one 
    this.updateCertification = async function (id, body){
        return Certification.updateOne({_id: id}, body, {new: true})    
    }
    //Delete one
    this.deleteCertification = async function (id){
        return Certification.deleteOne({_id: id})    
    }

}