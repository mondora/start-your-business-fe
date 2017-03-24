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
        borderRadius: '5px'
    },
    text: {
        color: colors.darkGrey,
        fontSize: '1em',
        fontWeight: '300'
    }
};

const passwordsMatch = ({newPassword, confirmNewPassword}) => {
    return newPassword === confirmNewPassword;
};

export default class ChangePasswordForm extends Component {
    static propTypes = {
        form: PropTypes.object.isRequired,
        marginBottom: PropTypes.number,
        padding: PropTypes.number,
        titleStyle: PropTypes.object,
        updatePassword: PropTypes.func.isRequired
    };

    render () {
        const {form: {$form, confirmNewPassword, newPassword, oldPassword}, padding, marginBottom, updatePassword} = this.props;
        return (
            <Form
                model={'user.updatePassword'}
                onSubmit={({newPassword, oldPassword}) => updatePassword(oldPassword, newPassword)}
                validateOn='submit'
                validators={{'': {passwordsMatch}}}
                style={{...styles.formWrp, ...{marginBottom: marginBottom, padding: padding}}}
            >
                <h3 style={this.props.titleStyle}>{'AGGIORNA PASSWORD:'}</h3>
                <FormInput
                    field={oldPassword}
                    inputType='password'
                    label='Password attuale:'
                    model='user.updatePassword.oldPassword'
                    placeholder='Fs4••••••••••••'
                    validator={requiredPasswordValidator}
                    style={styles.blockWrp}
                />
                <FormInput
                    field={newPassword}
                    inputType='password'
                    label='Nuova password: *'
                    model='user.updatePassword.newPassword'
                    placeholder='R12••••••••••••'
                    validator={requiredPasswordValidator}
                    style={styles.blockWrp}
                />
                <FormInput
                    error={() => confirmNewPassword.touched && !$form.valid && $form.submitFailed && $form.errors.passwordsMatch &&
                        <strong style={styles.errorsWrp}>
                            {'La password di conferma non coincide'}
                        </strong>
                    }
                    field={confirmNewPassword}
                    inputType='password'
                    label='Ripeti password: *'
                    model='user.updatePassword.confirmNewPassword'
                    placeholder='R12••••••••••••'
                    style={styles.blockWrp}
                />

                <label style={styles.blockWrp}>
                    <UserAccountSaveButton isActive={oldPassword.valid && newPassword.valid} />
                </label>
            </Form>
        );
    }
}
