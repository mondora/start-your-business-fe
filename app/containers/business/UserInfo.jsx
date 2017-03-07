import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Row, Col} from 'react-bootstrap';
import {connect} from 'react-redux';

import BillingInformationForm from 'components/BillingInformationForm';

import * as colors from 'lib/colors';

const styles = {
    formBox: {
        backgroundColor: colors.backgroundLightGrey,
        padding: 20,
        marginBottom: 40
    },
    boxTitle: {
        fontWeight: '700',
        fontSize: '1.3em'
    }
};

class UserInfo extends Component {
    static propTypes = {
        billingInformationForm: PropTypes.object.isRequired,
        businessSiteState: PropTypes.object.isRequired
    };

    render () {
        return (
            <div className='container'>
                {'INSERISCI I TUOI DATI'}
                <Row>
                    <Col xs={12} style={styles.formBox}>
                        <p style={styles.boxTitle}>
                            {'1. Dati di spedizione:'}
                        </p>
                        <BillingInformationForm
                            form={this.props.billingInformationForm}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        billingInformationForm: state.billingInformationForm,
        businessSiteState: state.businessSite
    };
};

const mapDispatchToProps = () => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(UserInfo));
