import React, { Component } from 'react';
import { connect } from 'react-redux';
import Marquee from "react-fast-marquee";
import Meta from '../../components/Meta'
import './orderHistory.scss'
import Footer from '../Footer/Footer';
import HomeHeader from '../Homepage/HomeHeader';
import { RiInformationFill } from "react-icons/ri"

class orderHistory extends Component {
    render() {
        let { isLoggedIn, userInfo } = this.props;
        return (
            <>
                <HomeHeader />
                <Meta title={"Lịch sử đơn hàng"} />
                <div className="users-container">
                    {/* <ModalUser
                    isOpen={this.state.isOpenModalUser}
                    toggleFromParent={this.toggleUserModal}
                    createNewUser={this.createNewUser}
                />
                {this.state.isOpenModalEditUser &&
                    <ModalEditUser
                        isOpen={this.state.isOpenModalEditUser}
                        toggleFromParent={this.toggleUserEditModal}
                        currentUser={this.state.userEdit}
                        editUser={this.doEditUser}
                    />
                }
                {this.state.isOpenModalDeleteUser &&
                    <ModalDeleteUser
                        isOpen={this.state.isOpenModalDeleteUser}
                        toggleFromParent={this.toggleUserDeleteModal}
                        deluser={this.state.userDelete}
                        deleteuser={this.deleteUser}

                    />} */}
                    <div className='title text-center'>Lịch sử đặt hàng của bạn:</div>
                    {/* <div className='mx1'>
                        <button
                            className='btn btn-primary px-3'
                            onClick={() => { this.handleAddNewUser() }}
                        >
                            <i className='fas fa-plus'></i>
                            Add new user
                        </button>
                    </div> */}
                    <div className='user-table mt-3 mx-1'>
                        <table id="customers">
                            <tbody>
                                <tr>
                                    <th>ID đơn</th>
                                    <th>Tên người nhận</th>
                                    <th>Số điện thoại</th>
                                    <th>Địa chỉ nhận hàng</th>
                                    <th>Phương thức giao hàng</th>
                                    <th>Ngày đặt</th>
                                    <th>Trạng thái</th>
                                    <th>Actions</th>
                                </tr>
                                <tr>
                                    <td>123</td>
                                    <td>Thuy Van</td>
                                    <td>0978569372</td>
                                    <td>Ha Noi</td>
                                    <td>COD</td>
                                    <td>12/4/2023</td>
                                    <td>Đã hoàn thành</td>
                                    <td>
                                        <button
                                            className='btn-edit'
                                        ><RiInformationFill className='fs-6' /><h7>Detail</h7></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>123</td>
                                    <td>Thuy Van</td>
                                    <td>0978569372</td>
                                    <td>COD</td>
                                    <td>Ha Noi</td>
                                    <td>12/4/2023</td>
                                    <td>Đã hoàn thành</td>
                                    <td>
                                        <button
                                            className='btn-edit'
                                        ><RiInformationFill className='fs-6' /><h7>Detail</h7></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>123</td>
                                    <td>Thuy Van</td>
                                    <td>0978569372</td>
                                    <td>COD</td>
                                    <td>Ha Noi</td>
                                    <td>12/4/2023</td>
                                    <td>Đã hoàn thành</td>
                                    <td>
                                        <button
                                            className='btn-edit'
                                        ><RiInformationFill className='fs-6' /><h7>Detail</h7></button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>123</td>
                                    <td>Thuy Van</td>
                                    <td>0978569372</td>
                                    <td>COD</td>
                                    <td>Ha Noi</td>
                                    <td>12/4/2023</td>
                                    <td>Đã hoàn thành</td>
                                    <td>
                                        <button
                                            className='btn-edit'
                                        ><RiInformationFill className='fs-6' /><h7>Detail</h7></button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div >
                {/* <Footer></Footer> */}
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(orderHistory);
