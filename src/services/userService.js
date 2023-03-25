import axios from "../axios"

const handleLoginApi = (userEmail, userPassword) => {
    // return axios.post('api/login', { email: userEmail, password: userPassword })
    return axios.post('api/login', { userName: userEmail, passWord: userPassword })
}

const getAllUsers = (inputId) => {
    // const getAllUsers = () => {
    return axios.get(`/api/get-all-users?id=${inputId}`)
    // return axios.get(`/api/get-all-users`)
}

const createNewUserService = (data) => {
    console.log('Check data from services: ', data)
    return axios.post(`/api/create-new-user`, data)
}

const deleteUserService = (userId) => {
    return axios.delete(`/api/delete-user`, { data: { id: userId } })
}
const editUserService = (inputData) => {
    return axios.put(`/api/edit-user`, inputData)
}

export {
    handleLoginApi,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService
}