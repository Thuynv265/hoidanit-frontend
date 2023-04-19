import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { emitter } from '../../utils/emitter';
// import { emitter } from '../../../utils/emitter';
import _ from 'lodash'
import actionTypes from '../../store/actions/actionTypes';
import "./edituser.css"
class ModalEditUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
            userName: '',
            passWord: '',
            firstName: '',
            lastName: '',
            roleId: '0',
            phone: '',
            address: ''
        }
    }

    componentDidMount() {
        let user = this.props.currentUser
        // let {currentUser} = this.props
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                userName: user.userName,
                passWord: user.passWord,
                firstName: user.firstName,
                lastName: user.lastName,
                roleId: user.roleId,
                phone: user.phone,
                address: user.address
            })
        }
    }

    toggle = () => {
        this.props.toggleFromParent()
    }

    handleOnchangeInput = (event, id) => {
        //bad code
        // this.state[id] = event.target.value;
        // this.setState({
        //     ...this.state
        // }, () => {
        //     console.log('check  bad state:', this.state)
        // })
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
        // let arrInput = ['email', 'password', 'firstName', 'lastName', 'address', 'phoneNumber', 'gender', 'roleId']
        let arrInput = ['userName', 'firstName', 'lastName', 'phone', 'address']
        for (let i = 0; i < arrInput.length; i++) {
            console.log('check inside loop: ', this.state[arrInput[i]], arrInput[i])
            if (!this.state[arrInput[i]]) {
                isValid = false;
                alert('Missing parameter: ' + arrInput[i]);
                break;
            }
        }
        return isValid;
    }

    handleSaveUser = (userInfo) => {
        let isValid = this.checkValidateInput()
        let newData = {
            ...userInfo,
            ...this.state
        }
        if (isValid === true) {
            //call api edit user
            try {
                this.props.editUser(this.state)
                this.props.updateUserInfo(newData)
            } catch (error) {
                console.log(error)
            }
        }
    }
    render() {
        const { userInfo } = this.props;
        console.log('test', userInfo)

        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => { this.toggle() }}
                    className={'modal-user-container '}
                    size='md'
                    centered

                >
                    <ModalHeader toggle={() => { this.toggle() }}>
                        Edit user
                    </ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body d-flex'
                            style={{
                                flexDirection: 'column',
                                padding: "20px"
                            }}
                        >

                            {/* <div className='edit_user_container_input'>
                                <label>Password:</label>
                                <input
                                    type='password'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'passWord') }}
                                    value={this.state.passWord}
                                    disabled
                                ></input>
                            </div> */}
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                width: "100%"
                            }}>
                                <div className='edit_user_container_input'
                                    style={{
                                        marginRight: "8px"
                                    }}
                                >
                                    <label>Firstname:</label>
                                    <input
                                        type='text'
                                        className='edit_user_container_input_field'
                                        onChange={(event) => { this.handleOnchangeInput(event, 'firstName') }}
                                        value={this.state.firstName}
                                    ></input>
                                </div>
                                <div className='edit_user_container_input'
                                    style={{
                                        marginLeft: "8px"
                                    }}
                                >
                                    <label>Lastname:</label>
                                    <input type='text'
                                        onChange={(event) => { this.handleOnchangeInput(event, 'lastName') }}
                                        className='edit_user_container_input_field'
                                        value={this.state.lastName}
                                    ></input>
                                </div>
                            </div>

                            <div className='edit_user_container_input'>
                                <label>Email:</label>
                                <input
                                    type='email'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'userName') }}
                                    className='edit_user_container_input_field'
                                    value={this.state.userName}
                                    disabled
                                ></input>
                            </div>
                            {/* <div className='edit_user_container_input'>
                                <label>Role:</label> */}
                            {/* <select
                                    name="roleId"
                                    onChange={(event) => { this.handleOnchangeInput(event, 'roleId') }}
                                    value={this.state.roleId}
                                > */}
                            {/* <option value="0">User</option>
                                    <option value="1">Admin</option> */}
                            {/* </select> */}
                            {/* <input type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'roleId') }}
                                    value={this.state.roleId === '1' ? 'Admin' : 'User'}
                                ></input>
                            </div> */}

                            <div className='edit_user_container_input'>
                                <label>Phone:</label>
                                <input
                                    type='number'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'phone') }}
                                    value={this.state.phone}
                                    className='edit_user_container_input_field'
                                ></input>
                            </div>
                            <div className='edit_user_container_input '>
                                <label>Address:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'address') }}
                                    value={this.state.address}
                                    className='edit_user_container_input_field'
                                ></input>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleSaveUser(userInfo) }}>
                            Save changes
                        </Button>{' '}
                        <Button color="secondary" className='px-3' onClick={() => { this.toggle() }}>
                            Close
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
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
        updateUserInfo: (userInfo) => dispatch({
            type: actionTypes.USER_UPDATE_SUCCESS,
            userInfo: userInfo
        })

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);





