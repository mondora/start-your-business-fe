import React, {Component, PropTypes} from 'react';

import {Col, Row} from 'react-bootstrap';

export default class Header extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        headerInfo: PropTypes.object.isRequired
    };

    render () {
        const {emailAddress, phoneNumber} = this.props.headerInfo;
        return (
            <div>
                <Row>
                    <Col xs={12} sm={6}>
                        {phoneNumber}
                        {emailAddress}
                    </Col>
                    <Col xs={12} sm={6}>
                        {'| LOGIN | REGISTRATI |'}
                    </Col>
                </Row>
            </div>
        );
    }
}