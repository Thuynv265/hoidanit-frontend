import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
// import { BsFacebook, BsGoogle, BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import './Signup.scss';
// import { FormattedMessage } from 'react-intl';
// import { handleLoginApi } from '../../services/userService';
import Meta from '../../components/Meta'
import HomeHeader from '../Homepage/HomeHeader';
import Footer from '../Footer/Footer';
// import { NavLink, Link } from 'react-router-dom'
import { createNewUserService } from '../../services/userService'


class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            passWord: '',
            firstName: '',
            roleId: '0',
            lastName: '',
            phone: '',
            address: ''
        }
    }

    componentDidMount() {
        console.log('mounting modal')
    }
    handleOnchangeInput = (event, id) => {
        //good code
        let copyState = {
            ...this.state
        }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    checkValidateInput = () => {
        let isValid = true
        let arrInput = ['userName', 'passWord', 'firstName', 'lastName', 'phone', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            console.log('check inside loop: ', this.state[arrInput[i]], arrInput[i])
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Thiếu trường thông tin: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }
    createNewUser = async (data) => {
        try {
            let res = await createNewUserService(data)
            if (res && res.errCode !== 0) {
                alert(res.errMessage)
            }
            else {
                alert('Đăng ký thành công')
                let copyState = {
                    userName: '',
                    passWord: '',
                    firstName: '',
                    roleId: '0',
                    lastName: '',
                    phone: '',
                    address: ''
                }
                this.setState = ({
                    ...copyState
                })
            }
        } catch (e) {
            console.log(e)
        }
    }

    handleAddNewUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid === true) {
            //call api create user
            this.createNewUser(this.state)
            console.log('data model:', this.state)

        }
    }


    render() {

        return (
            <>
                <HomeHeader />
                <Meta title={"Đăng ký tài khoản"} />
                <div className='container-xxl'>
                    <div className="login-wrapper py-5 home-wrapper-2">
                        <div className="row">
                            <div className="col-12">
                                <div className="auth-card">
                                    <h3 className="text-center mb-3">Tạo tài khoản mới</h3>
                                    <form action="" className="d-flex flex-column gap-15">
                                        <label>Tên đăng nhập:</label>
                                        <input
                                            type='email'
                                            className='form-control'
                                            onChange={(event) => { this.handleOnchangeInput(event, 'userName') }}
                                            value={this.state.userName}
                                        ></input>
                                        <label>Mật khẩu:</label>
                                        <input
                                            type='password'
                                            className='form-control'
                                            onChange={(event) => { this.handleOnchangeInput(event, 'passWord') }}
                                            value={this.state.passWord}
                                        ></input>
                                        <label>Họ:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            onChange={(event) => { this.handleOnchangeInput(event, 'firstName') }}
                                            value={this.state.firstName}
                                        ></input>
                                        <label>Tên:</label>
                                        <input type='text'
                                            className='form-control'
                                            onChange={(event) => { this.handleOnchangeInput(event, 'lastName') }}
                                            value={this.state.lastName}
                                        ></input>
                                        <label>Địa chỉ:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            onChange={(event) => { this.handleOnchangeInput(event, 'address') }}
                                            value={this.state.address}
                                        ></input>
                                        <label>Số điện thoại:</label>
                                        <input
                                            type='text'
                                            className='form-control'
                                            onChange={(event) => { this.handleOnchangeInput(event, 'phone') }}
                                            value={this.state.phone}
                                        ></input>
                                        {/* <label>Vai trò:</label>
                                        <select
                                            name="roleId"
                                            onChange={(event) => { this.handleOnchangeInput(event, 'roleId') }}
                                            value={this.state.roleId}
                                        >
                                            <option value="0">Người dùng</option>
                                        </select> */}
                                        <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                                            <span className='button border-0' onClick={() => { this.handleAddNewUser() }}>
                                                Đăng ký
                                            </span>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>

        )
    }
}

const mapStateToProps = state => {
    return {
        // language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
