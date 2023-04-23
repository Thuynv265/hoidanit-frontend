import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
// import { FormattedMessage } from 'react-intl';
import _ from 'lodash'
class ModalDeleteCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryId: '',
            categoryName: ''
        }
    }

    componentDidMount() {
        let category = this.props.delCategory
        if (category && !_.isEmpty(category)) {
            this.setState({
                categoryId: category.categoryId,
                categoryName: category.categoryName
            })
        }
        console.log('didmount delete modal', this.props.delCategory)
    }
    toggle = () => {
        this.props.toggleFromParent()
    }
    handleDeleteCategory = async () => {
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
                    <ModalHeader toggle={() => { this.toggle() }}>Delete this category?</ModalHeader>

                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleDeleteCategory() }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteCategory);





