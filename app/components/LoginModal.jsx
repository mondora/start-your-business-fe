import React, {Component, PropTypes} from 'react';
import {FormControl, Modal} from 'react-bootstrap';
import {Link} from 'react-router';

import Button from 'components/CustomButton';

export default class LoginModal extends Component {
    static propTypes = {
        errorMessage: PropTypes.string,
        login: PropTypes.func.isRequired,
        onClose: PropTypes.func,
        show: PropTypes.bool
    };

    constructor (props) {
        super(props);
        this.state = this.defaultState;
    }

    defaultState = {
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
        this.props.login(username, password);
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
                {this.props.errorMessage}
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
                    <p>
                        {'Non hai un account?'}
                        <Link to='signup' onClick={this.closeModal.bind(this)}>{'Registrati ora'}</Link>
                    </p>
                </Modal.Footer>
            </Modal>
        );
    }
}