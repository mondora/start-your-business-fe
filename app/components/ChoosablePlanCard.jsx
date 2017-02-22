import React, {Component, PropTypes} from 'react';

import DomainInput from 'components/DomainInput';

import * as colors from 'lib/colors';
import {allowOwnDomain, getDefaultPricing, isActive} from 'lib/zuora-products-utils';

const styles = (isSelected) => ({
    checkCircle: {
        backgroundColor: isSelected ? colors.primaryColor : colors.background,
        minHeight: '30px',
        minWidth: '30px'
    },
    container: {
        position: 'relative',
        backgroundColor: '#fff',
        width: 300,
        height: 400,
        borderRadius: 10
    },
    name: {
        color: '#fff',
        fontSize: 25
    },
    price: {
        color: '#fff',
        fontSize: 40
    },
    frequency: {
        color: '#fff',
        fontSize: 20
    },
    top: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '10px 10px 0 0',
        height: 200,
        width: '100%',
        padding: 10
    }
});

export default class ChoosablePlanCard extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        isSelected: PropTypes.bool,
        onSelect: PropTypes.func.isRequired,
        productPlan: PropTypes.object.isRequired
    };

    static defaultProps = {
        backgroundColor: '#D3D3D3'
    };

    renderCheckCircle (activePlan, isSelected) {
        return (
            <div
                style={styles(isSelected).checkCircle}
                onClick={activePlan ? this.props.onSelect : null}
            />
        );
    }

    renderPlanStatus () {
        return (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    position: 'absolute',
                    backgroundColor: colors.blackOpacity,
                    color: colors.white,
                    fontSize: '30px'
                }}
            >
                {'Piano non attivo'}
            </div>
        );
    }

    render () {
        const {backgroundColor, isSelected, productPlan} = this.props;
        const pricing = getDefaultPricing(productPlan);
        const activePlan = isActive(productPlan);
        return (
            <div style={styles(isSelected).container}>
                <div
                    className='top'
                    style={{
                        ...styles(isSelected).top,
                        ...{backgroundColor: backgroundColor}
                    }}
                >
                    {this.renderCheckCircle(activePlan, isSelected)}
                    {!activePlan ? this.renderPlanStatus() : null}
                    <div style={styles(isSelected).name}>
                        {productPlan.name}
                    </div>
                    <div style={styles(isSelected).price}>
                        {pricing.currency}{pricing.price}
                    </div>
                    <div style={styles(isSelected).frequency}>
                        {`(${productPlan.Frequency__c})`}
                    </div>
                    {productPlan.description}
                    <DomainInput
                        customDomain={allowOwnDomain(productPlan)}
                    />
                </div>
            </div>
        );
    }
}
