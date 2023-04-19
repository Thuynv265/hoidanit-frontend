import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom'
import './Cart.scss'
import ip14prm from "../../assets/images/ip14promax.jpg";
import ProductCartItem from './ProductCartItem';
import { useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import formatMoney from '../../utils/format';
import CheckoutCart from './CheckoutCart';

const ProductCartList = ({ products }) => {
    const numberCart = useSelector(state => state.cart.numberCart)

    const totalCart = () => {
        let sum = 0;
        const test = products?.map((item) => {
            sum += item.price * (item.quantity)
        })
        // products?.map((item) => {
        //     sum += item.price * (item.quantity) - item.discount
        // })
        return sum;
    }
    return (
        <div className='cart-wrapper home-wrapper-2 py-5'>
            <div
                className='container-lg rounded d-flex justify-content-between '
                style={{
                    maxWidth: '600px'

                }}
            >
                <Link to="/products" >
                    &lt;
                    &nbsp; Mua thêm sản phẩm khác

                </Link>
                <span className="mb-4 text-center ">Giỏ hàng của bạn</span>
            </div>
            <div className='container-lg bg-white rounded p-5'
                style={{
                    maxWidth: '600px',
                    borderRadius: '4px',
                    boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
                }}
            >
                <div className="row">
                    <table class="table" >

                        <tbody>
                            {products ? products?.map((product) => (
                                < ProductCartItem product={product} key={uuidv4()} />
                            )) :
                                <div>Giỏ hàng của bạn trống</div>
                            }
                        </tbody>
                    </table>
                    <div className='d-flex justify-content-between'
                        style={{
                            borderBottom: '1px solid #e0e0e0',
                            paddingBottom: '12px',
                            marginBottom: '12px',
                        }}
                    >
                        <span>Tính tạm {numberCart} sản phẩm</span>
                        <span>{formatMoney(totalCart())}đ</span>
                    </div>
                    <CheckoutCart />
                    {/* <div className="col-12 py-2 mt-4">
                            <div className="d-flex justify-content-between align-items-baseline">

                                <div className="d-flex flex-column align-items-end">
                                    <h4>Tổng tiền: $ 1000</h4>
                                    <p>Phí vận chuyển: miễn phí</p>
                                    <Link to="/checkout" className="button">
                                        Đặt hàng
                                    </Link>
                                </div>
                            </div>
                        </div> */}
                </div>



            </div>
        </div >
    )
}

export default ProductCartList;

