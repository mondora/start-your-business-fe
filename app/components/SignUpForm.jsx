import React, {Component} from 'react';
import {FormControl} from 'react-bootstrap';

import Button from 'components/CustomButton';

import {signUpUser} from 'lib/aws-cognito-utils';

export default class SignUpForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            errorMessage: null,
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

    signUpUser (e) {
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
        signUpUser(email, password, attributes, this.checkSignUp.bind(this));
    }

    checkSignUp (result) {
        if (result.success) {
            //TODO go to next step
        } else {
            this.setState({errorMessage: result.error});
        }
    }

    render () {
        return (
            <form onSubmit={this.signUpUser.bind(this)}>
                <FormControl
                    type='text'
                    value={this.state.givenName}
                    placeholder='Nome'
                    onChange={this.handleGivenNameChange.bind(this)}
                />
                <FormControl
                    type='text'
                    value={this.state.familyName}
                    placeholder='Cognome'
                    onChange={this.handleFamilyNameChange.bind(this)}
                />
                <FormControl
                    type='text'
                    value={this.state.email}
                    placeholder='Email'
                    onChange={this.handleEmailChange.bind(this)}
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
                    text='REGISTRATI >'
                    type='submit'
                />
            </form>
        );
    }
}