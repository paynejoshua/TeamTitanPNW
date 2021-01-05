import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
})

export const createProfile = payload => api.post(`/profile`, payload)
export const getAllProfiles = () => api.get(`/profiles`)
export const getProfile = id => api.get(`/profile/${id}`)
export const updateProfile = (id, payload) => api.put(`/profile/${id}`, payload)
export const deletProfileByID = id => api.delete(`/profile/${id}`)

const apis = {
    createProfile,
    getAllProfiles,
    getProfile,
    updateProfile,
    deletProfileByID
}

export default apis