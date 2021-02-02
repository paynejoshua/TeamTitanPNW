const Message = require("../models/messages-model")

createMessage = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a message",
        })
    }

    const message = new Message(body)

    if(!message) {
        return res.status(400).json({ success: false, error: err})
    }

    message
        .save()
        .then(() => {
            return res.status(200).json({
                success: true,
                id: message._id,
                message: "Message created",
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "Message not created!",
            })
        })
}

getMessageById = async (req, res) => {
    await Message.findOne({_id: req.params.id}, (err, message) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }

        if (!message) {
            return res 
                .status(400)
                .json({ success: false, error: "Message not found"})
        }

        return res.status(200).json({ success: true, data: message })
    }).catch(err => console.log(err))
}

getMessages = async (req, res) => {
    await Message.find({}, (err, messages) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }

        if (!messages.length) {
            return res 
                .status(400)
                .json({ success: false, error: "No messages have been found"})
        }

        return res.status(200).json({ success: true, data: messages })
    }).catch(err => console.log(err))
}

updateMessage = async (req, res) => {   
    const body = req.body

        if (!body) {
            return res.status(400).json({
                success: false,
                error: "You must provide a body to update",
            })
        }

        Message.findOneAndUpdate({ _id: req.params.id }, { $set: body }, (err, message) => {

            if (err) {
                return res.status(400).json({
                    err,
                    message: "Message not found"
                })
            }
            return res.status(200).json(message)

        })

}

deleteMessage = async (req, res) => {
    await Message.findOneAndDelete({ _id: req.params.id }, (err, message) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!message) {
            return res
                .status(400)
                .json({ success: false, error: "Message not found"})
        }

        return res.status(200).json({ success: true, data: message })

    }).catch(err => console.log(err))
}



module.exports = {
    createMessage,
    updateMessage,
    deleteMessage,
    getMessages,
    getMessageById,
}