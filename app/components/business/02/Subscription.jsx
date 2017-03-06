import Radium from 'radium';
import React, {PropTypes} from 'react';
import {Button, Glyphicon} from 'react-bootstrap';

import BusinessSubscription from 'components/business/Subscription';

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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        fontSize: 14,
        color: colors.templateGreyText
    },
    subscriptionPriceWrp: {
        padding: '10px 0',
        borderTop: `1px solid ${colors.lightGrey}`
    },
    subscriptionPrice: {
        lineHeight: '1em',
        fontSize: '3.5em',
        fontWeight: '700'
    },
    subscriptionFrequency: {
        fontSize: '1.5em',
        lineHeight: '.9em',
    },
    subscriptionButtonWrp: {
        width: '100%',
        padding: '8px 15px',
        height: 75,
        border: 0,
        borderRadius: 0,
        margin: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    subscriptionTextButton: {
        color: colors.white,
        fontSize: '1.4em',
        fontWeight: '400'
    },
    subscriptionIconWrp: {
        height: 45,
        width: 45,
        lineHeight: '45px',
        borderRadius: 50,
        border: `1px solid ${colors.white}`
    },
    subscriptionIcon: {
        color: colors.white,
        fontSize: 16
    }
};

class Subscription extends BusinessSubscription {
    static propTypes = {
        bgColor: PropTypes.string,
        frequency: PropTypes.node,
        photoName: PropTypes.string,
        price: PropTypes.node,
        type: PropTypes.node
    };

    render () {
        const mainColor = this.props.bgColor;
        const path = `../_assets/images/template_02/${this.props.photoName}`;
        return (
            <div style={styles.subscriptionContainer}>
                <div style={styles.subscriptionFeaturesWrp}>
                    {this.renderImage(path)}
                    <div style={styles.subscriptionType}>
                        {this.props.type}
                    </div>
                    {this.renderSubscriptionFeatures()}
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
                    <div style={styles.subscriptionTextButton}>{'ORDINA ORA !'}</div>
                    <div style={styles.subscriptionIconWrp}>
                        <Glyphicon
                            glyph='glyphicon glyphicon-chevron-right'
                            style={styles.subscriptionIcon}
                        />
                    </div>
                </Button>
            </div>
        );
    }
}

export default Radium(Subscription);