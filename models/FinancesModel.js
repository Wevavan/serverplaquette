const mongoose = require('mongoose')
const Schema = mongoose.Schema
const date = Date.now()

const FinanceModel = new Schema(
    {
        createdAt: {
            type: Date,
            default: date
        },
        fraisdossier: {type: String},
        scolarite: {
            type:{
                horsalternacepreinscription:{type: String},
                horsalternacepostinscription:{type: String},
                enalternance:{type: String}
            }
        },
        mobiliteinternational: {
            type:{
                horsalternace:{type: String},
                enalternance:{type: String}
            }            
        },
        inscription: {
            type:{
                preinscription:{type: String},
                postinscription:{type: String},
                enalternance:{type: String}
            }
        },
        payementecheloné: {
            type:{
                horsalternace:{type: String},
                enalternance:{type: String}
            }
        },
        pretetudiant: {
            type:{
                somme:{type: String},
                inclus:{type: String},
                taeg:{type: String},
                fderemboursement:{type: String}
            }
        },
    },
    {
        collection: 'finances'
    }
)

module.exports = Finances = mongoose.model('Finances', FinanceModel)