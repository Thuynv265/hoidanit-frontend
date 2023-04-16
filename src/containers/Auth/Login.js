import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
// import * as actions from "../store/actions";
import * as actions from "../../store/actions";
import './Login.scss';
// import { FormattedMessage } from 'react-intl';
import { handleLoginApi } from '../../services/userService';
import Meta from '../../components/Meta'
import HomeHeader from '../Homepage/HomeHeader';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'


class Login extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     username: '',
        //     password: '',
        //     isShowPassword: false,
        //     errMessage: ''
        // }
        this.state = {
            userName: '',
            passWord: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeUsername = (event) => {
        this.setState({
            userName: event.target.value
        })
        console.log(event.target.value)
    }
    handleOnChangePassword = (event) => {
        this.setState({
            passWord: event.target.value
        })
        console.log(event.target.value)
    }
    handleLogin = async () => {
        this.setState({
            errMessage: ''
        })
        console.log('username: ', this.state.userName, 'password: ', this.state.passWord)
        console.log('All state: ', this.state)
        try {
            let data = await handleLoginApi(this.state.userName, this.state.passWord)
            if (data && data.errCode !== 0) {
                this.setState({
                    errMessage: data.errMessage
                })
            }

            if (data && data.errCode === 0) {
                this.props.userLoginSuccess(data.user)
                console.log("login success")
            }

        } catch (error) {
            if (error.response) {
                if (error.response.data) {
                    this.setState({
                        errMessage: error.response.data.errMessage
                    })
                }
            }
        }
    }

    handlerShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }
    render() {
        return (
            <>
                <HomeHeader />
                <Meta title={"Đăng nhập"} />
                <div className='login-background'>
                    <div className='login-container'>
                        <div className='login-content row'>

                            <div className='text-login col-12'>
                                Login
                            </div>
                            <div className='col-12 form-group login-input'>
                                <label>User name:</label>
                                <input
                                    type='text'
                                    // value={this.state.username}
                                    onChange={(event) => {
                                        this.handleOnChangeUsername(event)
                                    }}
                                    className='form-control'
                                    placeholder='Enter your user name'
                                />
                            </div>
                            <div className='col-12 form-group login-input'>
                                <label>Password:</label>
                                <div className='custom-input-password'>
                                    <input type={this.state.isShowPassword ? 'text' : 'password'}
                                        // value={this.state.password}
                                        className='form-control'
                                        onChange={(event) => {
                                            this.handleOnChangePassword(event)
                                        }}
                                        placeholder='Enter your password' />
                                    <span onClick={() => {
                                        this.handlerShowHidePassword()
                                    }}>{this.state.isShowPassword ? <BsFillEyeFill className='eyeopen' /> : <BsFillEyeSlashFill className='eyeopen' />}</span>
                                </div>
                                <div className='col-12' style={{ color: 'red' }}>
                                    {this.state.errMessage}
                                </div>
                            </div>
                            <div className='col-12'><button className='btn-login' onClick={() => this.handleLogin()}>Login</button></div>
                            <div className='col-12'>
                                <Link to="/forgotpassword" className='col-12 text-center mt-3 text-dark'>Quên mật khẩu?</Link>

                            </div>
                            <div className='col-12 text-center mt-3'>
                                <span >Bạn chưa có tài khoản?</span>
                                <br />
                                <Link to="/signup" className="button signup">
                                    Đăng ký ngay
                                </Link>
                            </div>
                            {/* <div className='col-12 social-login'>
                                <BsFacebook className='fs-4 facebook' />
                                <BsGoogle className='fs-4 google' />
                                <Link to="/signup">
                                    Đăng ký
                                </Link>
                            </div> */}
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
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // userLoginFail: () => dispatch(actions.userLoginFail()),
        userLoginSuccess: (userInfo) => dispatch(actions.userLoginSuccess(userInfo))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
