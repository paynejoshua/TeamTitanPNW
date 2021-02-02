
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Events = new Schema(
    {
        title: {type: String},
        date: {type: String},
        startTime: {type: String},
        endTime: {type: String},
        field: {type: String},
        location: {type: String},
        eventLink: {type: String}
    },

)

module.exports = mongoose.model('events', Events)
