import {CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';
import {Config, CognitoIdentityCredentials} from 'aws-sdk';
import React, {Component} from 'react';

import {AWS_COGNITO, AWS_REGION} from 'lib/config';

Config.region = AWS_REGION;
Config.credentials = new CognitoIdentityCredentials({
    IdentityPoolId: AWS_COGNITO.identityPoolId
});

const userPool = new CognitoUserPool({
    ClientId: AWS_COGNITO.clientId,
    UserPoolId: AWS_COGNITO.userPoolId
});

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
        const attributeList = [
            new CognitoUserAttribute({
                Name: 'email',
                Value: email
            }),
            new CognitoUserAttribute({
                Name: 'family_name',
                Value: this.state.familyName.trim()
            }),
            new CognitoUserAttribute({
                Name: 'given_name',
                Value: this.state.givenName.trim()
            })
        ];
        userPool.signUp(email, password, attributeList, null, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(`user name is ${result.user.getUsername()}!`);
            console.log(`call result: ${result}`);
        });
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