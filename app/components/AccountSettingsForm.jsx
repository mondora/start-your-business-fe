import React, {Component, PropTypes} from 'react';
import {Form} from 'react-redux-form';

import * as colors from 'lib/colors';

import FormInput from 'components/FormInput';
import UserAccountSaveButton from 'components/UserAccountSaveButton';

import {genericRequiredValidator, requiredEmailValidator} from 'lib/form-utils';

const styles = {
    blockWrp: {
        width: '100%',
        marginBottom: 20
    },
    formWrp: {
        backgroundColor: colors.primaryColorLighter,
        borderRadius: '5px',
        padding: 20
    },
    infoStyle: {
        fontWeight: 700,
        color: colors.primaryColor
    }
};

export default class AccountSettingsForm extends Component {
    static propTypes = {
        fetchUserInfo: PropTypes.func.isRequired,
        form: PropTypes.object.isRequired,
        marginBottom: PropTypes.number,
        padding: PropTypes.number,
        titleStyle: PropTypes.object
    };

    constructor (props) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    componentDidMount () {
        this.props.fetchUserInfo();
    }
    
    render () {
        const {padding, marginBottom} = this.props;
        return (
            <Form
                model={'user.updateInfo'}
                onSubmit={() => console.log('TODO save user data')}
                validateOn='submit'
                style={{...styles.formWrp, ...{marginBottom: marginBottom, padding: padding}}}
            >
                <h3 style={this.props.titleStyle}>{'IMPOSTAZIONI ACCOUNT:'}</h3>
                {/*<p style={styles.infoStyle}>{'Sottoscritto il:'}</p>*/}
                <FormInput
                    field={this.props.form.givenName}
                    inputType='text'
                    label='Nome:'
                    model='user.updateInfo.givenName'
                    placeholder='Nome'
                    validator={genericRequiredValidator}
                    style={styles.blockWrp}
                />
                <FormInput
                    field={this.props.form.familyName}
                    inputType='text'
                    label='Cognome: *'
                    model='user.updateInfo.familyName'
                    placeholder='Cognome'
                    validator={genericRequiredValidator}
                    style={styles.blockWrp}
                />
                <FormInput
                    field={this.props.form.email}
                    inputType='email'
                    label='Email: *'
                    model='user.updateInfo.email'
                    placeholder='youremail@email.it'
                    validator={requiredEmailValidator}
                    style={styles.blockWrp}
                />

                <label style={styles.blockWrp}>
                    <UserAccountSaveButton
                        isActive={() => this.setState({isActive: true})}
                    />
                </label>
            </Form>
        );
    }
}
