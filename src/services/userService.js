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

const getAllProducts = (inputId) => {
    return axios.get(`/api/get-all-products?id=${inputId}`)
}

const createNewProductService = (data) => {
    console.log('Check data from services: ', data)
    return axios.post(`/api/create-new-product`, data)
}

const deleteProductService = (productId) => {
    return axios.delete(`/api/delete-product`, { data: { productId: productId } })
}

const editProductService = (inputData) => {
    return axios.put(`/api/edit-product`, inputData)
}

const getAllCategory = (inputId) => {
    return axios.get(`/api/get-all-category?id=${inputId}`)
}

const deleteCategoryService = (categoryId) => {
    return axios.delete(`/api/delete-category`, { data: { categoryId: categoryId } })
}

const createNewCategoryService = (data) => {
    console.log('Check data from services: ', data)
    return axios.post(`/api/create-new-category`, data)
}

const editCategoryService = (inputData) => {
    return axios.put(`/api/edit-category`, inputData)
}
export {
    handleLoginApi,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
    getAllProducts,
    createNewProductService,
    deleteProductService,
    editProductService,
    getAllCategory,
    deleteCategoryService,
    createNewCategoryService,
    editCategoryService
}