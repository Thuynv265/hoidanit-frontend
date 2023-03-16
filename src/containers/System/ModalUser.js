import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUser extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
    }

    toggle = () => {
        this.props.toggleFromParent()
    }
    render() {
        console.log("cjeck child props: ", this.props)
        console.log("cjeck child open modal: ", this.props.isOpen)
        return (
            <div>
                <Modal
                    isOpen={this.props.isOpen}
                    toggle={() => { this.toggle() }}
                    className={'modal-user-container '}
                    size='lg'
                    centered
                >
                    <ModalHeader toggle={() => { this.toggle() }}>Create new user</ModalHeader>
                    <ModalBody>
                        <div className='modal-user-body'>
                            <div className='input-container'>
                                <label>Email:</label>
                                <input type='email'></input>
                            </div>
                            <div className='input-container'>
                                <label>Password:</label>
                                <input type='password'></input>
                            </div>
                            <div className='input-container'>
                                <label>Firstname:</label>
                                <input type='text'></input>
                            </div>
                            <div className='input-container'>
                                <label>Lastname:</label>
                                <input type='text'></input>
                            </div>
                            <div className='input-container max-width-input'>
                                <label>Address:</label>
                                <input type='text'></input>
                            </div>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.toggle() }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);





