import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col} from 'react-bootstrap';

import * as colors from 'lib/colors';
import {allowOwnDomain, getDefaultPricing, getPlanFrequency, isActive} from 'lib/zuora-products-utils';

import Icon from 'components/Icon';
import DomainInput from 'components/DomainInput';

const styles = {
    checkCircle: {
        backgroundColor: colors.white,
        width: 30,
        height: 30,
        borderRadius: '100%',
        '@media screen and (max-width: 390px)': {
            width: 24,
            height: 24
        }
    },
    container: {
        position: 'relative',
        backgroundColor: colors.white,
        height: 245,
        borderRadius: 10,
        marginBottom: 20
    },
    top: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: '10px 10px 0 0',
        height: 65,
        width: '100%',
        padding: '5px 10px',
        '@media screen and (max-width: 390px)': {
            height: 50
        }
    },
    iconStyle: {
        width: 30,
        height: 30,
        '@media screen and (max-width: 390px)': {
            width: 24,
            height: 24
        }
    },
    nameWrp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        marginLeft: 10,
        color: colors.white,
        fontSize: 20,
        fontWeight: '600',
        '@media screen and (max-width: 390px)': {
            marginLeft: 5,
            fontSize: 14,
            lineHeight: '14px',
            fontWeight: '300'
        }
    },
    price: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        color: colors.white,
        fontSize: 26,
        lineHeight: '24px',
        fontWeight: '700',
        '@media screen and (min-width: 991px)': {
            fontSize: 34,
            lineHeight: '32px'
        },
        '@media screen and (max-width: 390px)': {
            fontSize: 20,
            lineHeight: '22px'
        }
    },
    frequency: {
        color: colors.white,
        fontSize: 16,
        lineHeight: '16px',
        fontWeight: '300'
    },
    description: {
        display: 'flex',
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
        minHeight: 40
    },
    planContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'space-between',
        padding: '0px 20px',
        height: 180
    }
};

class ChoosablePlanCard extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        isSelected: PropTypes.bool,
        onSelect: PropTypes.func.isRequired,
        productPlan: PropTypes.object.isRequired
    };

    static defaultProps = {
        backgroundColor: colors.white
    };

    //TODO manage correctly activePlan and isSelected when more than one active plan
    renderCheckCircle (activePlan) {
        if (!activePlan) {
            return (
                <div
                    style={styles.checkCircle}
                    onClick={activePlan ? this.props.onSelect : null}
                />
            );
        } else {
            return (
                <Icon
                    iconName='check_white'
                    iconStyle={styles.iconStyle}
                />
            );
        }
    }

    renderPlanStatus () {
        return (
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    borderRadius: 10,
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    position: 'absolute',
                    backgroundColor: colors.blackOpacity
                }}
            />
        );
    }

    render () {
        const {backgroundColor, isSelected, productPlan} = this.props;
        const pricing = getDefaultPricing(productPlan);
        const activePlan = isActive(productPlan);
        return (
            <Col xs={12} sm={6}>
                <div style={styles.container}>
                    <div
                        className='top'
                        style={{
                            ...styles.top,
                            ...{backgroundColor: isSelected ? backgroundColor : colors.grey}
                        }}
                    >
                        <div style={styles.nameWrp}>
                            {this.renderCheckCircle(activePlan, isSelected)}
                            {!activePlan ? this.renderPlanStatus() : null}
                            <span style={styles.name}>{productPlan.name}</span>
                        </div>
                        <div style={styles.price}>
                            {pricing.currencySymbol ? pricing.currencySymbol : pricing.currency}{pricing.price}
                            <br />
                            <span style={styles.frequency}>
                                {`(${getPlanFrequency(productPlan)})`}
                            </span>
                        </div>
                    </div>
                    <div style={styles.planContent}>
                        <div style={styles.description}>
                            {productPlan.description}
                        </div>
                        <DomainInput
                            customDomain={allowOwnDomain(productPlan)}
                        />
                    </div>
                </div>
            </Col>
        );
    }
}

export default Radium(ChoosablePlanCard);
