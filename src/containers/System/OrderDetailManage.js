import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { createNewProductService, getAllProducts, deleteProductService, editProductService } from '../../services/userService'
import { emitter } from '../../utils/emitter';
import ModalAddProduct from './Modal Product/ModalAddProduct';
import ModalDeleteProduct from './Modal Product/ModalDeleteProduct';
import CustomScrollbars from '../../components/CustomScrollbars';
import ModalEditProduct from './Modal Product/ModalEditProduct';

class OrderDetailManage extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         arrProducts: [],
    //         isOpenModalAddProduct: false,
    //         isOpenModalEditProduct: false,
    //         isOpenModalDeleteProduct: false,
    //         productEdit: {},
    //         productDelete: {}
    //     }
    // }

    // async componentDidMount() {
    //     await this.getAllProductsFromReact()
    // }

    // getAllProductsFromReact = async () => {
    //     let response = await getAllProducts('ALL')
    //     if (response && response.errCode === 0) {
    //         this.setState({
    //             arrProducts: response.products
    //         })
    //     }
    // }
    // handleAddNewProduct = () => {
    //     this.setState({
    //         isOpenModalAddProduct: true
    //     })
    // }
    // toggleAddProductModal = () => {
    //     this.setState({
    //         isOpenModalAddProduct: !this.state.isOpenModalAddProduct,
    //     })
    // }
    // toggleProductEditModal = () => {
    //     this.setState({
    //         isOpenModalEditProduct: !this.state.isOpenModalEditProduct,
    //     })
    // }

    // toggleProductDeleteModal = () => {
    //     this.setState({
    //         isOpenModalDeleteProduct: !this.state.isOpenModalDeleteProduct,
    //     })
    // }
    // createNewProduct = async (data) => {
    //     try {
    //         let res = await createNewProductService(data)
    //         if (res && res.errCode !== 0) {
    //             alert(res.errMessage)
    //         }
    //         else {
    //             await this.getAllProductsFromReact()
    //             this.setState({
    //                 isOpenModalAddProduct: false
    //             })
    //             // emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' })  neu truyen data
    //             emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' })
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    // handleEditProduct = async (product) => {
    //     console.log("check edit Product", product)
    //     this.setState({
    //         isOpenModalEditProduct: true,
    //         productEdit: product
    //     })
    // }


    // handleDeleteProduct = async (product) => {
    //     console.log("check delete product", product)
    //     this.setState({
    //         isOpenModalDeleteProduct: true,
    //         productDelete: product
    //     })
    // }

    // doEditProduct = async (product) => {
    //     try {
    //         let res = await editProductService(product)
    //         if (res && res.errCode === 0) {
    //             this.setState({
    //                 isOpenModalEditProduct: false
    //             })
    //             await this.getAllProductsFromReact()
    //         }
    //         else {
    //             alert(res.errMessage)
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }


    // deleteProduct = async (product) => {
    //     console.log('click delete', product)
    //     try {
    //         let res = await deleteProductService(product.productId)
    //         // if (res && res.errCode === 0) {
    //         if (res) {
    //             this.setState({
    //                 isOpenModalDeleteProduct: false
    //             })
    //             await this.getAllProductsFromReact()
    //         }
    //         else {
    //             alert(res.errMessage)
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    render() {
        // let arrProducts = this.state.arrProducts[0]
        return (
            <div className="users-container">

                {/* <ModalAddProduct
                    isOpen={this.state.isOpenModalAddProduct}
                    toggleFromParent={this.toggleAddProductModal}
                    createNewProduct={this.createNewProduct}
                />
                {this.state.isOpenModalEditProduct &&
                    <ModalEditProduct
                        isOpen={this.state.isOpenModalEditProduct}
                        toggleFromParent={this.toggleProductEditModal}
                        currentProduct={this.state.productEdit}
                        editAction={this.doEditProduct}
                    />
                }

                {this.state.isOpenModalDeleteProduct &&
                    <ModalDeleteProduct
                        isOpen={this.state.isOpenModalDeleteProduct}
                        toggleFromParent={this.toggleProductDeleteModal}
                        delProduct={this.state.productDelete}
                        deleteAction={this.deleteProduct}

                    />} */}
                <div className='title text-center'>Manage order detail with admin:</div>
                {/* <div className='mx1'>
                    <button
                        className='btn btn-primary px-3'
                        onClick={() => { this.handleAddNewProduct() }}
                    >
                        <i className='fas fa-plus'></i>
                        Add new product
                    </button>
                </div> */}
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Order ID</th>
                                <th>Product name</th>
                                <th>Brand</th>
                                <th>Color</th>
                                <th>Storage</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Discount</th>
                                <th>Actions</th>
                            </tr>
                            {/* {arrProducts && arrProducts.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.productId}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.categoryId}</td>
                                        <td>{item.color}</td>
                                        <td>{item.storage}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.discount}</td>
                                        <td>
                                            <button
                                                className='btn-edit'
                                                onClick={() => { this.handleEditProduct(item) }}
                                            ><i className='fas fa-pencil-alt'></i>Edit</button>
                                            <button
                                                className='btn-delete'
                                                onClick={() => { this.handleDeleteProduct(item) }}
                                            ><i className='fas fa-trash'></i>Delete</button>
                                        </td>
                                    </tr>

                                )
                            }) */}
                            {/* } */}
                        </tbody>
                    </table>
                </div>
            </div >
        );
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailManage);
