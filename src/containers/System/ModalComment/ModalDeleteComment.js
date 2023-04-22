import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalFooter } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import _ from 'lodash'
class ModalDeleteComment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            commentId: '',
        }
    }

    componentDidMount() {
        let comment = this.props.delComment
        if (comment && !_.isEmpty(comment)) {
            this.setState({
                commentId: comment.commentId,
            })
        }
        console.log('didmount delete modal', this.props.delComment)
    }
    toggle = () => {
        this.props.toggleFromParent()
    }
    handleDeleteComment = async () => {
        this.props.deleteAction(this.state)
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
                    <ModalHeader toggle={() => { this.toggle() }}>Delete this comment?</ModalHeader>

                    <ModalFooter>
                        <Button color="primary" className='px-3' onClick={() => { this.handleDeleteComment() }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModalDeleteComment);





