import Radium from 'radium';
import React, {PropTypes, Component} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

import SubscriptionFeatures from 'components/business/SubscriptionFeatures';
import SubscriptionImage from 'components/business/SubscriptionImage';

import * as colors from 'lib/colors';

const styles = {
    subscriptionContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        width: '31%',
        maxWidth: '370px',
        backgroundColor: colors.white,
        margin: '30px 0px',
        '@media screen and (max-width: 767px)': {
            display: 'block',
            width: '100%'
        }
    },
    subscriptionType: {
        textAlign: 'left',
        padding: '10px 20px',
        color: colors.templateGreyText,
        fontSize: '1.4em',
        fontWeight: '700'
    },
    subscriptionFeaturesWrp: {
        fontSize: 14,
        color: colors.templateGreyText
    },
    subscriptionPriceWrp: {
        padding: '10px',
        borderTop: `1px solid ${colors.lightGrey}`
    },
    subscriptionPrice: {
        lineHeight: '1em',
        fontSize: '3.5em',
        fontWeight: '700'
    },
    subscriptionFrequency: {
        fontSize: '1.5em',
        lineHeight: '.9em'
    },
    subscriptionButtonWrp: {
        width: '100%',
        padding: '8px 15px',
        height: 75,
        border: 0,
        borderRadius: 0,
        margin: 0
    },
    subscriptionTextButton: {
        float: 'left',
        lineHeight: '45px',
        marginLeft: 10,
        color: colors.white,
        fontSize: '1.4em',
        fontWeight: '400',
        '@media screen and (min-width: 991px) and (max-width: 1200px)': {
            lineHeight: '25px'
        }
    },
    subscriptionIconWrp: {
        float: 'left',
        height: 45,
        width: 45,
        lineHeight: '45px',
        borderRadius: 50,
        border: `1px solid ${colors.white}`,
        '@media screen and (min-width: 767px) and (max-width: 991px)': {
            display: 'none'
        },
        '@media screen and (min-width: 991px) and (max-width: 1200px)': {
            height: 25,
            width: 25,
            lineHeight: '25px'
        }
    },
    subscriptionIcon: {
        color: colors.white,
        fontSize: 16,
        '@media screen and (min-width: 767px) and (max-width: 1200px)': {
            fontSize: 10
        }
    }
};

class Subscription extends Component {
    static propTypes = {
        bgColor: PropTypes.string,
        feature1: PropTypes.node,
        feature2: PropTypes.node,
        frequency: PropTypes.node,
        image: PropTypes.any,
        imageUploadMode: PropTypes.bool,
        price: PropTypes.node,
        type: PropTypes.node
    };

    render () {
        const mainColor = this.props.bgColor;
        const path = `/_assets/images/template_02/${this.props.image}`;
        return (
            <div style={styles.subscriptionContainer}>
                <div style={styles.subscriptionFeaturesWrp}>
                    <SubscriptionImage
                        imageUploadMode={this.props.imageUploadMode}
                        path={path}
                    />
                    <div style={styles.subscriptionType}>
                        {this.props.type}
                    </div>
                    <SubscriptionFeatures
                        bgColor={this.props.bgColor}
                        feature1={this.props.feature1}
                        feature2={this.props.feature2}
                    />
                </div>
                <div style={styles.subscriptionPriceWrp}>
                    <span style={{...styles.subscriptionPrice, ...{color: mainColor}}}>
                        {this.props.price}
                    </span>
                    <span style={{...styles.subscriptionFrequency, ...{color: mainColor}}}>
                        {' / '}
                        {this.props.frequency}
                    </span>
                </div>
                <Button style={{...styles.subscriptionButtonWrp, ...{backgroundColor: mainColor}}}>
                    <div style={styles.subscriptionIconWrp}>
                        <Glyphicon
                            glyph='glyphicon glyphicon-chevron-right'
                            style={styles.subscriptionIcon}
                        />
                    </div>
                    <div style={styles.subscriptionTextButton}>{'ORDINA ORA !'}</div>
                </Button>
            </div>
        );
    }
}

export default Radium(Subscription);
