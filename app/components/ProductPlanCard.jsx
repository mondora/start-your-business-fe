import React, {Component, PropTypes} from 'react';
import {Glyphicon} from 'react-bootstrap';

import Button from 'components/CustomButton';
import HorizontalLine from 'components/HorizontalLine';

import {getDefaultPricing} from 'lib/zuora-products-utils';

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
    },
    bottom: {
        height: 150,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 10
    },
    confirmButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
};

export default class ProductPlanCard extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        onConfirm: PropTypes.func.isRequired,
        productPlan: PropTypes.object.isRequired
    };

    static defaultProps = {
        backgroundColor: '#ffffff'
    };

    render () {
        const {backgroundColor, onConfirm, productPlan} = this.props;
        //TODO ask to PO for features to put on Zuora
        const features = [];
        const pricing = getDefaultPricing(productPlan);
        return (
            <div style={styles.container}>
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
                    <HorizontalLine color={'#ffffff'} width={100} />
                    <div style={styles.price}>
                        {pricing.currency}{pricing.price}
                    </div>
                    <div style={styles.frequency}>
                        {`(${productPlan.Frequency__c})`}
                    </div>
                </div>
                <div style={styles.bottom}>
                    {features.map((f, i) => (
                        <div key={i}>
                            <Glyphicon
                                glyph='glyphicon glyphicon-ok-circle'
                                style={{
                                    color: backgroundColor,
                                    fontSize: 30,
                                    paddingRight: 10
                                }}
                            />
                            {f}
                        </div>
                    ))}
                </div>
                <div style={styles.confirmButtonContainer} >
                    <Button
                        backgroundColor={'#d8d8d8'}
                        onClick={onConfirm}
                        text={'INIZIA ORA!'}
                        textColor={'#000000'}
                    />
                </div>
            </div>
        );
    }
}


