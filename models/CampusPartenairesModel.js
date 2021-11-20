const mongoose = require('mongoose')
const Schema = mongoose.Schema
const date = Date.now()

const CampusPartenairesModel = new Schema(
    {
        createdAt: {
            type: Date,
            default: date
        },
        name: {type: String},
        location: {type: String},
        img: {
            type: String,
        },
    },
    {
        collection: 'campuspartenaires'
    }
)

module.exports = CampusPartenaires = mongoose.model('CampusPartenaires', CampusPartenairesModel)