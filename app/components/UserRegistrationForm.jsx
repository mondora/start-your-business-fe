import React, {Component} from 'react';

import {registerNewUser} from 'lib/aws-cognito-utils';

export default class UserRegistrationForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            familyName: '',
            givenName: '',
            password: ''
        };
    }

    handleEmailChange (e) {
        this.setState({email: e.target.value});
    }

    handleFamilyNameChange (e) {
        this.setState({familyName: e.target.value});
    }
    handleGivenNameChange (e) {
        this.setState({givenName: e.target.value});
    }
    handlePasswordChange (e) {
        this.setState({password: e.target.value});
    }

    registerNewUser (e) {
        e.preventDefault();
        const email = this.state.email.trim();
        const password = this.state.password.trim();
        const attributes = [{
            name: 'email',
            value: email
        }, {
            name: 'family_name',
            value: this.state.familyName.trim()
        }, {
            name: 'given_name',
            value: this.state.givenName.trim()
        }];
        registerNewUser(email, password, attributes);
    }

    render () {
        return (
            <form onSubmit={this.registerNewUser.bind(this)}>
                <input
                    type='text'
                    value={this.state.givenName}
                    placeholder='Nome'
                    onChange={this.handleGivenNameChange.bind(this)}
                />
                <input
                    type='text'
                    value={this.state.familyName}
                    placeholder='Cognome'
                    onChange={this.handleFamilyNameChange.bind(this)}
                />
                <input
                    type='text'
                    value={this.state.email}
                    placeholder='Email'
                    onChange={this.handleEmailChange.bind(this)}
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