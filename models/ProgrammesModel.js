const mongoose = require('mongoose')
const Schema = mongoose.Schema
const date = Date.now()

const ProgrammesModel = new Schema(
    {
        createdAt:{
            type:Date,
            default: date
        },
        themes:{
            type:{
                année:{type:String},
                titreannée:{type:String},
                domaine:{type:String},
                intitulé:{
                    type:{
                        intitulé1:{type:String},
                        intitulé2:{type:String},
                        intitulé3:{type:String},
                        intitulé4:{type:String},
                        intitulé5:{type:String},
                        intitulé6:{type:String},
                        intitulé7:{type:String},
                        intitulé8:{type:String},
                        intitulé9:{type:String},
                        intitulé10:{type:String},
                        intitulé11:{type:String},
                        intitulé12:{type:String}
                    }
                },
                durée:{type:String}
            }
        }        
    },
    {
        collection: 'programmes'
    }
)

module.exports = Programmes = mongoose.model('Programmes',ProgrammesModel)