const mongoose = require('mongoose')
const Schema = mongoose.Schema
const date = Date.now()

const CertificationModel = new Schema(
    {
        createdAt: {
            type: Date,
            default: date
        },
        name: {type: String},
        organisme: {type: String},
        img: {
            type: String,
        },
    },
    {
        collection: 'certifications'
    }
)

module.exports = Certification = mongoose.model('Certification', CertificationModel)