import React, {Component, PropTypes} from 'react';

import DomainInput from 'components/DomainInput';

import {allowOwnDomain, getDefaultPricing} from 'lib/zuora-products-utils';

const styles = {
    container: {
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
};

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

    render () {
        const {backgroundColor, productPlan} = this.props;
        const pricing = getDefaultPricing(productPlan);
        return (
            <div style={styles.container} onClick={this.props.onSelect}>
                <div
                    className='top'
                    style={{
                        ...styles.top,
                        ...{backgroundColor: backgroundColor}
                    }}
                >
                    <div style={styles.name}>
                        {productPlan.name}
                    </div>
                    <div style={styles.price}>
                        {pricing.currency}{pricing.price}
                    </div>
                    <div style={styles.frequency}>
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


