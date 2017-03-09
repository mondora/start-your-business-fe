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

export default class LoginModal extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        businessUserPool: PropTypes.object,
        form: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        loginState: PropTypes.object.isRequired,
        onClose: PropTypes.func,
        show: PropTypes.bool
    };

    login ({email, password}) {
        this.props.login(email, password, this.props.businessUserPool);
    }

    closeModal () {
        this.props.onClose();
    }

    renderLoginForm (backgroundColor, form, loginState) {
        return (
            <Form
                model={'user.login'}
                onSubmit={this.login.bind(this)}
            >
                <div style={{maxWidth: 400, margin: '10px auto 20px auto'}}>
                    <FormInput
                        field={form.email}
                        inputType='email'
                        model='user.login.email'
                        placeholder='Email'
                        validator={requiredEmailValidator}
                        style={{width: '100%', marginBottom: '20px'}}
                    />
                    <br />
                    <FormInput
                        field={form.password}
                        inputType='password'
                        model='user.login.password'
                        placeholder='Password'
                        validator={genericRequiredValidator}
                        style={{width: '100%', marginBottom: '20px'}}
                    />

                    <FormErrorMessage
                        message={loginState.errorMessage}
                    />
                </div>

                <div style={{textAlign: 'center', width: '100%'}}>
                    <Button
                        backgroundColor={backgroundColor ? backgroundColor : darkGrey}
                        text={'LOGIN >'}
                        type='submit'
                    />
                    <a
                        href='#'
                        style={{
                            display: 'block',
                            margin: '20px 0',
                            color: darkGrey,
                            fontSize: 14,
                            textDecoration: 'underline'
                        }}
                    >
                        {'Password dimenticata?'}
                    </a>
                </div>
            </Form>
        );
    }

    render () {
        const {backgroundColor, form, loginState, show} = this.props;
        return (
            <div>
                <Modal show={show} onHide={this.closeModal.bind(this)}>
                    <Modal.Header closeButton={true} style={{border: 0}}>
                        <Modal.Title style={{textAlign: 'center'}}>
                            <b style={{fontSize: 25}}>{'LOGIN'}</b>
                            <br />
                            <b>{'accedi al tuo account'}</b>
                            <HorizontalLine color={backgroundColor ? backgroundColor : primaryColor} width={60} />
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.renderLoginForm(backgroundColor, form, loginState)}
                    </Modal.Body>
                    <Modal.Footer style={{textAlign: 'center'}}>
                        <p style={{fontWeight: 'bold'}}>
                            {'Non hai un account? '}
                            <Link
                                to='signup'
                                onClick={this.closeModal.bind(this)}
                                style={{color: darkGrey}}
                            >
                                {'Registrati ora'}
                            </Link>
                        </p>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
