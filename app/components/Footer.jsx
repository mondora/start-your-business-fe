import Radium from 'radium';
import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';

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
            minHeight: 100
        }
    }
};

class Footer extends Component {
    sendEmail () {
        window.location = 'mailto:info@entova.it';
    }
    render () {
        return (
            <div style={styles.footerWrp}>
                <div className='container'>
                    <Row style={{padding: '20px 0', color: colors.primaryColorLighter}}>
                        <Col xs={12} md={6} style={styles.footerCol}>
                            <div style={styles.textWrp}>
                                <strong>
                                    {`mondora S.r.l. società soggetta
                                        all’attività di direzione e coordinamento di TeamSystem S.p.A. -
                                        Sede: Via Nazionale 11 - 23013 Cosio Valtellino (SO)`}
                                    <br />
                                </strong>
                            </div>
                        </Col>
                        <Col xs={12} sm={6} md={3} style={styles.footerCol}>
                            <div style={styles.textWrp}>
                                <a
                                    href='/#/privacy'
                                    style={{color: colors.primaryColorLighter}}
                                    target='_blank'
                                >
                                    <strong>{'Privacy Policy'}</strong>
                                </a>
                                <br />
                                <span>
                                    <strong>{'Email. '}</strong>
                                    <a href='mailto:info@entova.it' style={{color: colors.primaryColorLighter}}>
                                        {'info@entova.it'}
                                    </a>
                                </span>
                                <br />
                                <span>
                                    <strong>{'Tel: '}</strong>
                                    <a href='tel:+3903421856264' style={{color: colors.primaryColorLighter}}>
                                        {'+39 0342 1856 264 '}
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
                                    onClick={this.sendEmail}
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
                                    {`© Copyright 2017 - mondora S.r.l. -
                                        Partita Iva 03680680968. Tutti i diritti riservati`}
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
