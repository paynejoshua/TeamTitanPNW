
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Messages = new Schema(
    {
        name: {type: String},
        email: {type: String},
        subject: {type: String},
        question: {type: String}
        
    },

)

module.exports = mongoose.model('messages', Messages)
