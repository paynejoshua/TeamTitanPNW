const express = require('express')

const ProfileCtrl = require('../controllers/profile-ctrl')
const EventCtrl = require('../controllers/event-ctrl')
const AdminCtrl = require('../controllers/admin-ctrl')
const MessageCtrl = require('../controllers/message-ctrl')

const router = express.Router()

router.post('/profile', ProfileCtrl.createProfile)
router.put('/profile/:id', ProfileCtrl.updateProfile)
router.delete('/profile/:id', ProfileCtrl.deleteProfile)
router.get('/profile/:id', ProfileCtrl.getProfileById)
router.get('/profiles', ProfileCtrl.getProfiles)

router.post('/event', EventCtrl.createEvent)
router.put('/event/:id', EventCtrl.updateEvent)
router.delete('/event/:id', EventCtrl.deleteEvent)
router.get('/event/:id', EventCtrl.getEventById)
router.get('/events', EventCtrl.getEvents)

router.post('/admin', AdminCtrl.createAdmin)
router.put('/admin/:id', AdminCtrl.updateAdmin)
router.delete('/admin/:id', AdminCtrl.deleteAdmin)
router.get('/admin/:id', AdminCtrl.getAdminById)
router.get('/admins', AdminCtrl.getAdmins)
router.post(`/admin/login`, AdminCtrl.adminValidation)

router.post('/message', MessageCtrl.createMessage)
router.put('/message/:id', MessageCtrl.updateMessage)
router.delete('/message/:id', MessageCtrl.deleteMessage)
router.get('/message/:id', MessageCtrl.getMessageById)
router.get('/messages', MessageCtrl.getMessages)

module.exports = router