import React, {Component, PropTypes} from 'react';
import {Glyphicon} from 'react-bootstrap';
import * as colors from 'lib/colors';
import {Col} from 'react-bootstrap';

import Button from 'components/CustomButton';
import HorizontalLine from 'components/HorizontalLine';

import {getDefaultPricing} from 'lib/zuora-products-utils';

const styles = {
    container: {
        backgroundColor: colors.white,
        maxWidth: 370,
        margin: '0 auto',
        borderRadius: 15
    },
    name: {
        color: colors.white,
        fontWeight: 800,
        fontSize: 'calc(18px + .5vw)',
    },
    price: {
        color: colors.white,
        fontSize: 'calc(35px + .5vw)',
        fontWeight: 800
    },
    frequency: {
        color: colors.white,
        fontSize: 'calc(14px + .5vw)',
        fontWeight: 800
    },
    top: {
        borderRadius: '10px 10px 0 0',
        height: 200,
        width: '100%',
        padding: 10
    },
    bottom: {
        height: 150,
        padding: 10
    },
    confirmButtonContainer: {
        padding: '20px 0'
    }
};

export default class ProductPlanCard extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        onConfirm: PropTypes.func.isRequired,
        productPlan: PropTypes.object.isRequired
    };

    static defaultProps = {
        backgroundColor: colors.white
    };

    render () {
        const {backgroundColor, onConfirm, productPlan} = this.props;
        //TODO ask to PO for features to put on Zuora
        const features = [];
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
                        <div style={styles.name}>
                            {productPlan.name}
                        </div>
                        <HorizontalLine color={colors.white} width={100} />
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
                            backgroundColor={colors.lightGrey}
                            onClick={onConfirm}
                            text={'INIZIA ORA!'}
                            textColor={colors.darkGrey}
                        />
                    </div>
                </div>
            </Col>
        );
    }
}
