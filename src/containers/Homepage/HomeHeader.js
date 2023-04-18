import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { BsSearch, BsFillCartDashFill } from "react-icons/bs"
import { FaUserPlus, FaUserCircle } from "react-icons/fa"
import * as actions from "../../store/actions";
// import { FcMultipleSmartphones } from "react-icons/fc"
import { BiEdit } from "react-icons/bi"
import './HomeHeader.scss'
import logoVT from '../../assets/images/logoVT.png'
import { HiOutlineLogout } from "react-icons/hi"
import { FaHistory } from "react-icons/fa"
import { MdManageAccounts } from "react-icons/md"
import { push } from "connected-react-router";
import ModalEditUser from '../EditUserInfo/ModalEditUser';
import { editUserService } from '../../services/userService';
// import menulogo from '../../assets/images/menu.svg'

class HomeHeader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModalEditUser: false,
            userEdit: {},
            inforUser: []
        }
    };


    toggleUserEditModal = () => {
        this.setState({
            isOpenModalEditUser: !this.state.isOpenModalEditUser,
        })
    }

    handleEditUser = async (user) => {
        console.log("check edit user", user)
        this.setState({
            isOpenModalEditUser: true,
            userEdit: user
        })
    }

    doEditUser = async (user) => {
        try {
            let res = await editUserService(user)
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditUser: false
                })
            }
            else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        console.log('check user info: ', this.props.cartNumber)
        let { isLoggedIn, processLogout, userInfo, cartNumber } = this.props;
        let inforUser = userInfo
        return (

            <>
                <div className='stable-header'>
                    <header className='header-upper py-3'>
                        <div className='container-xxl'>
                            <div className='row align-items-center'>
                                <div className='col-2'>
                                    <h3>
                                        <span className='text-white'>
                                            <img src={logoVT} className='img-fluid gap-15' style={{ width: "70px", height: "70px" }}></img>
                                        </span>
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
                                            {isLoggedIn && this.state.isOpenModalEditUser &&
                                                <ModalEditUser
                                                    isOpen={this.state.isOpenModalEditUser}
                                                    toggleFromParent={this.toggleUserEditModal}
                                                    currentUser={this.state.userEdit}
                                                    editUser={this.doEditUser}
                                                />
                                            }
                                            {isLoggedIn ?
                                                <div className='d-flex align-items-center gap-10 text-white'>
                                                    <BiEdit onClick={() => { this.handleEditUser(userInfo) }} className=' d-flex align-items-center  text-white ' style={{ width: "20px", height: "20px" }} />
                                                    <p className='mb-0'>
                                                        <span className='text-white' onClick={() => { this.handleEditUser(inforUser) }}>Cập nhật </span>
                                                        <br />
                                                    </p>
                                                    <Link className='d-flex align-items-center gap-10 text-white' to='/order-history'>
                                                        <FaHistory className=' d-flex align-items-center  text-white ' style={{ width: "20px", height: "20px" }} />
                                                        <p className='mb-0'>
                                                            <span className='text-white' onClick={() => { this.handleEditUser(inforUser) }}>Lịch sử</span>
                                                            <br />
                                                        </p>
                                                    </Link>
                                                </div>

                                                :
                                                <Link className='d-flex align-items-center gap-10 text-white' to='/signup'>
                                                    <FaUserPlus className=' d-flex align-items-center  text-white ' style={{ width: "20px", height: "20px" }} />
                                                    <p className='mb-0'>
                                                        <span className='text-white'>Đăng ký</span>
                                                        <br />
                                                    </p>
                                                </Link>}
                                        </div>
                                        <div>
                                            <Link className='d-flex align-items-center gap-10 text-white' to='/login'>
                                                <FaUserCircle className=' d-flex align-items-center gap-10 text-white' style={{ width: "20px", height: "20px" }} />
                                                {/* {userInfo.roleId === 1 ? <MdManageAccounts className=' d-flex align-items-center gap-10 text-white' style={{ width: "40px", height: "40px" }} /> : <FaUserCircle className=' d-flex align-items-center gap-10 text-white' style={{ width: "40px", height: "40px" }} />} */}
                                                <p className='mb-0'>
                                                    <span className='text-white fs-50' >{isLoggedIn ? userInfo.lastName : 'Đăng nhập'}</span>
                                                    <br />
                                                </p>
                                            </Link>
                                        </div>
                                        <div>
                                            <Link to="/cart" className='d-flex align-items-center gap-10 text-white position-relative'>
                                                <BsFillCartDashFill className=' d-flex align-items-center gap-10 text-white' style={{ width: "20px", height: "20px" }} />
                                                <p className='mb-0'>Giỏ hàng</p>
                                                {cartNumber > 0 && (
                                                    <div className='position-absolute back'
                                                        style={{
                                                            right: "48px",
                                                            bottom: "-10px",
                                                            borderRadius: "120%",
                                                            background: "rgb(229 111 24)",
                                                            height: "24px",
                                                            width: "24px",

                                                            padding: "4px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            fontWeight: "bold",
                                                        }}
                                                    >
                                                        {cartNumber}
                                                    </div>
                                                )}

                                            </Link>
                                        </div>
                                        <div >
                                            <span >{isLoggedIn ? <HiOutlineLogout className=' d-flex align-items-center gap-10 text-white' style={{ width: "40px", height: "40px" }} onClick={processLogout} /> : ''}</span>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                    </header >
                    <header className='header-bottom py-3'>
                        <div className='container-xxl'>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='menu-bottom d-flex align-items-center '>
                                        <div className='menu-links'>
                                            <div className='d-flex align-items-center gap-50'>

                                                <NavLink to=''></NavLink>
                                                <NavLink to=''></NavLink>
                                                <NavLink to='/home'>Trang chủ </NavLink>
                                                <NavLink to='/products'>Sản phẩm</NavLink>
                                                <NavLink to='/about'>Về chúng tôi</NavLink>
                                                <NavLink to='/contact'>Liên hệ</NavLink>
                                                <NavLink to='/policy'>Điều khoản</NavLink>
                                                <a className='text-white' href='tel: 0978569372'>Hotline : 0978569372</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div >

            </>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        cartNumber: state.cart.numberCart,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
