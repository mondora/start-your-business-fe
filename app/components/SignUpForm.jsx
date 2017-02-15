import React, {Component, PropTypes} from 'react';
import {Form} from 'react-redux-form';

import * as colors from 'lib/colors';

import Button from 'components/CustomButton';
import FormInput from 'components/FormInput';

import {genericRequiredValidator, requiredEmailValidator, requiredPasswordValidator} from 'lib/form-utils';

const styles = {
    formWrp: {
        backgroundColor: colors.primaryColorLighter,
        borderRadius: '5px',
        padding: '20px',
        marginBottom: '30px'
    },
    blockWrp: {
        width: '100%',
        marginBottom: '20px'
    },
    label: {
        color: colors.darkGrey,
        fontSize: '1em'
    },
    text: {
        color: colors.darkGrey,
        fontSize: '1em',
        fontWeight: '300'
    },
    errorsWrp: {
        display: 'block',
        borderRadius: '4px',
        margin: '2px 0',
        padding: '5px 10px',
        border: `1px solid ${colors.errorText}`,
        backgroundColor: colors.backgroundError,
        color: colors.errorText
    }
};

const passwordsMatch = ({password, confirmPassword}) => {
    return password !== confirmPassword;
};

export default class SignUpForm extends Component {
    static propTypes = {
        form: PropTypes.object.isRequired,
        signUpUser: PropTypes.func.isRequired,
        signupState: PropTypes.object.isRequired
    };

    constructor (props) {
        super(props);
        this.state = {
            accept: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange (event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

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
                <label style={styles.blockWrp}>
                    <span style={styles.label}>{'Nome: *'}</span>
                    <FormInput
                        field={this.props.form.givenName}
                        inputType='text'
                        model='user.signup.givenName'
                        placeholder='Nome'
                        validator={genericRequiredValidator}
                    />
                </label>
                <label style={styles.blockWrp}>
                    <span style={styles.label}>{'Cognome: *'}</span>
                    <FormInput
                        field={this.props.form.familyName}
                        inputType='text'
                        model='user.signup.familyName'
                        placeholder='Cognome'
                        validator={genericRequiredValidator}
                    />
                </label>
                <label style={styles.blockWrp}>
                    <span style={styles.label}>{'Email: *'}</span>
                    <FormInput
                        field={this.props.form.email}
                        inputType='email'
                        model='user.signup.email'
                        placeholder='Email'
                        validator={requiredEmailValidator}
                    />
                </label>
                <label style={styles.blockWrp}>
                    <span style={styles.label}>{'Password: *'}</span>
                    <FormInput
                        field={this.props.form.password}
                        inputType='password'
                        model='user.signup.password'
                        placeholder='Password'
                        validator={requiredPasswordValidator}
                    />
                </label>
                <label style={styles.blockWrp}>
                    <span style={styles.label}>{'Ripeti password: *'}</span>
                    <FormInput
                        field={confirmPassword}
                        inputType='password'
                        model='user.signup.confirmPassword'
                        placeholder='Conferma password'
                    />
                    {
                        confirmPassword.touched && !$form.valid && $form.submitFailed && !$form.errors.passwordsMatch &&
                        <strong style={styles.errorsWrp}>
                            {'La password di conferma non coincide'}
                        </strong>
                    }
                    {this.props.signupState.errorMessage}
                </label>

                <label>
                    <input
                        name='accept'
                        type='checkbox'
                        checked={this.state.accept}
                        onChange={this.handleInputChange}
                    />
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
                </label>
                <label>
                    <span style={styles.text}>{'( * Campi obbligatori)'}</span>
                </label>

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
