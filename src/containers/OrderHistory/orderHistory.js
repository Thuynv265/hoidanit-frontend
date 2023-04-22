import React, { useState, useEffect } from 'react';
import Marquee from "react-fast-marquee";
import Meta from '../../components/Meta'
import './orderHistory.scss'
import HomeHeader from '../Homepage/HomeHeader';
import { AiFillInfoCircle } from "react-icons/ai"
// import { RiInformationFill } from "react-icons/ri"
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderDetail, getUserOrderHistory } from '../../services/userService';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const OrderHistory = () => {
    const [arrOrders, setArrOrders] = useState();
    const [arrDetail, setArrDetail] = useState();
    const userInfo = useSelector(state => state.user.userInfo);
    // const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    // console.log('userInfo: ', userInfo)
    const [orderId, setOrderId] = useState();
    const [showPopup, setShowPopup] = useState(true); // new state variable for popup visibility
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

    const togglePopup = async (id) => {
        setOrderId(id)
        if (showPopup === false) {
            let userId = userInfo.id
            let data = { userId, orderId }
            let response = await getUserOrderDetail(data)

            if (response?.errCode === 0) setArrDetail(response?.orderDetail[0])
        }
        setShowPopup(!showPopup);

    }


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
                                <th></th>

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
                                        <td>
                                            <span
                                                className='btn-infor'
                                                onClick={() => { togglePopup(item.orderId) }}
                                            ><AiFillInfoCircle /><p>Detail</p></span></td>
                                    </tr>

                                )
                            })
                            }

                        </tbody>
                    </table>
                </div>
                {showPopup && (

                    <div className='user-table mt-3 mx-1'>
                        <div className='title text-center'>Chi tiết đơn hàng: &nbsp;&nbsp;&nbsp;<Button color="secondary" className='px-3' onClick={() => { setShowPopup(!showPopup) }}>Đóng</Button></div>

                        <table id="customers">
                            <tbody>
                                <tr>
                                    {/* <th>ID Chi tiết</th> */}
                                    <th>Mã đơn hàng</th>
                                    {/* <th>Mã sản phẩm</th> */}
                                    <th>Tên sản phẩm</th>
                                    <th>Ảnh</th>
                                    <th>Giá 1 sản phẩm</th>
                                    <th>Số lượng</th>
                                    {/* <th>Tiền</th> */}
                                </tr>
                                {arrDetail && arrDetail.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            {/* <td>{item.orderdetailId}</td> */}
                                            <td>{item.orderId}</td>
                                            {/* <td>{item.productId}</td> */}
                                            <td>{item.productName} {item.color} {item.storage}</td>
                                            <td><img src={item.img1} className="img-fluid" alt=""
                                                style={{
                                                    height: "58px",
                                                }}
                                            /></td>
                                            <td>{item.price}VNĐ</td>
                                            <td>{item.quantity}</td>
                                            {/* <td>{item.quantity * item.price}VNĐ</td> */}

                                        </tr>

                                    )
                                })
                                }


                            </tbody>
                        </table>
                    </div>

                )}
            </div >
        </>
    );
}

export default OrderHistory;
