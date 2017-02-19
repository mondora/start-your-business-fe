import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row} from 'react-bootstrap';

import * as colors from 'lib/colors';

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
    }
};

class Footer extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        footerInfo: PropTypes.object.isRequired
    };

    renderBottomFooter () {
        return (
            <div style={styles.bottomFooterWrp}>
                <div className='container'>
                    <Row>
                        <Col xs={12} sm={6}>
                            <p style={{margin: '0', padding: '15px 0'}}>
                                {this.props.footerInfo.bottom}
                            </p>
                        </Col>
                        <Col xs={12}  sm={6}>
                            <p style={{float: 'right'}}>
                                {'Privacy Policy | Termini e Condizioni | Developed with: Wallabusiness'}
                            </p>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }

    render () {
        const {companyName, line1, line2, line3, line4} = this.props.footerInfo;
        return (
            <div style={styles.footerWrp}>
                <div className='container'>
                    <Row style={{padding: '20px 0', color: colors.primaryColorLighter}}>
                        <Col xs={12} sm={6} style={styles.footerCol}>
                            <strong>
                                {companyName}
                            </strong>
                            <br />
                            {line1}
                            <br />
                            {line2}
                            <br />
                            {line3}
                            <br />
                            {line4}
                        </Col>
                        <Col xs={12} sm={6} style={styles.footerCol}>
                            {'available payment methods'}
                        </Col>
                    </Row>
                </div>
                {this.renderBottomFooter()}
            </div>
        );
    }
}

export default Radium(Footer);
