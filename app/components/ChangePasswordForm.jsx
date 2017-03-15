import React, {Component, PropTypes} from 'react';
import {Form} from 'react-redux-form';

import * as colors from 'lib/colors';

import FormInput from 'components/FormInput';
import UserAccountSaveButton from 'components/UserAccountSaveButton';

import {requiredPasswordValidator} from 'lib/form-utils';

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

export default class ChangePasswordForm extends Component {
    static propTypes = {
        form: PropTypes.object.isRequired
    };

    render () {
        const {$form, confirmPassword} = this.props.form;
        return (
            <Form
                model={'user.signup'}
                onSubmit={() => console.log('TODO save new password')}
                validateOn='submit'
                validators={{'': {passwordsMatch}}}
                style={styles.formWrp}
            >
                {'AGGIORNA PASSWORD:'}
                <FormInput
                    field={this.props.form.password}
                    inputType='password'
                    label='Vecchia password:'
                    model='user.signup.password'
                    placeholder='Fs4••••••••••••'
                    validator={requiredPasswordValidator}
                    style={styles.blockWrp}
                />
                <FormInput
                    field={this.props.form.password}
                    inputType='password'
                    label='Nuova password: *'
                    model='user.signup.password'
                    placeholder='R12••••••••••••'
                    validator={requiredPasswordValidator}
                    style={styles.blockWrp}
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
                    placeholder='R12••••••••••••'
                    style={styles.blockWrp}
                />

                <label style={styles.blockWrp}>
                    <UserAccountSaveButton />
                </label>
            </Form>
        );
    }
}
