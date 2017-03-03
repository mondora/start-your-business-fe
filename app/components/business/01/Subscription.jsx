import Radium from 'radium';
import React, {PropTypes} from 'react';
import {Button} from 'react-bootstrap';

import BusinessSubscription from 'components/business/Subscription';

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
    subscriptionFeaturesWrp: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        fontSize: 14,
        color: colors.templateGreyText
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
        borderBottomRightRadius: 8,
        padding: '20px 10px'
    },
    subscriptionPrice: {
        display: 'block',
        lineHeight: '1em',
        fontSize: '3.5em',
        fontWeight: '700',
        width: '100%'
    },
    subscriptionFrequency: {
        display: 'block',
        fontSize: '1.5em',
        lineHeight: '.9em',
        width: '100%',
        marginBottom: '15px'
    },
    subscriptionButton: {
        fontSize: '1.2em',
        padding: '8px 20px',
        backgroundColor: colors.white,
        border: 0
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
        const path = `../_assets/images/template_01/${this.props.photoName}`;
        const mainColor = this.props.bgColor;
        return (
            <div style={{...styles.subscriptionContainer, ...{borderColor: mainColor}}}>
                <div style={{...styles.subscriptionType, ...{backgroundColor: mainColor}}}>
                    {this.props.type}
                </div>
                <div style={styles.subscriptionFeaturesWrp}>
                    {this.renderImage(path)}
                    {this.renderSubscriptionFeatures()}
                </div>
                <div style={{...styles.subscriptionBottom, ...{backgroundColor: mainColor}}}>
                    <span style={styles.subscriptionPrice}>
                        {this.props.price}
                    </span>
                    <span style={styles.subscriptionFrequency}>
                        {this.props.frequency}
                    </span>
                    <Button style={{...styles.subscriptionButton, ...{color: mainColor}}}>
                        {'ORDINA ORA !'}
                    </Button>
                </div>
            </div>
        );
    }
}

export default Radium(Subscription);
