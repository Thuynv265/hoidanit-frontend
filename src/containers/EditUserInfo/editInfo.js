import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import './editInfor.scss';
// import { FormattedMessage } from 'react-intl';
// import { handleLoginApi } from '../../services/userService';
import Meta from '../../components/Meta'
import HomeHeader from '../Homepage/HomeHeader';
import Footer from '../Footer/Footer';
// import { NavLink, Link } from 'react-router-dom'
import { editUserService } from '../../services/userService'
import ModalEditUser from './ModalEditUser';
import { emitter } from '../../utils/emitter';

class editInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpenModalEditUser: false,
            userEdit: {}
        }
    }

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
        const { userInfo } = this.props;
        return (
            <>
                <HomeHeader />
                <Meta title={"Đăng ký tài khoản"} />
                <div className='container-xxl'>
                    <div className="login-wrapper py-5 home-wrapper-2">
                        <div className="row">
                            <div className="col-12">
                                <div className="auth-card">
                                    {this.state.isOpenModalEditUser &&
                                        <ModalEditUser
                                            isOpen={this.state.isOpenModalEditUser}
                                            toggleFromParent={this.toggleUserEditModal}
                                            currentUser={this.state.userEdit}
                                            editUser={this.doEditUser}
                                        />
                                    }
                                    <h3 className="text-center mb-3">Chỉnh sửa thông tin</h3>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <label>Tên đăng nhập:</label>
                                        <input
                                            type='email'
                                            className='form-control'
                                            disabled
                                            placeholder={userInfo.userName}
                                        ></input>
                                        <label>Mật khẩu:</label>
                                        <input
                                            type='password'
                                            className='form-control'
                                            disabled
                                            placeholder={'*********'}

                                        ></input>
                                        <label>Họ:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            disabled
                                            placeholder={userInfo.firstName}
                                        ></input>
                                        <label>Tên:</label>
                                        <input type='text'
                                            className='form-control'
                                            disabled
                                            placeholder={userInfo.lastName}
                                        ></input>
                                        <label>Địa chỉ:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            disabled
                                            placeholder={userInfo.address}
                                        ></input>
                                        <label>Số điện thoại:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            disabled
                                            placeholder={userInfo.phone}
                                        ></input>
                                        <label>Vai trò:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            disabled
                                            placeholder={userInfo.roleId === 0 ? "Người dùng" : "Admin"}
                                        >
                                        </input>
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <span className='button border-0' onClick={() => { this.handleEditUser(userInfo) }}>
                                                Cập nhật thông tin?
                                            </span>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <Footer />
            </>

        )
    }
}

const mapStateToProps = state => {
    return {
        // language: state.app.language,
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(editInfo);
