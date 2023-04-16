import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import Meta from '../../components/Meta'
import './Checkout.scss'
import HomeHeader from '../Homepage/HomeHeader';
import Footer from '../Footer/Footer';
import ip14prm from "../../assets/images/ip14promax.jpg";
import { BiArrowBack } from "react-icons/bi";
const Checkout = () => {
    const products = useSelector(state => state.cart.Carts)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onInputChange = (e, field) => {
        switch (field) {
            case 'name':

        }
    }

    return (
        <>
            <HomeHeader></HomeHeader>
            <Meta title={"Về cửa hàng"} />
            <div className='checkout-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">Thanh toán</h3>
                                <nav
                                    style={{ "--bs-breadcrumb-divider": ">" }}
                                    aria-label="breadcrumb"
                                >
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item">
                                            <Link className="text-dark total-price" to="/cart">
                                                Giỏ hàng
                                            </Link>

                                        </li>
                                        &nbsp; /&nbsp;
                                        <li
                                            className="breadcrumb-ite total-price active"
                                            aria-current="page"
                                        >
                                            Thông tin giao hàng
                                        </li>
                                        {/* &nbsp; /
                                            <li className="breadcrumb-item total-price active">
                                                Shipping
                                            </li>
                                            &nbsp; /
                                            <li
                                                className="breadcrumb-item total-price active"
                                                aria-current="page"
                                            >
                                                Payment
                                            </li> */}
                                    </ol>
                                </nav>
                                <h4 className="title total">Thông tin giao hàng</h4>
                                {/* <p className="user-details total">
                                        Ngyen Van Thuy (19021371@vnu.edu.vn)
                                    </p> */}

                                <form
                                    action=""
                                    className="d-flex gap-15 flex-wrap justify-content-between"
                                >
                                    <div className="flex-grow-1">
                                        <h4 className="mb-3">Tên:</h4>
                                        <input
                                            type="text"
                                            placeholder="Tên người nhận"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="flex-grow-1">
                                        <h4 className="mb-3">Họ:</h4>
                                        <input
                                            type="text"
                                            placeholder="Họ"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <h4 className="mb-3">Số nhà:</h4>
                                        <input
                                            type="text"
                                            placeholder="Số nhà cụ thể"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <h4 className="mb-3">Địa chỉ nhận hàng:</h4>
                                        <input
                                            type="text"
                                            placeholder="Địa chỉ nhận hàng: phố/phường/quận/thành phố"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <h4 className="mb-3">Điện thoại liên hệ:</h4>
                                        <input
                                            type="text"
                                            placeholder="Số điện  thoại"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <h4 className="mb-3">Ghi chú (nếu có):</h4>
                                        <input
                                            type="text"
                                            placeholder="Ghi chú"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <Link to="/cart" className="text-dark">
                                                <BiArrowBack className="me-2" />
                                                Quay lại giỏ hàng
                                            </Link>
                                            {/* <Link to="/cart" className="button">
                                                    Continue to Shipping
                                                </Link> */}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="border-bottom py-4">
                                <div className="d-flex gap-10 mb-2 align-align-items-center">
                                    <div className="w-75 d-flex gap-10">
                                        <div className="w-25 position-relative">
                                            <span
                                                style={{ top: "-10px", right: "2px" }}
                                                className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                                            >
                                                1
                                            </span>
                                            <img className="img-fluid" src={ip14prm} alt="product" />
                                        </div>
                                        <div>
                                            <h5 className="total-price">Tên sản phẩm</h5>
                                            <p className="total-price">Màu: Bộ nhớ:</p>
                                        </div>
                                    </div>
                                    <div className="flex-grow-1">
                                        <h5 className="total">Giá:</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom py-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="total">Tổng tiền:</p>
                                    <p className="total-price">$ 10000</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-0 total">Phí ship:</p>
                                    <p className="mb-0 total-price">0 VNĐ</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center border-bootom py-4">
                                <h4 className="total">Tổng thanh toán</h4>
                                <h4 className="total-price">Tiền thanh toán</h4>
                            </div>
                            <div>
                                <span className="button align-item-center">
                                    Đặt hàng
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
}

export default Checkout;
