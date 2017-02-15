import Radium from 'radium';
import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';

import * as colors from 'lib/colors';

import PageTeaser from 'components/PageTeaser';

const styles = {
    rowStyle: {
        marginBottom: '60px',
        '@media screen and (min-width: 767px)': {
            margin: '20px auto 60px auto'
        }
    },
    title: {
        margin: 0,
        color: colors.primaryColor,
        fontWeight: 800,
        fontSize: 'calc(30px + 1vw)',
        lineHeight: 'calc(30px + 1vw)'
    },
    text: {
        fontSize: '1.2em',
        lineHeight: '1.5em',
        paddingTop: 20,
        paddingBottom: 20
    }
};

class Privacy extends Component {
    render () {
        return (
            <div>
                <PageTeaser
                    pageTitle={''}
                />
                <div className='container' style={styles.rowStyle}>
                    <Row>
                        <Col xs={12} style={{padding: '10px 25px'}}>
                            <h2 style={styles.title}>{'PRIVACY POLICY:'}</h2>
                            <div style={styles.text}>
                                <p>
                                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Donec et interdum justo. Quisque vitae placerat turpis.
                                        Integer sagittis eget tortor eu porta. Quisque nec neque
                                        nec elit laoreet facilisis ac vel lectus. Aenean vitae sollicitudin ante,
                                        quis imperdiet justo. Nulla at sapien fermentum mi gravida vehicula
                                        blandit quis sapien. Nam sodales enim id lacus tincidunt, sit amet
                                        bibendum lorem sollicitudin. Morbi aliquam dolor at sem fermentum blandit.`}
                                </p>
                                <p>
                                    {`Sed sollicitudin turpis quis erat facilisis, id hendrerit massa ornare.
                                        Maecenas dapibus fermentum eros. Suspendisse tincidunt velit porttitor
                                        hendrerit faucibus. Integer accumsan sagittis nunc, quis auctor tellus
                                        iaculis varius. Integer ut felis porttitor, rutrum ligula eu, lacinia tellus.
                                        Suspendisse finibus efficitur iaculis. Vivamus luctus tincidunt dolor.
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                        cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus.`}
                                </p>
                                <p>
                                    {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Donec et interdum justo. Quisque vitae placerat turpis.
                                        Integer sagittis eget tortor eu porta. Quisque nec neque
                                        nec elit laoreet facilisis ac vel lectus. Aenean vitae sollicitudin ante,
                                        quis imperdiet justo. Nulla at sapien fermentum mi gravida vehicula
                                        blandit quis sapien. Nam sodales enim id lacus tincidunt, sit amet
                                        bibendum lorem sollicitudin. Morbi aliquam dolor at sem fermentum blandit.`}
                                </p>
                                <p>
                                    {`Sed sollicitudin turpis quis erat facilisis, id hendrerit massa ornare.
                                        Maecenas dapibus fermentum eros. Suspendisse tincidunt velit porttitor
                                        hendrerit faucibus. Integer accumsan sagittis nunc, quis auctor tellus
                                        iaculis varius. Integer ut felis porttitor, rutrum ligula eu, lacinia tellus.
                                        Suspendisse finibus efficitur iaculis. Vivamus luctus tincidunt dolor.
                                        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                        cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus.`}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Radium(Privacy);
