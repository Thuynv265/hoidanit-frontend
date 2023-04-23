import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
// import { FormattedMessage } from 'react-intl';
import _ from 'lodash'
class ModalDeleteProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productId: '',
            productName: '',
            color: '',
            storage: '',
            price: '',
            discount: '',
            quantity: '',
            img: '',
            content: '',
            unit: '',
        }
    }

    componentDidMount() {
        let product = this.props.delProduct
        if (product && !_.isEmpty(product)) {
            this.setState({
                productId: product.productId,
                productName: product.productName,
                color: product.color,
                storage: product.storage,
                price: product.price,
                discount: product.discount,
                quantity: product.quantity,
                img: product.img,
                content: product.content,
                unit: product.unit
            })
        }
        console.log('didmount delete modal', this.props.delProduct)
    }
    toggle = () => {
        this.props.toggleFromParent()
    }
    handleDeleteProduct = async () => {
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
                    <ModalHeader toggle={() => { this.toggle() }}>Delete this product?</ModalHeader>

                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleDeleteProduct() }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteProduct);





