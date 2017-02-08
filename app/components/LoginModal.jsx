import React, {Component, PropTypes} from 'react';
import {FormControl, Modal} from 'react-bootstrap';

import Button from 'components/CustomButton';

import {login} from 'lib/aws-cognito-utils';

export default class LoginModal extends Component {
    static propTypes = {
        onClose: PropTypes.func,
        show: PropTypes.bool
    };

    constructor (props) {
        super(props);
        this.state = this.defaultState;
    }

    defaultState = {
        errorMessage: null,
        username: '',
        password: ''
    };

    handleUsernameChange (e) {
        this.setState({username: e.target.value});
    }

    handlePasswordChange (e) {
        this.setState({password: e.target.value});
    }

    login (e) {
        e.preventDefault();
        const username = this.state.username.trim();
        const password = this.state.password.trim();
        login(username, password, this.checkLogin.bind(this));
    }

    checkLogin (result) {
        if (result.success) {
            this.closeModal();
        } else {
            this.setState({errorMessage: 'Username o password non validi'});
        }
    }

    closeModal () {
        this.setState(this.defaultState);
        this.props.onClose();
    }

    renderLoginForm () {
        return (
            <form onSubmit={this.login.bind(this)}>
                <FormControl
                    type='text'
                    value={this.state.username}
                    placeholder='Username'
                    onChange={this.handleUsernameChange.bind(this)}
                />
                <FormControl
                    type='password'
                    value={this.state.password}
                    placeholder='Password'
                    onChange={this.handlePasswordChange.bind(this)}
                />
                {this.state.errorMessage}
                <Button
                    backgroundColor={'#708090'}
                    text={'LOGIN >'}
                    type='submit'
                />
            </form>
        );
    }

    render () {
        return (
            <Modal show={this.props.show} onHide={this.closeModal.bind(this)}>
                <Modal.Header closeButton={true}>
                    <Modal.Title>
                        {'LOGIN'}
                        <p>
                            {'accedi al tuo account'}
                        </p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.renderLoginForm()}
                </Modal.Body>
                <Modal.Footer>
                    {'INIZIA ORA!'}
                </Modal.Footer>
            </Modal>
        );
    }
}