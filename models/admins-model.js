
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Admins = new Schema(
    {
        email: {type: String},
        password: {type: String},
        name: {type: String}
        
    },

)

module.exports = mongoose.model('admins', Admins)
