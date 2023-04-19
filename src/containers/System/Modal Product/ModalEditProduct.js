import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { emitter } from '../../utils/emitter';
// import { emitter } from '../../../utils/emitter';

import _ from 'lodash'
class ModalEditProduct extends Component {

    constructor(props) {
        super(props)
        this.state = {
            productName: '',
            categoryId: '',
            color: '',
            storage: '',
            screen: '',
            resolution: '',
            weight: '',
            battery: '',
            material: '',
            water_resist: '',
            price: '',
            quantity: '',
            discount: '',
            warranty: '',
            img1: '',
            img2: '',
            content: '',
        }
    }

    componentDidMount() {
        let product = this.props.currentProduct
        if (product && !_.isEmpty(product)) {
            this.setState({
                productId: product.productId,
                productName: product.productName,
                categoryId: product.categoryId,
                color: product.color,
                storage: product.storage,
                screen: product.screen,
                resolution: product.resolution,
                weight: product.weight,
                battery: product.battery,
                material: product.material,
                water_resist: product.water_resist,
                price: product.price,
                discount: product.discount,
                quantity: product.quantity,
                warranty: product.warranty,
                img1: product.img1,
                img2: product.img2,
                content: product.content,
            })
        }
        console.log('didmount edit modal', this.props.currentProduct)
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
        let arrInput = ['productName', 'categoryId', 'color', 'storage', 'screen', 'resolution', 'weight', 'battery', 'material', 'water_resist', 'price', 'quantity', 'discount', 'warranty', 'img1', 'img2', 'content']
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

    handleSaveProduct = () => {
        let isValid = this.checkValidateInput()
        if (isValid === true) {
            this.props.editAction(this.state)
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
                    <ModalHeader toggle={() => { this.toggle() }}>Edit product</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Product name:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'productName') }}
                                    value={this.state.productName}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Brand:</label>
                                <select
                                    name="categoryId"
                                    onChange={(event) => { this.handleOnchangeInput(event, 'categoryId') }}
                                    value={this.state.categoryId}
                                >
                                    {/* <option value="">--</option> */}
                                    <option value="1">Iphone</option>
                                    <option value="2">Samsung</option>
                                    <option value="3">Oppo</option>
                                    <option value="4">Xiaomi</option>
                                    <option value="5">Vivo</option>
                                    <option value="6">Realme</option>
                                    <option value="7">Redmi</option>
                                    <option value="8">Nokia</option>
                                </select>
                            </div>
                            <div className='input-container'>
                                <label>Color:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'color') }}
                                    value={this.state.color}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Storage:</label>
                                {/* <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'storage') }}
                                    value={this.state.storage}
                                ></input> */}
                                <select
                                    name="storage"
                                    onChange={(event) => { this.handleOnchangeInput(event, 'storage') }}
                                    value={this.state.storage}
                                >
                                    {/* <option value="">--</option> */}
                                    <option value="3GB/32GB">3GB/32GB</option>
                                    <option value="3GB/64GB">3GB/64GB</option>
                                    <option value="4GB/64GB">4GB/64GB</option>
                                    <option value="4GB/128GB">4GB/128GB</option>
                                    <option value="6GB/64GB">6GB/64GB</option>
                                    <option value="6GB/128GB">6GB/128GB</option>
                                    <option value="6GB/256GB">6GB/256GB</option>
                                    <option value="6GB/512GB">6GB/512GB</option>
                                    <option value="6GB/1TB">6GB/1TB</option>
                                    <option value="8GB/128GB">8GB/128GB</option>
                                    <option value="8GB/256GB">8GB/256GB</option>
                                    <option value="8GB/512GB">8GB/512GB</option>
                                    <option value="8GB/1TB">8GB/1TB</option>
                                    <option value="12GB/256GB">12GB/256GB</option>
                                    <option value="12GB/512GB">12GB/512GB</option>
                                </select>
                            </div>
                            <div className='input-container'>
                                <label>Screen:</label>
                                <input
                                    type='number' step="any"
                                    onChange={(event) => { this.handleOnchangeInput(event, 'screen') }}
                                    value={this.state.screen}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Resolution:</label>
                                {/* <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'resolution') }}
                                    value={this.state.resolution}
                                ></input> */}
                                <select
                                    name="resolution"
                                    onChange={(event) => { this.handleOnchangeInput(event, 'resolution') }}
                                    value={this.state.resolution}
                                >
                                    {/* <option value="">--</option> */}
                                    <option value="NFT">NFT</option>
                                    <option value="IPS LCD">IPS LCD</option>
                                    <option value="Semi Amoled">Semi Amoled</option>
                                    <option value="Amoled">Amoled</option>
                                    <option value="Oled">Oled</option>
                                    <option value="1.5k">1.5K</option>
                                    <option value="2k">2K</option>
                                </select>
                            </div>
                            {/* <div className='input-container'>
                            </div> */}
                            <div className='input-container'>
                                <label>Weight:</label>
                                <input
                                    type='number'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'weight') }}
                                    value={this.state.weight}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Battery:</label>
                                <input
                                    type='number'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'battery') }}
                                    value={this.state.battery}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Material:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'material') }}
                                    value={this.state.material}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Water Resist:</label>
                                {/* <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'water_resist') }}
                                    value={this.state.water_resist}
                                ></input> */}
                                <select
                                    name="water_resist"
                                    onChange={(event) => { this.handleOnchangeInput(event, 'water_resist') }}
                                    value={this.state.water_resist}
                                >
                                    {/* <option value="">--</option> */}
                                    <option value="NFT">Không kháng nước</option>
                                    <option value="IPS LCD">Chuẩn IP 53</option>
                                    <option value="Semi Amoled">Chuẩn IP 67</option>
                                    <option value="Amoled">Chuẩn IP 68</option>
                                </select>
                            </div>
                            <div className='input-container'>
                                <label>Price:</label>
                                <input
                                    type='number'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'price') }}
                                    value={this.state.price}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Quantity:</label>
                                <input
                                    type='number'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'quantity') }}
                                    value={this.state.quantity}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Discount:</label>
                                <input
                                    type='number'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'discount') }}
                                    value={this.state.discount}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Warranty:</label>
                                <input
                                    type='number'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'warranty') }}
                                    value={this.state.warranty}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Image 1:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'img1') }}
                                    value={this.state.img1}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Image 2:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'img2') }}
                                    value={this.state.img2}
                                ></input>
                            </div>
                            <div className='input-container max-width-input'>
                                <label>Content:</label>
                                <textarea
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'content') }}
                                    value={this.state.content}
                                ></textarea>
                            </div>

                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleSaveProduct() }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditProduct);





