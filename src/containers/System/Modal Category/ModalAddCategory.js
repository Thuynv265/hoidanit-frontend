import React, { Component } from 'react';
// import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { emitter } from '../../../utils/emitter';
class ModalAddCategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categoryName: ''
        }
        this.listenToEmitter()
    }

    listenToEmitter() {
        emitter.on('EVENT_CLEAR_MODAL_DATA', () => {
            //reset state
            this.setState({
                categoryName: ''
            })
        })
    }

    componentDidMount() {
        console.log('mounting modal')
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
        let arrInput = ['categoryName']
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

    handleAddNewCategory = () => {
        let isValid = this.checkValidateInput()
        if (isValid === true) {
            this.props.createNewCategory(this.state)
            console.log('data model:', this.state)

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
                    <ModalHeader toggle={() => { this.toggle() }}>Create new category</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Category name:</label>
                                <input
                                    type='text'
                                    onChange={(event) => { this.handleOnchangeInput(event, 'categoryName') }}
                                    value={this.state.categoryName}
                                ></input>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleAddNewCategory() }}>
                            Add Category
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalAddCategory);





