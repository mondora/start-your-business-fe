import React, {Component, PropTypes} from 'react';
import {Form} from 'react-redux-form';

import * as colors from 'lib/colors';

import Button from 'components/CustomButton';
import FormInput from 'components/FormInput';
import FormInputCheckbox from 'components/FormInputCheckbox';

import {genericRequiredValidator, isCheckedValidator, requiredEmailValidator, requiredPasswordValidator} from 'lib/form-utils';

const styles = {
    blockWrp: {
        width: '100%',
        marginBottom: '20px'
    },
    errorsWrp: {
        display: 'block',
        borderRadius: '4px',
        margin: '2px 0',
        padding: '5px 10px',
        border: `1px solid ${colors.errorText}`,
        backgroundColor: colors.backgroundError,
        color: colors.errorText
    },
    formWrp: {
        backgroundColor: colors.primaryColorLighter,
        borderRadius: '5px',
        padding: '20px',
        marginBottom: '30px'
    },
    text: {
        color: colors.darkGrey,
        fontSize: '1em',
        fontWeight: '300'
    }
};

const passwordsMatch = ({password, confirmPassword}) => {
    return password === confirmPassword;
};

export default class SignUpForm extends Component {
    static propTypes = {
        form: PropTypes.object.isRequired,
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

    renderSignUpError () {
        return this.props.signupState.errorMessage ? (
            <strong style={{...styles.errorsWrp, marginBottom: '20px'}}>
                {this.props.signupState.errorMessage}
            </strong>
        ) : null;
    }

    render () {
        const {$form, confirmPassword} = this.props.form;
        return (
            <Form
                model={'user.signup'}
                onSubmit={this.signUpUser.bind(this)}
                validateOn='submit'
                validators={{
                    '': {passwordsMatch}
                }}
                style={styles.formWrp}
            >
                <FormInput
                    field={this.props.form.givenName}
                    inputType='text'
                    label='Nome: *'
                    model='user.signup.givenName'
                    placeholder='Nome'
                    validator={genericRequiredValidator}
                />
                <FormInput
                    field={this.props.form.familyName}
                    inputType='text'
                    label='Cognome: *'
                    model='user.signup.familyName'
                    placeholder='Cognome'
                    validator={genericRequiredValidator}
                />
                <FormInput
                    field={this.props.form.email}
                    inputType='email'
                    label='Email: *'
                    model='user.signup.email'
                    placeholder='youremail@email.it'
                    validator={requiredEmailValidator}
                />
                <FormInput
                    field={this.props.form.password}
                    inputType='password'
                    label='Password: *'
                    model='user.signup.password'
                    placeholder='••••••••••••'
                    validator={requiredPasswordValidator}
                />
                <FormInput
                    error={() => confirmPassword.touched && !$form.valid && $form.submitFailed && $form.errors.passwordsMatch &&
                        <strong style={styles.errorsWrp}>
                            {'La password di conferma non coincide'}
                        </strong>
                    }
                    field={confirmPassword}
                    inputType='password'
                    label='Ripeti password: *'
                    model='user.signup.confirmPassword'
                    placeholder='••••••••••••'
                />
                <FormInputCheckbox
                    field={this.props.form.privacyCheck}
                    model='user.signup.privacyCheck'
                    text={
                        <span style={{...styles.text, ...{cursor: 'pointer'}}}>
                            {`  Acconsento e dichiaro di aver letto i termini
                            e condizioni del servizio e l’informativa sulla `}
                            <a
                                href='/privacy'
                                style={{color: colors.darkGrey, textDecoration: 'underline'}}
                                target='_blank'
                            >
                                {'Privacy'}
                            </a> {' *'}
                        </span>
                    }
                    validator={isCheckedValidator}
                />

                <label>
                    <span style={styles.text}>{'( * Campi obbligatori)'}</span>
                </label>

                {this.renderSignUpError()}

                <label style={styles.blockWrp}>
                    <div style={{float: 'right', textAlign: 'right'}}>
                        <Button
                            backgroundColor={colors.darkGrey}
                            text='REGISTRATI >'
                            type='submit'
                        />
                    </div>
                </label>
            </Form>
        );
    }
}
