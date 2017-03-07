import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

import * as colors from 'lib/colors';
import {getDefaultPricing, getPlanFeatures, getPlanFrequency, isActive} from 'lib/zuora-products-utils';

import SignUpButton from 'components/SignUpButton';
import HorizontalLine from 'components/HorizontalLine';

const styles = {
    container: {
        position: 'relative',
        backgroundColor: colors.white,
        maxWidth: 370,
        margin: '0 auto',
        borderRadius: 15
    },
    name: {
        color: colors.white,
        paddingTop: 10,
        fontSize: 'calc(18px + .5vw)'
    },
    price: {
        color: colors.white,
        fontWeight: 800,
        lineHeight: '60px'
    },
    frequency: {
        color: colors.white,
        fontSize: '1.6em',
        fontWeight: 400
    },
    top: {
        borderRadius: '10px 10px 0 0',
        height: 220,
        width: '100%',
        padding: 10
    },
    bottom: {
        height: 200,
        padding: 10,
        textAlign: 'left',
        '@media screen and (max-width: 767px)': {
            minHeight:150,
            height: 'auto'
        }
    },
    featuresWrp: {
        display: ' flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: '5px 0',
        fontSize: '1.2em',
        color: colors.darkGrey
    },
    confirmButtonContainer: {
        padding: '20px 0'
    }
};

class ProductPlanCard extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        onConfirm: PropTypes.func.isRequired,
        productPlan: PropTypes.object.isRequired
    };

    static defaultProps = {
        backgroundColor: colors.white
    };

    renderInactivePlan () {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                    top: 0,
                    left: 0,
                    position: 'absolute',
                    backgroundColor: colors.blackOpacity
                }}
            />
        );
    }

    render () {
        const {backgroundColor, onConfirm, productPlan} = this.props;
        const features = getPlanFeatures(productPlan);
        const pricing = getDefaultPricing(productPlan);
        return (
            <Col xs={12} sm={6} style={{paddingTop: '4vw', paddingBottom: '4vw'}}>
                <div style={styles.container}>
                    <div
                        className='top'
                        style={{
                            ...styles.top,
                            ...{backgroundColor: backgroundColor}
                        }}
                    >
                        {!isActive(productPlan) ? this.renderInactivePlan() : null}
                        <div style={styles.name}>
                            {productPlan.name}
                        </div>
                        <HorizontalLine color={colors.white} width={50} />
                        <div style={styles.price}>
                            <span style={{fontWeight: 400, fontSize: '3em'}}>{pricing.currencySymbol ? pricing.currencySymbol : pricing.currency}</span>
                            <span style={{fontSize: '4.5em'}}>{pricing.price}</span>
                        </div>
                        <div style={styles.frequency}>
                            {`(${getPlanFrequency(productPlan)})`}
                        </div>
                    </div>
                    <div style={styles.bottom}>
                        {features.map((f, i) => (
                            <div
                                key={i}
                                style={styles.featuresWrp}
                            >
                                <Glyphicon
                                    glyph='glyphicon glyphicon-ok-circle'
                                    style={{
                                        color: backgroundColor,
                                        fontSize: 30,
                                        paddingRight: 10
                                    }}
                                />
                                <span style={{lineHeight: '20px', paddingTop: '4px'}}>
                                    {f}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div style={styles.confirmButtonContainer} >
                        <SignUpButton
                            backgroundColor={colors.lightGrey}
                            onClick={onConfirm}
                            textColor={colors.darkGrey}
                        />
                    </div>
                </div>
            </Col>
        );
    }
}

export default Radium(ProductPlanCard);
