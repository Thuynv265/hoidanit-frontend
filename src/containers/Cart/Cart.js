import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Meta from '../../components/Meta'
import './Cart.scss'
import HomeHeader from '../Homepage/HomeHeader';
import Footer from '../Footer/Footer';
import { AiFillDelete } from "react-icons/ai";
import ip14prm from "../../assets/images/ip14promax.jpg";
import { cartDataSelector } from '../../store/selectors';


const Cart = () => {
    const listItem = useSelector(cartDataSelector);

    return (
        <>
            <HomeHeader></HomeHeader>
            <Meta title={"Về cửa hàng"} />
            <div className='cart-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
                                <h3 className="cart-col-1">Tên sản phẩm</h3>
                                <h3 className="cart-col-2">Giá</h3>
                                <h3 className="cart-col-3">Số lượng</h3>
                                <h3 className="cart-col-4">Tổng</h3>
                            </div>
                            <div className="cart-data py-3 mb-2 d-flex justify-content-between align-items-center">
                                <div className="cart-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img src={ip14prm} className="img-fluid" alt="product image" />
                                    </div>
                                    <div className="w-75">
                                        <p>Tên sản phẩm ở đây:</p>
                                        <p>Màu ở đây:</p>
                                        <p>Phiên bản RAM/ROM:</p>
                                    </div>
                                </div>
                                <div className="cart-col-2">
                                    <h5 className="price">Giá ở đây</h5>
                                </div>
                                <div className="cart-col-3 d-flex align-items-center gap-15">
                                    <div>
                                        <input
                                            className="form-control"
                                            type="number"
                                            name=""
                                            min={1}
                                            max={10}
                                            id=""
                                        />
                                    </div>
                                    <div>
                                        <AiFillDelete className="text-danger " />
                                    </div>
                                </div>
                                <div className="cart-col-4">
                                    <h5 className="price">$ 100</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 py-2 mt-4">
                            <div className="d-flex justify-content-between align-items-baseline">
                                <Link to="/products" className="button">
                                    Tiếp tục mua sắm
                                </Link>
                                <div className="d-flex flex-column align-items-end">
                                    <h4>Tổng tiền: $ 1000</h4>
                                    <p>Phí vận chuyển: miễn phí</p>
                                    <Link to="/checkout" className="button">
                                        Đặt hàng
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Cart;