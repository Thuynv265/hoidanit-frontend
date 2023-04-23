import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { emitter } from '../../utils/emitter';
// import { emitter } from '../../../utils/emitter';

import _ from 'lodash'
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
        console.log('didmount edit modal', this.props.currentUser.id)
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

    handleSaveUser = () => {
        let isValid = this.checkValidateInput()
        if (isValid === true) {
            //call api edit user
            this.props.editUser(this.state)
        }
    }
    render() {
        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => { this.toggle() }}
                    className={'modal-user-container '}
                    size='lg'
                    centered
                >
                    <ModalHeader toggle={() => { this.toggle() }}>Edit user</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Email:</label>
                                <input
                                    type='email'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'userName') }}
                                    value={this.state.userName}
                                    disabled
                                ></input>
                            </div>
                            {/* <div className='input-container'>
                                <label>Password:</label>
                                <input
                                    type='password'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'passWord') }}
                                    value={this.state.passWord}
                                    disabled
                                ></input>
                            </div> */}
                            <div className='input-container'>
                                <label>Firstname:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'firstName') }}
                                    value={this.state.firstName}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Lastname:</label>
                                <input type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'lastName') }}
                                    value={this.state.lastName}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Role:</label>
                                {/* <select
                                    name="roleId"
                                    onChange={(event) => { this.handleOnchangeInput(event, 'roleId') }}
                                    value={this.state.roleId}
                                > */}
                                {/* <option value="0">User</option>
                                    <option value="1">Admin</option> */}
                                {/* </select> */}
                                <input type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'roleId') }}
                                    value={this.state.roleId === '1' ? 'Admin' : 'User'}
                                ></input>
                            </div>

                            <div className='input-container'>
                                <label>Phone:</label>
                                <input
                                    type='number'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'phone') }}
                                    value={this.state.phone}
                                ></input>
                            </div>
                            <div className='input-container '>
                                <label>Address:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'address') }}
                                    value={this.state.address}
                                ></input>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleSaveUser() }}>
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
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);





