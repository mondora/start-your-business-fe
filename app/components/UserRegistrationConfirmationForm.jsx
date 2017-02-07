import React, {Component, PropTypes} from 'react';

import {confirmRegistration} from 'lib/aws-cognito-utils';

export default class UserRegistrationConfirmationForm extends Component {
    static propTypes = {
        username: PropTypes.string.isRequired
    };
    
    constructor (props) {
        super(props);
        this.state = {
            confirmationCode: ''
        };
    }

    handleConfirmationCodeChange (e) {
        this.setState({confirmationCode: e.target.value});
    }

    confirmRegistration (e) {
        e.preventDefault();
        const confirmationCode = this.state.confirmationCode.trim();
        confirmRegistration(this.props.username, confirmationCode);
    }

    render () {
        return (
            <form onSubmit={this.confirmRegistration.bind(this)}>
                <input
                    type='text'
                    value={this.state.confirmationCode}
                    placeholder='Codice di conferma'
                    onChange={this.handleConfirmationCodeChange.bind(this)}
                />
                <input type='submit' />
            </form>
        );
    }
}