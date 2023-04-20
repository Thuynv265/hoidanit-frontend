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

const getProductByBrand = (inputId) => {
    return axios.get(`/api/get-filter-product-by?id=${inputId}`)
}


// api sap xep theo gia cao-thap, thap-cao
const getProductSortPrice = (inputId) => {
    return axios.get(`/api/get-sort-product-by-price?id=${inputId}`)
}

// api sap xep theo a-z, z-a
const getProductSortAlphabet = (inputId) => {
    return axios.get(`/api/get-sort-product-by-alphabet?id=${inputId}`)
}

const getProductById = (productId) => {
    return axios.get(`/api/get-product/${productId}`)
}

// api filter product by storage
const getProductFilterByStorage = (inputId) => {
    return axios.get(`/api/get-filter-product-by-storage?id=${inputId}`)
}

// api filter product by price
const getFilterByPrice = (inputId) => {
    return axios.get(`/api/get-filter-product-by-price?id=${inputId}`)
}

const getAllOrder = (inputId) => {
    return axios.get(`/api/get-all-order?id=${inputId}`)
}

//api edit order
const editOrderService = (inputData) => {
    return axios.put(`/api/edit-order`, inputData)
}

const deleteOrderService = (orderId) => {
    return axios.delete(`/api/delete-order`, { data: { orderId: orderId } })
}

//get user order history
const getUserOrderHistory = (inputId) => {
    return axios.get(`/api/get-all-order-of-user?id=${inputId}`)
}

//get all order detail
const getAllOrderDetail = (inputId) => {
    return axios.get(`/api/get-all-order-detail?id=${inputId}`)
}
//get user order detail
// const getUserOrderDetail = (inputId) => {
//     return axios.get(`/api/get-user-order-detail?id=${inputId}`)
// }
const getUserOrderDetail = (data) => {
    return axios.get(`/api/get-user-order-detail?userId=${data.userId}&orderId=${data.orderId}`, data)
}


const createNewOrderService = (data) => {
    return axios.post(`/api/create-new-order`, data)
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
    editCategoryService,
    getProductByBrand,
    getFilterByPrice,
    getProductSortPrice,
    getProductSortAlphabet,
    getProductById,
    getProductFilterByStorage,
    getAllOrder,
    editOrderService,
    deleteOrderService,
    getUserOrderHistory,
    getAllOrderDetail,
    getUserOrderDetail,
    createNewOrderService,
}