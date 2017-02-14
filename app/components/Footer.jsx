import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import Radium from 'radium';

import * as colors from 'lib/colors';
import Button from 'components/CustomButton';

const styles = {
    footerWrp: {
        backgroundColor: colors.backgroundFooter
    },
    footerCol: {
        color: colors.primaryColorLighter,
        fontSize: 14
    },
    bottomFooterWrp: {
        backgroundColor: colors.backgroundBottomFooter,
        color: colors.primaryColorLighter,
        fontSize: 12,
        fontWeight: 300
    },
    textWrp: {
        '@media screen and (max-width: 991px)': {
            border: 'none',
            height: 'auto',
            marginBottom: 20
        },
        '@media screen and (min-width: 991px)': {
            borderRight: `1px solid ${colors.grey}`,
            minHeight: 100,
        }
    }
};

class Footer extends Component {
    render () {
        return (
            <div style={styles.footerWrp}>
                <div className='container'>
                    <Row style={{padding: '20px 0', color: colors.primaryColorLighter}}>
                        <Col xs={12} md={6} style={styles.footerCol}>
                            <div style={styles.textWrp}>
                                <strong>
                                    {'TeamSystem S.p.A. società con socio unico soggetta all’attività di direzione e coordinamento di TeamSystem Holding S.p.A.'}
                                    <br /><br />
                                    {'Sede Legale: Via Sandro Pertini, 88 - 61122 Pesaro (PU)'}
                                </strong>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={3} style={styles.footerCol}>
                            <div style={styles.textWrp}>
                                <a href='' style={{color: colors.primaryColorLighter}}>
                                    <strong>{'Privacy Policy'}</strong>
                                </a>
                                <br />
                                <span>
                                    <strong>{'Email. '}</strong>
                                    <a href='mailto:support@email.com' style={{color: colors.primaryColorLighter}}>
                                        {'support@email.com'}
                                    </a>
                                </span>
                                <br />
                                <span>
                                    <strong>{'Tel: '}</strong>
                                    <a href='tel:+39034212345678' style={{color: colors.primaryColorLighter}}>
                                        {'+39 0342-12345678'}
                                    </a>
                                </span>
                            </div>
                        </Col>
                        <Col
                            xs={12}
                            sm={6}
                            md={3}
                            style={styles.footerCol}
                        >
                            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                                <Button
                                    backgroundColor={colors.primaryColor}
                                    height={40}
                                    text={'SERVE AIUTO ?'}
                                    textColor={colors.backgroundFooter}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
                <div style={styles.bottomFooterWrp}>
                    <div className='container'>
                        <Row>
                            <Col xs={12}>
                                <p style={{margin: '0', padding: '15px 0'}}>
                                    {'© 2017 TeamSystem S.p.A. - PIVA: 01035310414 - Cap. Soc. € 24.000.000 I.v.  Tutti i diritti riservati.'}
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        );
    }
}

export default Radium(Footer);
