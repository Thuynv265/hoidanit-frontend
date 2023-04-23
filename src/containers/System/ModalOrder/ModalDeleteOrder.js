import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
// import { FormattedMessage } from 'react-intl';
import _ from 'lodash'
class ModalDeleteOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderId: '',
            // categoryName: ''
            // userId: '',
            // status: '',
            // custmerName: '',
            // phone: '',
            // address: '',
            // delivery: '',
        }
    }

    componentDidMount() {
        let order = this.props.delOrder
        if (order && !_.isEmpty(order)) {
            this.setState({
                orderId: order.orderId,
                // categoryName: category.categoryName ,
                // userId: order.userId,
                // status: order.status,
                // // paymentId: order.paymentId,
                // custmerName: order.custmerName,
                // phone: order.phone,
                // address: order.address,
                // delivery: order.delivery
            })
        }
        console.log('didmount delete modal', this.props.delOrder)
    }
    toggle = () => {
        this.props.toggleFromParent()
    }
    handleDeleteOrder = async () => {
        this.props.deleteAction(this.state)
        console.log(this.state)
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
                    <ModalHeader toggle={() => { this.toggle() }}>Delete this order?</ModalHeader>

                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleDeleteOrder() }}>
                            Yes
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteOrder);





