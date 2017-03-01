import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

import * as colors from 'lib/colors';

const styles = {
    subscriptionContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        width: '31%',
        borderRadius: 10,
        color: colors.white,
        borderWidth: 1,
        borderStyle: 'solid',
        marginBottom: 30,
        '@media screen and (max-width: 767px)': {
            display: 'block',
            width: '100%'
        }
    },
    subscriptionType: {
        padding: '10px 20px',
        fontSize: '1.4em',
        fontWeight: '700',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    subscriptionImage: {
        display: 'block',
        height: 'auto',
        maxHeight: '350px',
        maxWidth: '100%',
        margin: '0 auto',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    subscriptionFeaturesWrp: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        fontSize: 14,
        color: colors.darkGrey
    },
    subscriptionFeatures: {
        display: 'flex',
        textAlign: 'left',
        padding: '15px 20px',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        fontSize: '1.1em'
    },
    subscriptionIcon: {
        fontSize: 26,
        verticalAlign: 'middle',
        marginRight: 5
    },
    subscriptionBottom: {
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    subscriptionPrice: {
        display: 'block',
        height: '60px',
        fontSize: '3.5em',
        fontWeight: '700',
        width: '100%'
    },
    subscriptionFrequency: {
        display: 'block',
        fontSize: '1.5em',
        width: '100%'
    },
    subscriptionButton: {
        fontSize: '1.2em',
        padding: '8px 20px',
        backgroundColor: colors.white,
        border: 0,
        margin: '0 auto 20px auto'
    }
};

class Subscription extends Component {
    static propTypes = {
        bgColor: PropTypes.string,
        feature1: PropTypes.string,
        feature2: PropTypes.string,
        frequency: PropTypes.string,
        photoName: PropTypes.string,
        price: PropTypes.string,
        type: PropTypes.string
    };

    render () {
        const path = `../_assets/images/template_01/${this.props.photoName}`;
        const mainColor = this.props.bgColor;
        return (
            <div style={{...styles.subscriptionContainer, ...{borderColor: mainColor}}}>
                <div style={{...styles.subscriptionType, ...{backgroundColor: mainColor}}}>
                    {this.props.type}
                </div>
                <div style={styles.subscriptionFeaturesWrp}>
                    <div>
                        <img src={path} style={styles.subscriptionImage} />
                    </div>
                    <div style={styles.subscriptionFeatures}>
                        <p>
                            <Glyphicon
                                glyph='glyphicon glyphicon-ok-circle'
                                style={{...styles.subscriptionIcon, ...{color: mainColor}}}
                            />
                            {this.props.feature1}
                        </p>
                        <p>
                            <Glyphicon
                                glyph='glyphicon glyphicon-ok-circle'
                                style={{...styles.subscriptionIcon, ...{color: mainColor}}}
                            />
                            {this.props.feature2}
                        </p>
                    </div>
                </div>
                <div style={{...styles.subscriptionBottom, ...{backgroundColor: mainColor}}}>
                    <p>
                        <span style={styles.subscriptionPrice}>
                            {this.props.price}
                        </span>
                        <span style={styles.subscriptionFrequency}>
                            {this.props.frequency}
                        </span>
                    </p>
                    <Button style={{...styles.subscriptionButton, ...{color: mainColor}}}>
                        {'ORDINA ORA !'}
                    </Button>
                </div>
            </div>
        );
    }
}

export default Radium(Subscription);
