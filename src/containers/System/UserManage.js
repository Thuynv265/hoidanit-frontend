import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { getAllUsers, createNewUserService, deleteUserService, editUserService } from '../../services/userService'
import ModalUser from './Modal user/ModalUser';
// import ModalEditUser from './Modal user/ModalEditUser';
import ModalDeleteUser from './Modal user/ModalDeleteUser';
import { emitter } from '../../utils/emitter';
import CustomScrollbars from '../../components/CustomScrollbars';

class UserManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrUsers: [],
            isOpenModalUser: false,
            isOpenModalEditUser: false,
            isOpenModalDeleteUser: false,
            userEdit: {},
            userDelete: {}
        }
    }

    async componentDidMount() {
        await this.getAllUsersFromReact()
    }

    getAllUsersFromReact = async () => {
        let response = await getAllUsers('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrUsers: response.users
            })
        }
    }
    /*
    life cycle:
    run component:
    1.run construct => init state
    2 did mount(set State): khi muon gan gia tri cho state
    3.render
    */
    handleAddNewUser = () => {
        this.setState({
            isOpenModalUser: true
        })
    }
    toggleUserModal = () => {
        this.setState({
            isOpenModalUser: !this.state.isOpenModalUser,
        })
    }
    // toggleUserEditModal = () => {
    //     this.setState({
    //         isOpenModalEditUser: !this.state.isOpenModalEditUser,
    //     })
    // }

    toggleUserDeleteModal = () => {
        this.setState({
            isOpenModalDeleteUser: !this.state.isOpenModalDeleteUser,
        })
    }

    createNewUser = async (data) => {
        try {
            let res = await createNewUserService(data)
            if (res && res.errCode !== 0) {
                alert(res.errMessage)
            }
            else {
                await this.getAllUsersFromReact()
                this.setState({
                    isOpenModalUser: false
                })
                // emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' })  neu truyen data
                emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' })
            }
        } catch (e) {
            console.log(e)
        }
    }

    // handleEditUser = async (user) => {
    //     console.log("check edit user", user)
    //     this.setState({
    //         isOpenModalEditUser: true,
    //         userEdit: user
    //     })
    // }
    handleDeleteUser = async (user) => {
        console.log("check delete user", user)
        this.setState({
            isOpenModalDeleteUser: true,
            userDelete: user
        })
    }

    // doEditUser = async (user) => {
    //     try {
    //         let res = await editUserService(user)
    //         if (res && res.errCode === 0) {
    //             this.setState({
    //                 isOpenModalEditUser: false
    //             })
    //             await this.getAllUsersFromReact()
    //         }
    //         else {
    //             alert(res.errMessage)
    //         }
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    deleteUser = async (user) => {
        console.log('click delete', user)
        try {
            let res = await deleteUserService(user.id)
            // if (res && res.errCode === 0) {
            if (res) {
                this.setState({
                    isOpenModalDeleteUser: false
                })
                await this.getAllUsersFromReact()
            }
            else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        let arrUsers = this.state.arrUsers[0]
        // console.log(arrUsers)
        return (
            <div className="users-container">

                {/* <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                /> */}
                {/* {this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromParent={this.toggleUserEditModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}
                    />
                } */}
                {this.state.isOpenModalDeleteUser &&
                    <ModalDeleteUser
                        isOpen={this.state.isOpenModalDeleteUser}
                        toggleFromParent={this.toggleUserDeleteModal}
                        deluser={this.state.userDelete}
                        deleteuser={this.deleteUser}

                    />}
                <div className='title text-center'>Manage users with admin:</div>
                <div className='mx1'>
                    {/* <button
                        className='btn btn-primary px-3'
                        onClick={() => { this.handleAddNewUser() }}
                    >
                        <i className='fas fa-plus'></i>
                        Add new user
                    </button> */}
                </div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>Email</th>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>RoleId</th>
                                <th>Phone</th>
                                <th>Address</th>
                                <th>Actions</th>
                            </tr>
                            {arrUsers && arrUsers.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.roleId}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            {/* <button
                                                className='btn-edit'
                                                onClick={() => { this.handleEditUser(item) }}
                                            ><i className='fas fa-pencil-alt'></i>Edit</button> */}
                                            <button
                                                className='btn-delete'
                                                onClick={() => { this.handleDeleteUser(item) }}
                                            ><i className='fas fa-trash'></i>Delete</button>
                                        </td>
                                    </tr>

                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
