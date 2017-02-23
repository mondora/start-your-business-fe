import React, {Component, PropTypes} from 'react';
import {Col} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';

import * as colors from 'lib/colors';
import {getDefaultPricing, isActive} from 'lib/zuora-products-utils';

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
        height: 220,
        width: '100%',
        padding: 10
    },
    bottom: {
        height: 200,
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

    renderPlanStatus () {
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
                        {!isActive(productPlan) ? this.renderPlanStatus() : null}
                        <div style={styles.name}>
                            {productPlan.name}
                        </div>
                        <HorizontalLine color={colors.white} width={50} />
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
