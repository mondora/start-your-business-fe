import React, {Component, PropTypes} from 'react';
import {Col, Button, Glyphicon} from 'react-bootstrap';

// import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

const styles = {
    subscriptionContainer: {
        borderRadius: 10,
        color: colors.white,
        borderWidth: 1,
        borderStyle: 'solid',
        paddingBottom: 30
    },
    subscriptionType: {
        padding: '10px 0',
        fontSize: '1.3em',
        fontWeight: '700'
    },
    subscriptionContent: {
        backgroundColor: colors.white,
        color: colors.grey
    },
    imgResponsive: {
        display: 'block',
        height: 'auto',
        maxWidth: '100%'
    },
    icon: {
        fontSize: 30
    },
    subscriptionPrice: {
        fontSize: '3em'
    },
    button: {
        backgroundColor: colors.white
    }
};

export default class Subscription extends Component {
    static propTypes = {
        bgColor: PropTypes.object,
        feature1: PropTypes.string,
        feature2: PropTypes.string,
        price: PropTypes.string,
        type: PropTypes.string
    };

    render () {
        console.log(this.props.bgColor);
        return (
            <Col xs={12} sm={4}>
                <div style={{...styles.subscriptionContainer, ...{backgroundColor: this.props.bgColor, borderColor: this.props.bgColor}}}>
                    <div style={styles.subscriptionType}>
                        {this.props.type}
                    </div>
                    <div style={styles.subscriptionContent}>
                        <img src='./_assets/images/template_01/infobox2.jpg' style={styles.imgResponsive} />
                        <p>
                            <Glyphicon
                                glyph='glyphicon glyphicon-ok-circle'
                                style={{...styles.icon, ...{color: this.props.bgColor}}}
                            />
                            {this.props.feature1}
                        </p>
                        <p>
                            <Glyphicon
                                glyph='glyphicon glyphicon-ok-circle'
                                style={{...styles.icon, ...{color: this.props.bgColor}}}
                            />
                            {this.props.feature2}
                        </p>
                    </div>
                    <p style={styles.subscriptionPrice}>
                        {this.props.price}
                    </p>
                    <Button style={{...styles.button, ...{color: this.props.bgColor}}}>
                        {'ORDINA ORA !'}
                    </Button>
                </div>
            </Col>
        );
    }
}
