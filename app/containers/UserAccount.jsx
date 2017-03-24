import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';
import {Form} from 'react-redux-form';
import {bindActionCreators} from 'redux';

import {updatePassword} from 'actions/user';

import {getUserSiteState} from 'lib/auth-utils';
import * as colors from 'lib/colors';

import AccountSettingsForm from 'components/AccountSettingsForm';
import ChangePasswordForm from 'components/ChangePasswordForm';
import CompanyInfoForm from 'components/CompanyInfoForm';
import PageTeaser from 'components/PageTeaser';
import PersonalInfoForm from 'components/PersonalInfoForm';
import Button from 'components/CustomButton';
import UserAccountSaveButton from 'components/UserAccountSaveButton';

const styles = {
    box: {
        backgroundColor: colors.primaryColorLighter,
        borderRadius: '5px',
        padding: '20px',
        marginBottom: '30px'
    },
    boxTitle: {
        fontSize: '20px',
        fontWeight: 700,
        margin: '0 0 20px 0'
    }
};

class UserAccount extends Component {
    static propTypes = {
        basicInfoForm: PropTypes.object,
        billingInformationForm: PropTypes.object,
        passwordsForm: PropTypes.object,
        updatePassword: PropTypes.func.isRequired,
        user: PropTypes.object
    };

    constructor (props) {
        super(props);
        this.state = {
            isActive: false
        };
    }

    render () {
        const {username} = getUserSiteState(this.props.user);
        return (
            <div>
                <PageTeaser
                    pageTitle={'IL MIO ACCOUNT'}
                />
                <div className='container'>
                    <Row>
                        <Col xs={12} md={6}>
                            <div style={styles.box}>
                                <AccountSettingsForm
                                    form={this.props.basicInfoForm}
                                    titleStyle={styles.boxTitle}
                                    marginBottom={0}
                                    padding={0}
                                />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div style={styles.box}>
                                <ChangePasswordForm
                                    form={this.props.passwordsForm}
                                    titleStyle={styles.boxTitle}
                                    marginBottom={0}
                                    padding={0}
                                    updatePassword={(oldPassword, newPassword) =>
                                        this.props.updatePassword(username, oldPassword, newPassword)
                                    }
                                />
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <div style={styles.box}>
                                <h3 style={styles.boxTitle}>{'FATTURAZIONE E PAGAMENTI:'}</h3>
                                <Form model='billing' onSubmit={() => console.log('TODO save billing info')}>
                                    <CompanyInfoForm form={this.props.billingInformationForm} />
                                    <div style={{height: 1, backgroundColor: colors.lightGrey, margin: '12px 0'}} />
                                    <PersonalInfoForm form={this.props.billingInformationForm} />
                                    <div style={{height: 1, backgroundColor: colors.lightGrey, margin: '16px 0'}} />
                                    <UserAccountSaveButton
                                        isActive={() => this.setState({isActive: true})}
                                    />
                                </Form>
                                <div style={{clear: 'both', paddingBottom: '20px'}} />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div style={styles.box}>
                                <h3 style={styles.boxTitle}>{'MODIFICA METODO DI PAGAMENTO:'}</h3>
                                <Button
                                    backgroundColor={colors.white}
                                    border={`1px solid ${colors.grey}`}
                                    onClick={() => {}}
                                    text='VISUALIZZA'
                                    height={40}
                                    textColor={colors.grey}
                                    style={{float: 'right'}}
                                />
                                <div style={{clear: 'both'}} />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div style={styles.box}>
                                <Row>
                                    <Col xs={12} sm={5} lg={4}>
                                        <div
                                            style={{
                                                width: 130,
                                                height: 180,
                                                marginBottom: 20,
                                                backgroundColor: colors.darkGrey
                                            }}
                                        />
                                    </Col>
                                    <Col xs={12} sm={7} lg={8}>
                                        <h3 style={styles.boxTitle}>{'AGGIORNA IL TUO SITO:'}</h3>
                                        <div>
                                            <p style={{color: colors.primaryColor}}>{'NOMESITO'}</p>
                                            <p>{'ONLINE DAL: 20.03.2017'}</p>
                                        </div>
                                        <Button
                                            onClick={() => window.location = '#/update-site/NOMESITO'}
                                            height={40}
                                            text={'MODIFICA'}
                                        />
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div style={styles.box}>
                                <h3 style={styles.boxTitle}>{'STORIA PAGAMENTI:'}</h3>
                                <Button
                                    backgroundColor={colors.white}
                                    border={`1px solid ${colors.grey}`}
                                    onClick={() => {}}
                                    text='VISUALIZZA'
                                    height={40}
                                    textColor={colors.grey}
                                    style={{float: 'right'}}
                                />
                                <div style={{clear: 'both'}} />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div style={styles.box}>
                                <h3 style={styles.boxTitle}>{'STORIA SOTTOSCRIZIONI:'}</h3>
                                <Button
                                    backgroundColor={colors.white}
                                    border={`1px solid ${colors.grey}`}
                                    onClick={() => {}}
                                    text='VISUALIZZA'
                                    height={40}
                                    textColor={colors.grey}
                                    style={{float: 'right'}}
                                />
                                <div style={{clear: 'both'}} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        basicInfoForm: state.userBasicInfoForm,
        billingInformationForm: state.billingInformationForm,
        passwordsForm: state.userPasswordsForm,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePassword: bindActionCreators(updatePassword, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(UserAccount));
