import React, { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import Meta from '../../components/Meta'
import './orderHistory.scss'
import HomeHeader from '../Homepage/HomeHeader';
import { RiInformationFill } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderDetail, getUserOrderHistory } from '../../services/userService';

const OrderHistory = () => {
    const [arrOrders, setArrOrders] = useState();
    const [arrDetail, setArrDetail] = useState();
    const userInfo = useSelector(state => state.user.userInfo);
    // const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    // console.log('userInfo: ', userInfo)
    const getUserHistory = async () => {
        try {
            let id = userInfo.id
            let response = await getUserOrderHistory(id)
            // console.log("this is resonse", response)
            setArrOrders(response.order[0])
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        if (userInfo) { getUserHistory() }
    }, [userInfo])

    const getUserOrderDetailHistory = async () => {
        try {
            let userId = userInfo.id
            let response = await getUserOrderDetail(userId)
            // console.log("this is resonse", response)
            setArrDetail(response.orderDetail[0])
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        { getUserOrderDetailHistory() }
    }, [userInfo])

    return (
        <>
            <HomeHeader />
            <Meta title={"Lịch sử đơn hàng"} />
            <div className="users-container">
                <div className='title text-center'>Lịch sử đặt hàng của bạn:</div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Mã đơn</th>
                                <th>Tên người nhận</th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ nhận hàng</th>
                                <th>Phương thức giao hàng</th>
                                <th>Ngày đặt</th>
                                <th>Trạng thái</th>
                                <th>Tổng tiền</th>
                                <th>Ghi chú</th>

                            </tr>
                            {arrOrders && arrOrders.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.orderId}</td>
                                        <td>{item.custmerName}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td>{item.delivery}</td>
                                        <td>{item.createdAt}</td>
                                        <td>{item.status}</td>
                                        <td>{item.total}</td>
                                        <td>{item.note}</td>

                                    </tr>

                                )
                            })
                            }

                        </tbody>
                    </table>
                </div>

                <div className='title text-center'>Chi tiết đơn hàng của bạn:</div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>ID Chi tiết</th>
                                <th>Mã đơn hàng</th>
                                <th>Sản phẩm</th>
                                <th>Giá 1 sản phẩm</th>
                                <th>Số lượng</th>
                                {/* <th>Tổng tiền</th> */}
                            </tr>
                            {arrDetail && arrDetail.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.orderdetailId}</td>
                                        <td>{item.orderId}</td>
                                        <td>{item.productId}</td>
                                        <td>{item.price}</td>
                                        <td>{item.quantity}</td>
                                        {/* <td>{item.total}</td> */}
                                    </tr>

                                )
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div >
            {/* <Footer></Footer> */}
        </>
    );
}

export default OrderHistory;