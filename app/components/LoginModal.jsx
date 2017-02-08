import React, {Component} from 'react';

import {login} from 'lib/aws-cognito-utils';

export default class LoginModal extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

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
        login(username, password);
    }

    render () {
        return (
            <form onSubmit={this.login.bind(this)}>
                <input
                    type='text'
                    value={this.state.username}
                    placeholder='Username'
                    onChange={this.handleUsernameChange.bind(this)}
                />
                <input
                    type='password'
                    value={this.state.password}
                    placeholder='Password'
                    onChange={this.handlePasswordChange.bind(this)}
                />
                <input type='submit' />
            </form>
        );
    }
}