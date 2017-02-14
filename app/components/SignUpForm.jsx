import React, {Component, PropTypes} from 'react';
import {Field, Form} from 'react-redux-form';
// import validator from 'validator';

import Button from 'components/CustomButton';

// const required = validator.isNull;
// const isEmail = validator.isEmail;
//
// const passwordsMatch = ({password, confirmPassword}) => {
//     return password === confirmPassword;
// };
//
// const validPassword = password => {
//     //TODO
//     /***
//         Minimum length 8
//         Require numbers
//         Require special character
//         Require uppercase letters
//         Require lowercase letters
//      ***/
//     return password;
// };

export default class SignUpForm extends Component {
    static propTypes = {
        signUpUser: PropTypes.func.isRequired,
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
        //TODO put validators inside Form and verify why is not working correctly
        // validators={{
        //     '': {passwordsMatch},
        //     email: {required, isEmail},
        //     familyName: {required},
        //     givenName: {required},
        //     password: {required, validPassword},
        //     confirmPassword: {required}
        // }}
        return (
            <Form
                model={'user.signup'}
                onSubmit={this.signUpUser.bind(this)}
            >
                <Field model='user.signup.givenName'>
                    <input type='text' placeholder='Nome' />
                </Field>

                <Field model='user.signup.familyName'>
                    <input type='text' placeholder='Cognome' />
                </Field>

                <Field model='user.signup.email'>
                    <input type='email' placeholder='Email' />
                </Field>

                <Field model='user.signup.password'>
                    <input type='password' placeholder='Password' />
                </Field>

                <Field model='user.signup.confirmPassword'>
                    <input type='password' placeholder='Conferma password' />
                </Field>

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