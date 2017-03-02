import React from 'react';
import {Col, Row} from 'react-bootstrap';

import BusinessTeaser from 'components/business/Teaser';

import {templatesIds} from 'lib/business-site-utils';

const styles = {
    teaserWrp: {
        maxWidth: '1200px',
        height: 'auto'
    }
};

export default class Teaser extends BusinessTeaser {

    render () {
        return (
            <div className='container-fluid' style={styles.teaserWrp}>
                <Row>
                    <Col xs={12}>
                        {this.renderContent(templatesIds.TEMPLATE_1)}
                    </Col>
                </Row>
            </div>
        );
    }
}
