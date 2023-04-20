import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { emitter } from '../../utils/emitter';
// import { emitter } from '../../../utils/emitter';

import _ from 'lodash'
import { getAllOrderDetail } from '../../../services/userService';
class ModalDetailOrder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // orderId: '',
            arrDetail: []
        }
    }

    async componentDidMount() {
        // let order = this.props.currentOrder
        // let response = await getAllOrderDetail(this.props.currentOrder)

        // if (order && !_.isEmpty(order)) {
        //     this.setState({
        //         orderId: order,
        //         arrDetail: response.orderDetail
        //     })
        // }
        await this.getOrderDetail()
    }

    toggle = () => {
        this.props.toggleFromParent()
    }
    getOrderDetail = async () => {
        let response = await getAllOrderDetail(this.props.currentOrder)
        if (response && response.errCode === 0) {
            this.setState({
                arrDetail: response.orderDetail
            })
        }

    }

    render() {
        let arrDetail = this.state.arrDetail[0]
        console.log('didmount detail modal', arrDetail)

        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => { this.toggle() }}
                    className={'modal-user-container '}
                    size='lg'
                    centered
                >
                    <ModalHeader toggle={() => { this.toggle() }}>Order Detail</ModalHeader>
                    <ModalBody>
                        <div className='user-table mt-3 mx-1'>
                            <table id="customers">
                                <tbody>
                                    <tr>
                                        <th>Order Detail ID</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>

                                    </tr>
                                    {arrDetail && arrDetail.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{item.orderdetailId}</td>
                                                <td>{item.productId}</td>
                                                <td>{item.price}</td>
                                                <td>{item.quantity}</td>
                                            </tr>

                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </ModalBody>
                    <ModalFooter>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalDetailOrder);





