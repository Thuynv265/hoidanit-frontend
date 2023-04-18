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
import ProductCartList from './ProductCartList';
import { BsCartXFill } from "react-icons/bs";
import { BiBorderRadius } from 'react-icons/bi';
import './Cart.scss'

const Cart = () => {
    const isLoggedIn = useSelector(state => state.user.isLoggedIn);
    const listItem = useSelector(cartDataSelector);
    const numberCart = useSelector(state => state.cart.numberCart);
    console.log(listItem)

    if (!isLoggedIn) {
        return <Redirect to="/login" />
    }

    return (
        <>
            <HomeHeader></HomeHeader>
            <Meta title={"Giỏ hàng"} />
            {numberCart > 0 ?
                <ProductCartList products={listItem} />
                :
                <div
                    style={{
                        height: "400px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <BsCartXFill className=' m-5'
                        style={{
                            fontSize: "80px",
                        }}
                    />
                    <span
                        style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                        }}
                    >Không có sản phẩm nào trong giỏ hàng
                    </span>
                    <Link to="/products">
                        <button
                            className='cart-btn-no-product'
                            style={{
                                padding: "10px 20px",
                                background: "#131921",
                                borderRadius: "4px",
                                color: "white",
                                fontWeight: "bold",
                                width: "400px",
                                border: "none",
                            }}
                        > Về trang sản phẩm</button>
                    </Link>
                </div>
            }




            <Footer></Footer>
        </>
    )
}

export default Cart;