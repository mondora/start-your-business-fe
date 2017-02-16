import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';
import {Form} from 'react-redux-form';
import {Link} from 'react-router';

import Button from 'components/CustomButton';
import FormErrorMessage from 'components/FormErrorMessage';
import FormInput from 'components/FormInput';
import HorizontalLine from 'components/HorizontalLine';

import {darkGrey, primaryColor} from 'lib/colors';
import {genericRequiredValidator, requiredEmailValidator} from 'lib/form-utils';

// const styles = {
//     loginModalContainer: {
//         textAlign: 'center'
//     }
// };

export default class LoginModal extends Component {
    static propTypes = {
        form: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        loginState: PropTypes.object.isRequired,
        onClose: PropTypes.func,
        show: PropTypes.bool
    };

    login ({email, password}) {
        this.props.login(email, password);
    }

    closeModal () {
        this.props.onClose();
    }

    renderLoginForm () {
        return (
            <Form
                model={'user.login'}
                onSubmit={this.login.bind(this)}
            >
                <div style={{maxWidth: 400, margin: '0 auto'}}>
                    <FormInput
                        field={this.props.form.email}
                        inputType='email'
                        model='user.login.email'
                        placeholder='Email'
                        validator={requiredEmailValidator}
                    />
                    <br />
                    <FormInput
                        field={this.props.form.password}
                        inputType='password'
                        model='user.login.password'
                        placeholder='Password'
                        validator={genericRequiredValidator}
                    />

                    <FormErrorMessage
                        message={this.props.loginState.errorMessage}
                    />
                </div>

                <div style={{textAlign: 'center', width: '100%', marginTop: 20}}>
                    <Button
                        backgroundColor={darkGrey}
                        text={'LOGIN >'}
                        type='submit'
                    />
                </div>
                <b><p style={{textAlign: 'center', marginTop: 20, color: primaryColor, fontSize: 20}}>
                    {'INIZIA ORA!'}
                </p></b>
            </Form>
        );
    }

    render () {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.closeModal.bind(this)}>
                    <Modal.Header closeButton={true} style={{border: 0}}>
                        <Modal.Title style={{textAlign: 'center'}}>
                            <b style={{fontSize: 25}}>{'LOGIN'}</b>
                            <br />
                            <b>{'accedi al tuo account'}</b>
                            <HorizontalLine color={primaryColor} width={60} />
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.renderLoginForm()}
                    </Modal.Body>
                    <Modal.Footer style={{textAlign: 'center'}}>
                        <p>
                            {'Non hai un account? '}
                            <Link to='signup' onClick={this.closeModal.bind(this)}>{'Registrati ora'}</Link>
                        </p>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}