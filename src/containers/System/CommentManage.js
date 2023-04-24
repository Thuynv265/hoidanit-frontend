import React, { Component } from 'react';
import { connect } from 'react-redux';
import './UserManage.scss'
import { deleteCommentService, getManageComment } from '../../services/userService'
// import { emitter } from '../../utils/emitter';
import ModalDeleteComment from './ModalComment/ModalDeleteComment';

class CommentManage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arrComments: [],
            isOpenModalDeleteComment: false,
        }
    }

    async componentDidMount() {
        await this.getAllComment()
    }

    getAllComment = async () => {
        let response = await getManageComment('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrComments: response.comment
            })
        }
    }

    toggleDeleteModal = () => {
        this.setState({
            isOpenModalDeleteComment: !this.state.isOpenModalDeleteComment,
        })
    }

    handleDeleteComment = async (comment) => {
        // console.log("check delete comment", comment)
        this.setState({
            isOpenModalDeleteComment: true,
            commentDelete: comment
        })
    }


    deleteComment = async (comment) => {
        // console.log('click delete', comment)
        try {
            let res = await deleteCommentService(comment.commentId)
            // if (res && res.errCode === 0) {
            if (res) {
                this.setState({
                    isOpenModalDeleteComment: false
                })
                await this.getAllComment()
            }
            else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        let arrComments = this.state.arrComments[0]
        return (
            <div className="users-container">
                {this.state.isOpenModalDeleteComment &&
                    <ModalDeleteComment
                        isOpen={this.state.isOpenModalDeleteComment}
                        toggleFromParent={this.toggleDeleteModal}
                        delComment={this.state.commentDelete}
                        deleteAction={this.deleteComment}

                    />}
                <div className='title text-center'>Manage comments with admin:</div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>ID</th>
                                <th>User ID</th>
                                <th>User Name</th>
                                <th>Content</th>
                                <th>Product ID</th>
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Created At</th>
                                <th>Action</th>
                            </tr>
                            {arrComments && arrComments.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.commentId}</td>
                                        <td>{item.userId}</td>
                                        <td>{item.firstName} {item.lastName}</td>
                                        <td>{item.content}</td>
                                        <td>{item.productId}</td>
                                        <td>{item.productName} {item.color} {item.storage}</td>
                                        <td><img src={item.img1} className="img-fluid" alt=""
                                            style={{
                                                height: "58px",
                                            }}></img></td>
                                        <td>{item.createdAt}</td>
                                        <td>
                                            <button
                                                className='btn-delete'
                                                onClick={() => { this.handleDeleteComment(item) }}
                                            ><i className='fas fa-trash'></i>Delete</button>
                                        </td>
                                    </tr>

                                )
                            })}

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

export default connect(mapStateToProps, mapDispatchToProps)(CommentManage);
