import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsFillCartDashFill } from "react-icons/bs"
import { FaUserPlus, FaUserCircle } from "react-icons/fa"
import * as actions from "../../store/actions";
// import { FcMultipleSmartphones } from "react-icons/fc"
// import { AiOutlineMenuUnfold } from "react-icons/ai"
import './HomeHeader.scss'
import logoVT from '../../assets/images/logoVT.png'
import { HiOutlineLogout } from "react-icons/hi"
// import menulogo from '../../assets/images/menu.svg'

class HomeHeader extends Component {
    render() {
        // console.log('check user info: ', this.props.userInfo
        const { isLoggedIn, processLogout, userInfo } = this.props;
        return (

            <>
                <div className='stable-header'>
                    <header className='header-upper py-3'>
                        <div className='container-xxl'>
                            <div className='row align-items-center'>
                                <div className='col-2'>
                                    <h3>
                                        <Link to="/" className='text-white'>
                                            <img src={logoVT} className='img-fluid gap-15' style={{ width: "80px", height: "80px" }}></img>
                                        </Link>
                                    </h3>
                                </div>
                                <div className='col-5'>
                                    <div className="input-group">
                                        <input
                                            type="text" className="form-control py-2"
                                            placeholder="Tìm kiếm sản phẩm ở đây..."
                                            aria-label="Tìm kiếm sản phẩm ở đây..."
                                            aria-describedby="basic-addon2" />
                                        <span className="input-group-text p-3" id="basic-addon2">
                                            <BsSearch className='fs-6' />
                                        </span>
                                    </div>
                                </div>
                                <div className='col-5'>
                                    <div className='header-upper-links d-flex align-items-center justify-content-between '>
                                        <div>
                                            <Link className='d-flex align-items-center gap-10 text-white' to='/signup'>

                                                <FaUserPlus className=' d-flex align-items-center  text-white ' style={{ width: "40px", height: "40px" }} />
                                                <p className='mb-0'>
                                                    <span className='text-white'>Đăng ký</span>
                                                    <br />
                                                </p>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link className='d-flex align-items-center gap-10 text-white' to='/login'>
                                                <FaUserCircle className=' d-flex align-items-center gap-10 text-white' style={{ width: "40px", height: "40px" }} />
                                                <p className='mb-0'>
                                                    <span className='text-white fs-50' >{isLoggedIn ? 'Hello, ' + userInfo.lastName : 'Đăng nhập'}</span>
                                                    <br />
                                                </p>

                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="/cart" className='d-flex align-items-center gap-10 text-white'>
                                                <BsFillCartDashFill className=' d-flex align-items-center gap-10 text-white' style={{ width: "40px", height: "40px" }} />
                                                <p className='mb-0'>Giỏ hàng</p>
                                            </Link>
                                        </div>
                                        <div >
                                            <span >{isLoggedIn ? <HiOutlineLogout className=' d-flex align-items-center gap-10 text-white' style={{ width: "40px", height: "40px" }} onClick={processLogout} /> : ''}</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                    <header className='header-bottom py-3'>
                        <div className='container-xxl'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='menu-bottom d-flex align-items-center '>
                                        <div className='menu-links'>
                                            <div className='d-flex align-items-center gap-50'>
                                                <NavLink to='/home'>Trang chủ</NavLink>
                                                <NavLink to='/products'>Sản phẩm</NavLink>
                                                <NavLink to='/about'>Về chúng tôi</NavLink>
                                                <NavLink to='/blog'>Blogs</NavLink>
                                                <NavLink to='/contact'>Liên hệ</NavLink>
                                                <NavLink to='/policy'>Thông tin & Điều khoản</NavLink>
                                                <a className='text-white' href='tel: 0978569372'>Liên hệ hotline : 0978569372</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>

            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
