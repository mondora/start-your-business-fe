import React, {Component, PropTypes} from 'react';

import ChoosablePlanCard from 'components/ChoosablePlanCard';
import ProductPlanCard from 'components/ProductPlanCard';

const styles = {
    cardsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%'
    }
};

const cardColors = [
    '#20bda9',
    '#f69232'
];

export default class ProductPlanCardList extends Component {
    static propTypes = {
        chooseMode: PropTypes.bool,
        choosePlan: PropTypes.func,
        chosenPlanId: PropTypes.string,
        getSYBProductPlans: PropTypes.func.isRequired,
        productPlans: PropTypes.arrayOf(PropTypes.object).isRequired
    };

    componentDidMount () {
        this.props.getSYBProductPlans();
    }

    renderPlanCardList () {
        return this.props.productPlans.map((productPlan, index) => {
            return this.props.chooseMode ? (
                <ChoosablePlanCard
                    key={productPlan.id}
                    isSelected={this.props.chosenPlanId === productPlan.id}
                    onSelect={() => this.props.choosePlan(productPlan.id)}
                    productPlan={productPlan}
                />
            ) : (
                <ProductPlanCard
                    key={productPlan.id}
                    backgroundColor={cardColors[index]}
                    onConfirm={() => console.log('confirm')}
                    productPlan={productPlan}
                />
            );
        });
    }

    render () {
        return (
            <div style={styles.cardsContainer}>
                {this.renderPlanCardList()}
            </div>
        );
    }
}