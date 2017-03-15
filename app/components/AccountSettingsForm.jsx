import React, {Component, PropTypes} from 'react';
import {Form} from 'react-redux-form';

import * as colors from 'lib/colors';

import Button from 'components/CustomButton';
import FormInput from 'components/FormInput';

import {genericRequiredValidator, requiredEmailValidator} from 'lib/form-utils';

const styles = (backgroundColor) => ({
    blockWrp: {
        width: '100%',
        marginBottom: '20px'
    },
    formWrp: {
        backgroundColor: backgroundColor ? null : colors.primaryColorLighter,
        borderRadius: '5px',
        padding: '20px',
        marginBottom: '30px'
    }
});

export default class AccountSettingsForm extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        businessUserPool: PropTypes.object,
        form: PropTypes.object.isRequired
    };

    render () {
        const {backgroundColor} = this.props;
        const style = styles(backgroundColor);
        return (
            <Form
                model={'user.signup'}
                onSubmit={() => console.log('saving user data')}
                validateOn='submit'
                style={style.formWrp}
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
                    style={style.blockWrp}
                />
                <FormInput
                    field={this.props.form.familyName}
                    inputType='text'
                    label='Cognome: *'
                    model='user.signup.familyName'
                    placeholder='Cognome'
                    validator={genericRequiredValidator}
                    style={style.blockWrp}
                />
                <FormInput
                    field={this.props.form.email}
                    inputType='email'
                    label='Email: *'
                    model='user.signup.email'
                    placeholder='youremail@email.it'
                    validator={requiredEmailValidator}
                    style={style.blockWrp}
                />

                <label style={style.blockWrp}>
                    <div style={{float: 'right', textAlign: 'right'}}>
                        <Button
                            backgroundColor={backgroundColor ? backgroundColor : colors.darkGrey}
                            text='SALVA MODIFICHE'
                            type='submit'
                        />
                    </div>
                </label>
            </Form>
        );
    }
}
