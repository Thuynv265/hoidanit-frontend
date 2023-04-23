import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss'
import { createNewCategoryService, deleteCategoryService, editCategoryService, getAllCategory } from '../../services/userService'
import { emitter } from '../../utils/emitter';
// import CustomScrollbars from '../../components/CustomScrollbars'
import ModalDeleteCategory from './Modal Category/ModalDeleteCategory';
import ModalAddCategory from './Modal Category/ModalAddCategory';
import ModalEditCategory from './Modal Category/ModalEditCategory';

class CategoryManage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            arrCategory: [],
            isOpenModalAddCategory: false,
            isOpenModalEditCategory: false,
            isOpenModalDeleteCategory: false,
            categoryEdit: {},
            categoryDelete: {}
        }
    }

    async componentDidMount() {
        await this.getAllCategoryFromReact()
    }

    getAllCategoryFromReact = async () => {
        let response = await getAllCategory('ALL')
        if (response && response.errCode === 0) {
            this.setState({
                arrCategory: response.category
            })
        }
    }
    handleAddNewCategory = () => {
        this.setState({
            isOpenModalAddCategory: true
        })
    }
    toggleAddCategoryModal = () => {
        this.setState({
            isOpenModalAddCategory: !this.state.isOpenModalAddCategory,
        })
    }
    toggleCategoryEditModal = () => {
        this.setState({
            isOpenModalEditCategory: !this.state.isOpenModalEditCategory,
        })
    }

    toggleCategoryDeleteModal = () => {
        this.setState({
            isOpenModalDeleteCategory: !this.state.isOpenModalDeleteCategory
        })
    }
    createNewCategory = async (data) => {
        try {
            let res = await createNewCategoryService(data)
            if (res && res.errCode !== 0) {
                alert(res.errMessage)
            }
            else {
                await this.getAllCategoryFromReact()
                this.setState({
                    isOpenModalAddCategory: false
                })
                // emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' })  neu truyen data
                emitter.emit('EVENT_CLEAR_MODAL_DATA', { 'id': 'your id' })
            }
        } catch (e) {
            console.log(e)
        }
    }
    handleEditCategory = async (category) => {
        console.log("check edit category", category)
        this.setState({
            isOpenModalEditCategory: true,
            categoryEdit: category
        })
    }


    handleDeleteCategory = async (category) => {
        console.log("check delete product", category)
        this.setState({
            isOpenModalDeleteCategory: true,
            categoryDelete: category
        })
    }

    doEditCategory = async (category) => {
        try {
            let res = await editCategoryService(category)
            if (res && res.errCode === 0) {
                this.setState({
                    isOpenModalEditCategory: false
                })
                await this.getAllCategoryFromReact()
            }
            else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }


    deleteCategory = async (category) => {
        console.log('click delete', category)
        try {
            let res = await deleteCategoryService(category.categoryId)
            if (res) {
                this.setState({
                    isOpenModalDeleteCategory: false
                })
                await this.getAllCategoryFromReact()
            }
            else {
                alert(res.errMessage)
            }
        } catch (e) {
            console.log(e)
        }
    }
    render() {
        let arrCategory = this.state.arrCategory[0]
        return (
            <div className="users-container">

                <ModalAddCategory
                    isOpen={this.state.isOpenModalAddCategory}
                    toggleFromParent={this.toggleAddCategoryModal}
                    createNewCategory={this.createNewCategory}
                />
                {this.state.isOpenModalEditCategory &&
                    <ModalEditCategory
                        isOpen={this.state.isOpenModalEditCategory}
                        toggleFromParent={this.toggleCategoryEditModal}
                        currentCategory={this.state.categoryEdit}
                        editAction={this.doEditCategory}
                    />
                }

                {this.state.isOpenModalDeleteCategory &&
                    <ModalDeleteCategory
                        isOpen={this.state.isOpenModalDeleteCategory}
                        toggleFromParent={this.toggleCategoryDeleteModal}
                        delCategory={this.state.categoryDelete}
                        deleteAction={this.deleteCategory}

                    />}
                <div className='title text-center'>Manage category with admin:</div>
                <div className='mx1'>
                    <button
                        className='btn btn-primary px-3'
                        onClick={() => { this.handleAddNewCategory() }}
                    >
                        <i className='fas fa-plus'></i>
                        Add new category
                    </button>
                </div>
                <div className='user-table mt-3 mx-1'>
                    <table id="customers">
                        <tbody>
                            <tr>
                                <th>Category ID</th>
                                <th>Category name</th>
                                <th>Actions</th>
                            </tr>
                            {arrCategory && arrCategory.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.categoryId}</td>
                                        <td>{item.categoryName}</td>
                                        <td>
                                            <button
                                                className='btn-edit'
                                                onClick={() => { this.handleEditCategory(item) }}
                                            ><i className='fas fa-pencil-alt'></i>Edit</button>
                                            <button
                                                className='btn-delete'
                                                onClick={() => { this.handleDeleteCategory(item) }}
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryManage);
