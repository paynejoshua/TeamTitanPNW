const Profile = require("../models/profile-model")

createProfile = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a team member",
        })
    }

    const profile = new Profile(body)

    if(!profile) {
        return res.status(400).json({ success: false, error: err})
    }

    profile
        .save()
        .then(() => {
            return res.status(200).json({
                success: true,
                id: profile._id,
                message: "Profile created",
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "Profile not created!",
            })
        })
}

updateProfile = async (req, res) => {
        const body = req.body

        if (!body) {
            return res.status(400).json({
                success: false,
                error: "You must provide a body to update",
            })
        }

        Profile.findOne({ _id: req.params.id }, (err, profile) => {
            if (err) {
                return res.status(400).json({
                    err,
                    message: "Profile not found"
                })
            }

            profile.name = body.name
            profile.callSign = body.callSign
            profile.team = body.team
            profile.rank = body.rank
            profile.description = body.description
            profile
                .save()
                .then(() => {
                    return res.status(200).json({
                        success: true,
                        id: profile._id,
                        message: "Profile updated"
                    })
                })
                .catch(error => {
                    return res.status(400).json({
                        error,
                        message: "Profile not updated"
                    })
                })
        })
}

deleteProfile = async (req, res) => {
    await Profile.findOneAndDelete({ _id: req.params.id }, (err, profile) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!profile) {
            return res
                .status(400)
                .json({ success: false, error: "Profile not found"})
        }

        return res.status(200).json({ success: true, data: profile })

    }).catch(err => console.log(err))
}

getProfileById = async (req, res) => {
    await Profile.findOne({_id: req.params.id}, (err, profile) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }

        if (!profile) {
            return res 
                .status(400)
                .json({ success: false, error: "Profile not found"})
        }

        return res.status(200).json({ success: true, data: profile })
    }).catch(err => console.log(err))
}

getProfiles = async (req, res) => {
    await Profile.find({}, (err, profiles) => {
        if (err) {
            return res.status(400).json({success: false, error: err})
        }

        if (!profiles.length) {
            return res 
                .status(400)
                .json({ success: false, error: "No profiles have been found"})
        }

        return res.status(200).json({ success: true, data: profiles })
    }).catch(err => console.log(err))
}

module.exports = {
    createProfile,
    updateProfile,
    deleteProfile,
    getProfiles,
    getProfileById,
}