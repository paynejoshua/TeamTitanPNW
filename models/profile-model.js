
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Profile = new Schema(
    {
        name: { type: String },
        callSign: { type: String },
        faction: { type: String },
        rank: { type: String },
        description: { type: String},
        profilePic: {type: String}
    },

)

module.exports = mongoose.model('profile', Profile)
