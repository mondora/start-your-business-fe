import React, {Component, PropTypes} from 'react';
import {FormControl} from 'react-bootstrap';

import Button from 'components/CustomButton';

export default class SignUpForm extends Component {
    static propTypes = {
        errorMessage: PropTypes.string,
        signUpUser: PropTypes.func.isRequired
    };
    
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
        this.props.signUpUser(email, password, attributes);
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
                {this.props.errorMessage}
                <Button
                    backgroundColor={'#708090'}
                    text='REGISTRATI >'
                    type='submit'
                />
            </form>
        );
    }
}