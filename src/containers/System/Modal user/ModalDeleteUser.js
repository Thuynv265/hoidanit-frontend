import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
// import { FormattedMessage } from 'react-intl';
import _ from 'lodash'
class ModalDeleteUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            userName: '',
            passWord: '',
            firstName: '',
            lastName: '',
            roleId: '0',
            phone: '',
            address: ''
        }
    }

    componentDidMount() {
        let user = this.props.deluser
        if (user && !_.isEmpty(user)) {
            this.setState({
                id: user.id,
                userName: user.userName,
                passWord: user.passWord,
                firstName: user.firstName,
                lastName: user.lastName,
                roleId: user.roleId,
                phone: user.phone,
                address: user.address
            })
        }
        console.log('didmount delete modal', this.props.deluser)
    }


    toggle = () => {
        this.props.toggleFromParent()
    }
    handleDeleteUser = async () => {

        this.props.deleteuser(this.state)
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
                    <ModalHeader toggle={() => { this.toggle() }}>Delete this user?</ModalHeader>

                    <ModalFooter>
                        {/* <Button color="primary" className='px-3' onClick={() => { this.props.deleteUser(this.state) }}> */}
                        <Button color="primary" className='px-3' onClick={() => { this.handleDeleteUser() }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteUser);





