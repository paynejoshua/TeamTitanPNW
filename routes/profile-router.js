const express = require('express')

const ProfileCtrl = require('../controllers/profile-ctrl')

const router = express.Router()

router.post('/profile', ProfileCtrl.createProfile)
router.put('/profile/:id', ProfileCtrl.updateProfile)
router.delete('/profile/:id', ProfileCtrl.deleteProfile)
router.get('/profile/:id', ProfileCtrl.getProfileById)
router.get('/profiles', ProfileCtrl.getProfiles)

module.exports = router