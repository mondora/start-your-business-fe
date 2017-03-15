import React, {Component, PropTypes} from 'react';
import {Form} from 'react-redux-form';

import * as colors from 'lib/colors';

import FormInput from 'components/FormInput';
import UserAccountSaveButton from 'components/UserAccountSaveButton';

import {genericRequiredValidator, requiredEmailValidator} from 'lib/form-utils';

const styles = {
    blockWrp: {
        width: '100%',
        marginBottom: '20px'
    },
    formWrp: {
        backgroundColor: colors.primaryColorLighter,
        borderRadius: '5px',
        padding: '20px',
        marginBottom: '30px'
    }
};

export default class AccountSettingsForm extends Component {
    static propTypes = {
        form: PropTypes.object.isRequired
    };

    render () {
        return (
            <Form
                model={'user.signup'}
                onSubmit={() => console.log('TODO save user data')}
                validateOn='submit'
                style={styles.formWrp}
            >
                {'IMPOSTAZIONI ACCOUNT:'}
                {'Sottoscritto il:'}
                <FormInput
                    field={this.props.form.givenName}
                    inputType='text'
                    label='Nome:'
                    model='user.signup.givenName'
                    placeholder='Nome'
                    validator={genericRequiredValidator}
                    style={styles.blockWrp}
                />
                <FormInput
                    field={this.props.form.familyName}
                    inputType='text'
                    label='Cognome: *'
                    model='user.signup.familyName'
                    placeholder='Cognome'
                    validator={genericRequiredValidator}
                    style={styles.blockWrp}
                />
                <FormInput
                    field={this.props.form.email}
                    inputType='email'
                    label='Email: *'
                    model='user.signup.email'
                    placeholder='youremail@email.it'
                    validator={requiredEmailValidator}
                    style={styles.blockWrp}
                />

                <label style={styles.blockWrp}>
                    <UserAccountSaveButton />
                </label>
            </Form>
        );
    }
}
