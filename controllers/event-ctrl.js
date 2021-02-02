const Event = require("../models/events-model")

createEvent = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide an event",
        })
    }

    const event = new Event(body)

    if(!event) {
        return res.status(400).json({ success: false, error: err})
    }

    event
        .save()
        .then(() => {
            return res.status(200).json({
                success: true,
                id: event._id,
                message: "Event created",
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "Event not created!",
            })
        })
}

getEventById = async (req, res) => {
    await Event.findOne({_id: req.params.id}, (err, event) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }

        if (!event) {
            return res 
                .status(400)
                .json({ success: false, error: "Event not found"})
        }

        return res.status(200).json({ success: true, data: event })
    }).catch(err => console.log(err))
}

getEvents = async (req, res) => {
    await Event.find({}, (err, events) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }

        if (!events.length) {
            return res 
                .status(400)
                .json({ success: false, error: "No events have been found"})
        }

        return res.status(200).json({ success: true, data: events })
    }).catch(err => console.log(err))
}

updateEvent = async (req, res) => {   
    const body = req.body

        if (!body) {
            return res.status(400).json({
                success: false,
                error: "You must provide a body to update",
            })
        }

        Event.findOneAndUpdate({ _id: req.params.id }, { $set: body }, (err, event) => {

            if (err) {
                return res.status(400).json({
                    err,
                    message: "Event not found"
                })
            }
            return res.status(200).json(event)

        })

}

deleteEvent = async (req, res) => {
    await Event.findOneAndDelete({ _id: req.params.id }, (err, event) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!event) {
            return res
                .status(400)
                .json({ success: false, error: "Event not found"})
        }

        return res.status(200).json({ success: true, data: event })

    }).catch(err => console.log(err))
}



module.exports = {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvents,
    getEventById,
}