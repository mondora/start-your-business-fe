import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {choosePlan, getSYBProductPlans} from 'actions/products';

import Button from 'components/CustomButton';
import ProductPlanCardList from 'components/ProductPlanCardList';

const styles = {
    part1Container: {
        backgroundImage: 'url(\'./_assets/images/home1.jpeg\')',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
};

class ChoosePlanContainer extends Component {
    static propTypes = {
        choosePlan: PropTypes.func.isRequired,
        getSYBProductPlans: PropTypes.func.isRequired,
        products: PropTypes.object
    };


    render () {
        const {chosenPlanId, productPlans} = this.props.products;
        return (
            <div style={{backgroundColor: '#eae9ed'}}>
                <div style={styles.part1Container}>
                    {'1. Seleziona uno dei due piani:'}
                    <ProductPlanCardList
                        chooseMode={true}
                        choosePlan={this.props.choosePlan}
                        chosenPlanId={chosenPlanId}
                        getSYBProductPlans={this.props.getSYBProductPlans}
                        productPlans={productPlans}
                    />
                </div>
                <Button
                    backgroundColor={'#708090'}
                    text={'< INDIETRO'}
                />
                <Button
                    backgroundColor={'#708090'}
                    text={'ACQUISTA'}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        choosePlan: bindActionCreators(choosePlan, dispatch),
        getSYBProductPlans: bindActionCreators(getSYBProductPlans, dispatch)
    };
};


const ChoosePlan = connect(mapStateToProps, mapDispatchToProps)(ChoosePlanContainer);

export default ChoosePlan;