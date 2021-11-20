const mongoose = require('mongoose')
const Schema = mongoose.Schema
const date = Date.now()

const EntrepriseModel = new Schema(
    {
        createdAt: {
            type: Date,
            default: date
        },
        name: {type: String},
        img: {
            type: String,
        },
    },
    {
        collection: 'entreprises'
    }
)

module.exports = Entreprise = mongoose.model('Entreprise', EntrepriseModel)