import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import * as actions from "../../store/actions";
// import Navigator from '../../components/Navigator';
// import { adminMenu } from './menuApp';
import './Header.scss';
// import { AiOutlineMenuUnfold } from "react-icons/ai"
import { HiOutlineLogout } from "react-icons/hi"
import '../Homepage/HomeHeader.scss'
// import logoVT from '../../assets/images/logoVT.png'

class Header extends Component {

    render() {
        const { processLogout, userInfo } = this.props;
        console.log('check userInfor', userInfo)
        return (
            // <div className="header-container">
            //     {/* thanh navigator */}
            //     <div className="header-tabs-container">
            // <Navigator menus={adminMenu} />
            //     </div>

            //     {/* nút logout */}
            //     <div className="btn btn-logout" onClick={processLogout}>
            //         <i className="fas fa-sign-out-alt"></i>
            //     </div>
            // </div>
            <>
                <header className='header-upper py-3'>
                    <div className='container-xxl'>
                        <div className='row align-items-center'>
                            {/* <div className='col-2'>
                                <h3>
                                    <Link to="/" className='text-white'>
                                        <img src={logoVT} className='img-fluid gap-15' style={{ width: "80px", height: "80px" }}></img>
                                    </Link>
                                </h3>
                            </div> */}
                            <div className='col-12'>
                                <div className='header-upper-links d-flex align-items-center justify-content-between gap-30'>
                                    <div>
                                        <Link className='d-flex align-items-centertext-white' to='/home'>
                                            <p className='mb-0'>
                                                <span className='text-white'>Trang chủ VT-mobile </span>
                                                <br />
                                            </p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className='d-flex align-items-centertext-white' to='/system/user-manage'>
                                            <p className='mb-0'>
                                                <span className='text-white'>Quản lý người dùng </span>
                                                <br />
                                            </p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link className='d-flex align-items-center text-white' to='/system/product-manage'>
                                            <p className='mb-0'>
                                                <span className='text-white'>Quản lý sản phẩm </span>
                                                <br />
                                            </p>

                                        </Link>
                                    </div>
                                    <div>
                                        <Link className='d-flex align-items-center text-white' to='/system/category-manage'>
                                            <p className='mb-0'>
                                                <span className='text-white' >Quản lý danh mục sản phẩm</span>
                                                <br />
                                            </p>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to="/" className='d-flex align-items-center text-white'>
                                            <p className='mb-0'>
                                                <span className='text-white' >Quản lý đơn hàng</span>
                                                <br />
                                            </p>

                                        </Link>
                                    </div>
                                    <div>
                                        <p className='mb-0'>
                                            <span className='text-white' >Welcome, {userInfo && userInfo.lastName ? userInfo.lastName : ''}</span>
                                            <br />
                                        </p>

                                    </div>
                                    <div>
                                        <Link to="/" className='d-flex align-items-center  text-white'>
                                            <HiOutlineLogout className=' d-flex align-items-center text-white' style={{ width: "40px", height: "40px" }} onClick={processLogout} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
