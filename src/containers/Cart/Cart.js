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


const Cart = () => {
    const listItem = useSelector(cartDataSelector);
    console.log(listItem)
    return (
        <>
            <HomeHeader></HomeHeader>
            <Meta title={"Giỏ hàng"} />
            <ProductCartList products={listItem} />
            <Footer></Footer>
        </>
    )
}

export default Cart;