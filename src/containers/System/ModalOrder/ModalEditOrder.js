import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { emitter } from '../../utils/emitter';
// import { emitter } from '../../../utils/emitter';

import _ from 'lodash'
class ModalEditOrder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // orderId: '',
            userId: '',
            status: '',
            custmerName: '',
            phone: '',
            address: '',
            delivery: '',
            note: ''
            // createdAt: '',
            // paymentId: ''
        }
    }

    componentDidMount() {
        let order = this.props.currentOrder
        if (order && !_.isEmpty(order)) {
            this.setState({
                orderId: order.orderId,
                userId: order.userId,
                status: order.status,
                // paymentId: order.paymentId,
                custmerName: order.custmerName,
                phone: order.phone,
                address: order.address,
                delivery: order.delivery,
                total: order.total,
                note: order.note
            })
        }
        console.log('didmount edit modal', this.props.currentOrder)
    }

    toggle = () => {
        this.props.toggleFromParent()
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
        let arrInput = ['status', 'custmerName', 'phone', 'address', 'delivery']
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

    handleSaveOrder = () => {
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
                    <ModalHeader toggle={() => { this.toggle() }}>Edit order</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>UserID</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'userId') }}
                                    value={this.state.userId}
                                    disabled
                                ></input>
                            </div>
                            {/* <div className='input-container'>
                                <label>Status</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'status') }}
                                    value={this.state.status}
                                ></input>
                            </div> */}
                            <div className='input-container'>
                                <label>Status:</label>
                                <select
                                    name="status"
                                    onChange={(event) => { this.handleOnchangeInput(event, 'status') }}
                                    value={this.state.status}
                                >
                                    <option value="Đang tiếp nhận">Đang tiếp nhận</option>
                                    <option value="Đang vận chuyển">Đang vận chuyển</option>
                                    <option value="Đã hoàn thành">Đã hoàn thành</option>
                                    <option value="Đã hủy">Đã hủy</option>
                                </select>
                            </div>
                            <div className='input-container'>
                                <label>Customer name:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'custmerName') }}
                                    value={this.state.custmerName}
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
                            <div className='input-container'>
                                <label>Address:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'address') }}
                                    value={this.state.address}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Delivery</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'delivery') }}
                                    value={this.state.delivery}
                                ></input>
                            </div>
                            <div className='input-container'>
                                <label>Note</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'note') }}
                                    value={this.state.note}
                                ></input>
                            </div>


                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleSaveOrder() }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditOrder);





