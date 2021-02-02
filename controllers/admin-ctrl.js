const Admin = require("../models/admins-model")
const bcrypt = require("bcryptjs")

createAdmin = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide an admin",
        })
    }

    const admin = new Admin(body)

    if (!admin) {
        return res.status(400).json({ success: false, error: err })
    }

    bcrypt.hash(admin.password, 13, function (err, hash) {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
            admin.password = hash
            admin
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: admin._id,
                    message: "Admin created",
                })
            })
            .catch(error => {
                return res.status(400).json({
                    error,
                    message: "Admin not created!",
                })
            })

    });

    
}

getAdminById = async (req, res) => {
    await Admin.findOne({ _id: req.params.id }, (err, admin) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!admin) {
            return res
                .status(400)
                .json({ success: false, error: "Admin not found" })
        }

        return res.status(200).json({ success: true, data: admin })
    }).catch(err => console.log(err))
}


getAdmins = async (req, res) => {
    await Admin.find({}, (err, admins) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!admins.length) {
            return res
                .status(400)
                .json({ success: false, error: "No admins have been found" })
        }

        return res.status(200).json({ success: true, data: admins })
    }).catch(err => console.log(err))
}

adminValidation = async (req, res) => {
    console.log(req.body)
    await Admin.findOne({ email: req.body.email }).then(
        (admin) => {
            console.log(admin)
            if (!admin) {
                return res.status(400).json({
                    error: new Error('Admin not found!')
                })
            }
            else {
                bcrypt.compare(req.body.password, admin.password).then(function (result) {
                    if (!result) {

                        return res.status(400).json({
                            error: new Error('Password does not match.')
                        })
                    }
                    return res.status(200).json({ success: true, data: admin })
                });
            }
        }
    )
}

updateAdmin = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: "You must provide a body to update",
        })
    }

    Admin.findOneAndUpdate({ _id: req.params.id }, { $set: body }, (err, admin) => {

        if (err) {
            return res.status(400).json({
                err,
                message: "Admin not found"
            })
        }
        return res.status(200).json(admin)

    })

}

deleteAdmin = async (req, res) => {
    await Admin.findOneAndDelete({ _id: req.params.id }, (err, admin) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!admin) {
            return res
                .status(400)
                .json({ success: false, error: "Admin not found" })
        }

        return res.status(200).json({ success: true, data: admin })

    }).catch(err => console.log(err))
}



module.exports = {
    createAdmin,
    updateAdmin,
    deleteAdmin,
    getAdmins,
    getAdminById,
    adminValidation
}