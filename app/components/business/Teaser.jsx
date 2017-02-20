import React, {Component} from 'react';
import {Col, Row, Carousel} from 'react-bootstrap';

const styles = ({
    teaserWrp: {
        maxWidth: '1200px',
        height: 'auto',
        marginBottom: 40
    }
});

export default class Teaser extends Component {
    render () {
        return (
            <div className='container-fluid' style={styles.teaserWrp}>
                <Row>
                    <Col xs={12}>
                        <Carousel>
                            <Carousel.Item>
                                <img alt='' src='./_assets/images/templates/carousel01.jpg' />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img alt='' src='./_assets/images/templates/carousel01.jpg' />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img alt='' src='./_assets/images/templates/carousel01.jpg' />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </div>
        );
    }
}
