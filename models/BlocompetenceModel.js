const mongoose = require('mongoose')
const Schema = mongoose.Schema
const date = Date.now()

const BlocompetenceModel = new Schema(
    {
        createdAt: {
            type: Date,
            default: date
        },
        fraisdossier: {type: String},
        blocompetence: {
            type:{
                    titreannée:{type: String},
                    compétence:{type: String},
                    module1:{
                        type:{
                            titremodule:{type: String},
                            libellé:{type: String}
                        }                       
                    },
                    module2:{
                        type:{
                            titremodule:{type: String},
                            libellé:{type: String}
                        }                        
                    },
                    module3:{
                        type:{
                            titremodule:{type: String},
                            libellé:{type: String}
                        }                       
                    },
                    module4:{
                        type:{
                            titremodule:{type: String},
                            libellé:{type: String}
                        }                        
                    },
                    module5:{
                        type:{
                            titremodule:{type: String},
                            libellé:{type: String}
                        }                        
                    }
            }
        },
    },
    {
        collection: 'blocompetence'
    }
)

module.exports = Blocompetence = mongoose.model('Blocompetence', BlocompetenceModel)