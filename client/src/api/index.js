import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
})

export const createProfile = payload => api.post(`/profile`, payload)
export const getAllProfiles = () => api.get(`/profiles`)
export const getProfile = id => api.get(`/profile/${id}`)
export const updateProfile = (id, payload) => api.put(`/profile/${id}`, payload)
export const deletProfileByID = id => api.delete(`/profile/${id}`)

export const createEvent = payload => api.post(`/event`, payload)
export const getAllEvents = () => api.get(`/events`)
export const getEvent = id => api.get(`/event/${id}`)
export const updateEvent = (id, payload) => api.put(`/event/${id}`, payload)
export const deletEventByID = id => api.delete(`/event/${id}`)

export const createAdmin = payload => api.post(`/admin`, payload)
export const getAllAdmins = () => api.get(`/admins`)
export const getAdmin = id => api.get(`/admin/${id}`)
export const updateAdmin = (id, payload) => api.put(`/admin/${id}`, payload)
export const deletAdminByID = id => api.delete(`/admin/${id}`)
export const adminValidation = payload => api.post(`/admin/login`, payload)

export const createMessage = payload => api.post(`/message`, payload)
export const getAllMessages = () => api.get(`/messages`)
export const getMessage = id => api.get(`/message/${id}`)
export const updateMessage = (id, payload) => api.put(`/message/${id}`, payload)
export const deletMessageByID = id => api.delete(`/message/${id}`)

const apis = {
    createProfile,
    getAllProfiles,
    getProfile,
    updateProfile,
    deletProfileByID,
    createEvent,
    getAllEvents,
    getEvent,
    updateEvent,
    deletEventByID,
    createAdmin,
    getAllAdmins,
    getAdmin,
    updateAdmin,
    deletAdminByID,
    adminValidation,
    createMessage,
    getAllMessages,
    getMessage,
    updateMessage,
    deletMessageByID,

}

export default apis