import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllOrder, editOrderService, deleteOrderService, getAllOrderDetail } from '../../services/userService'
import { emitter } from '../../utils/emitter';
import ModalAddProduct from './Modal Product/ModalAddProduct';
import ModalDeleteProduct from './Modal Product/ModalDeleteProduct';
import CustomScrollbars from '../../components/CustomScrollbars';
import ModalEditProduct from './Modal Product/ModalEditProduct';
import { AiFillEdit, AiFillInfoCircle } from "react-icons/ai"
import { BiTrash } from "react-icons/bi"
import ModalEditOrder from './ModalOrder/ModalEditOrder';
import ModalDeleteOrder from './ModalOrder/ModalDeleteOrder';
import ModalDetailOrder from './ModalOrder/ModalDetailOrder';

class OrderManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrOrders: [],
            isOpenModalEditOrder: false,
            isOpenModalDeleteOrder: false,
            // isOpenModalDetailOrder: false,
            orderEdit: {},
            orderDelete: {},
            // orderDetail: {}
        }
    }

    async componentDidMount() {
        await this.getAllOrdersFromReact()
    }

    getAllOrdersFromReact = async () => {
        let response = await getAllOrder('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrOrders: response.order
            })
        }
    }

    // getOrderDetail = async (order) => {
    //     let response = await getAllOrderDetail(order.orderId)
    //     if (response && response.errCode === 0) {
    //         this.setState({
    //             orderDetail: response.orderDetail
    //         })
    //     }
    // }

    toggleOrderEditModal = () => {
        this.setState({
            isOpenModalEditOrder: !this.state.isOpenModalEditOrder,
        })
    }

    toggleOrderDeleteModal = () => {
        this.setState({
            isOpenModalDeleteOrder: !this.state.isOpenModalDeleteOrder,
        })
    }

    // toggleOrderDetailModal = () => {
    //     this.setState({
    //         isOpenModalDetailOrder: !this.state.isOpenModalDetailOrder,
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
    handleEditOrder = async (order) => {
        // console.log("check edit order", order)
        this.setState({
            isOpenModalEditOrder: true,
            orderEdit: order
        })
    }

    // handleDetailOrder = async (orderDetail) => {
    //     // console.log("check edit order", orderDetail)
    //     this.setState({
    //         isOpenModalDetailOrder: true,
    //         orderDetail: orderDetail
    //     })
    // }


    handleDeleteOrder = async (order) => {
        console.log("check delete order", order)
        this.setState({
            isOpenModalDeleteOrder: true,
            orderDelete: order
        })
    }

    doEditOrder = async (order) => {
        try {
            let res = await editOrderService(order)
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditOrder: false
                })
                await this.getAllOrdersFromReact()
            }
            else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }

    // doDetailOrder = async (order) => {
    //     try {
    //         let res = await getAllOrderDetail(order.orderId)
    //         if (res && res.errCode === 0) {
    //             this.setState({
    //                 isOpenModalDetailOrder: false
    //             })
    //             await this.getAllOrdersFromReact()
    //         }
    //         else {
    //             alert(res.errMessage)
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    deleteOrder = async (order) => {
        console.log('click delete', order)
        try {
            let res = await deleteOrderService(order.orderId)
            // if (res && res.errCode === 0) {
            if (res) {
                this.setState({
                    isOpenModalDeleteOrder: false
                })
                await this.getAllOrdersFromReact()
            }
            else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        let arrOrders = this.state.arrOrders[0]
        return (
            <div className="users-container">

                {/* <ModalAddProduct
                    isOpen={this.state.isOpenModalAddProduct}
                    toggleFromParent={this.toggleAddProductModal}
                    createNewProduct={this.createNewProduct}
                /> */}
                {this.state.isOpenModalEditOrder &&
                    <ModalEditOrder
                        isOpen={this.state.isOpenModalEditOrder}
                        toggleFromParent={this.toggleOrderEditModal}
                        currentOrder={this.state.orderEdit}
                        editAction={this.doEditOrder}
                    />
                }

                {this.state.isOpenModalDeleteOrder &&
                    <ModalDeleteOrder
                        isOpen={this.state.isOpenModalDeleteOrder}
                        toggleFromParent={this.toggleOrderDeleteModal}
                        delOrder={this.state.orderDelete}
                        deleteAction={this.deleteOrder}

                    />}
                {/* {this.state.isOpenModalDetailOrder &&
                    <ModalDetailOrder
                        isOpen={this.state.isOpenModalDetailOrder}
                        toggleFromParent={this.toggleOrderDetailModal}
                        currentOrder={this.state.orderDetail}
                        editAction={this.doDetailOrder}
                    />
                } */}

                <div className='title text-center'>Manage orders with admin:</div>

                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Order ID</th>
                                <th>User ID</th>
                                <th>Customer Name</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Delivery</th>
                                <th>Payment By</th>
                                <th>Status</th>
                                <th>Order Date</th>
                                <th>Total</th>
                                <th>Note</th>
                                <th>Actions</th>
                            </tr>
                            {arrOrders && arrOrders.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.orderId}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.custmerName}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td>{item.delivery}</td>
                                        <td>{item.paymentId === 1 ? 'Thanh toán khi nhận hàng' : 'Thanh toán chuyển khoản'}</td>
                                        <td>{item.status}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.total} VND</td>
                                        <td>{item.note}</td>
                                        <td>
                                            <span
                                                className='btn-edit'
                                                onClick={() => { this.handleEditOrder(item) }}
                                            ><AiFillEdit /><p>Edit </p></span>
                                            <span
                                                className='btn-delete'
                                                onClick={() => { this.handleDeleteOrder(item) }}
                                            ><BiTrash /><p>Delete</p></span>
                                            {/* <span
                                                className='btn-infor'
                                                onClick={() => { this.handleDetailOrder(item) }}
                                            ><AiFillInfoCircle /><p>Detail</p></span> */}
                                        </td>
                                    </tr>

                                )
                            })
                            }
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderManage);
