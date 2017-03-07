import Radium from 'radium';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'react-bootstrap';

import * as colors from 'lib/colors';

import PageTeaser from 'components/PageTeaser';

const styles = {
    col: {
        backgroundColor: colors.primaryColorLighter,
        borderRadius: '5px',
        padding: '20px'
    },
    row: {
        margin: '0 20px 25px 20px'
    }
};

class UserAccount extends Component {

    renderUserInfo () {
        return (
            <Row style={styles.row}>
                <Col xs={12} style={styles.col}>
                    {'DETTAGLI PERSONALI:'}
                    {'Nome:'}
                    {'Email:'}
                    {'Iscritto dal:'}
                </Col>
            </Row>
        );
    }

    renderPaymentInfo () {
        return (
            <Row style={styles.row}>
                <Col xs={12} style={styles.col}>
                    {'DETTAGLI PAGAMENTO:'}
                    {'Metodo scelto:'}
                    {'Stato:'}
                    {'In scadenza il:'}
                </Col>
            </Row>
        );
    }

    renderLastTemplates () {
        return (
            <Col xs={12} md={6} style={styles.col}>
                {'ULTIMI TEMPLATE ONLINE:'}
            </Col>
        );
    }

    renderLastDrafts () {
        return (
            <Col xs={12} md={6} style={styles.col}>
                {'ULTIME BOZZE SALVATE:'}
            </Col>
        );
    }

    render () {
        return (
            <div>
                <PageTeaser
                    pageTitle={'IL MIO ACCOUNT'}
                />
                <div className='container'>
                    {this.renderUserInfo()}
                    {this.renderPaymentInfo()}
                    <Row style={styles.row}>
                        {this.renderLastTemplates()}
                        {this.renderLastDrafts()}
                    </Row>
                    <Row style={styles.row}>
                        <Col xs={12} md={6} style={styles.col}>
                            {'STORIA PAGAMENTI:'}
                        </Col>
                        <Col xs={12} md={6} style={styles.col}>
                            {'STORIA SOTTOSCRIZIONI:'}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {
    };
};

const mapDispatchToProps = () => {
    return {
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(UserAccount));
