
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Profile = new Schema(
    {
        name: { type: String, required: true },
        callSign: { type: String },
        faction: { type: String, required: true },
        rank: { type: String },
        description: { type: String},
        // create a profilePic field here *Base64?
    },

)

module.exports = mongoose.model('profile', Profile)
