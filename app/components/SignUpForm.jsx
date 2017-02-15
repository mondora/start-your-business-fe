import React, {Component, PropTypes} from 'react';
import {Form} from 'react-redux-form';

import Button from 'components/CustomButton';
import FormInput from 'components/FormInput';

import {genericRequiredValidator, requiredEmailValidator, requiredPasswordValidator} from 'lib/form-utils';

const passwordsMatch = ({password, confirmPassword}) => {
    return password !== confirmPassword;
};

export default class SignUpForm extends Component {
    static propTypes = {
        signUpUser: PropTypes.func.isRequired,
        signupForm: PropTypes.object.isRequired,
        signupState: PropTypes.object.isRequired
    };
    
    signUpUser ({email, password, familyName, givenName}) {
        const attributes = [{
            name: 'email',
            value: email
        }, {
            name: 'family_name',
            value: familyName
        }, {
            name: 'given_name',
            value: givenName
        }];
        this.props.signUpUser(email, password, attributes);
    }

    render () {
        const {$form, confirmPassword} = this.props.signupForm;
        return (
            <Form
                model={'user.signup'}
                onSubmit={this.signUpUser.bind(this)}
                validateOn='submit'
                validators={{
                    '': {passwordsMatch}
                }}
            >
                <FormInput
                    field={this.props.signupForm.givenName}
                    inputType='text'
                    model='user.signup.givenName'
                    placeholder='Nome'
                    validator={genericRequiredValidator}
                />
                
                <FormInput
                    field={this.props.signupForm.familyName}
                    inputType='text'
                    model='user.signup.familyName'
                    placeholder='Cognome'
                    validator={genericRequiredValidator}
                />
                
                <FormInput
                    field={this.props.signupForm.email}
                    inputType='email'
                    model='user.signup.email'
                    placeholder='Email'
                    validator={requiredEmailValidator}
                />

                <FormInput
                    field={this.props.signupForm.password}
                    inputType='password'
                    model='user.signup.password'
                    placeholder='Password'
                    validator={requiredPasswordValidator}
                />

                <FormInput
                    field={confirmPassword}
                    inputType='password'
                    model='user.signup.confirmPassword'
                    placeholder='Conferma password'
                />

                {
                    confirmPassword.touched && !$form.valid && $form.submitFailed && !$form.errors.passwordsMatch &&
                    <strong>
                        {'La password di conferma non coincide'}
                    </strong>
                }
                {this.props.signupState.errorMessage}

                <Button
                    backgroundColor={'#708090'}
                    text='REGISTRATI >'
                    type='submit'
                />
            </Form>
        );
    }
}