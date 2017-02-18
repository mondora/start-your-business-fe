import R from 'ramda';

export function getProductPlans (product) {
    return product && product.productRatePlans ? R.compose(
        R.map(sortedPlan => sortedPlan.plan),
        R.sortBy(R.prop('price')),
        R.map(plan => ({
            price: getDefaultPricing(plan).price,
            plan: plan
        }))
    )(product.productRatePlans) : [];
}

export function getDefaultPricing (productPlan) {
    if (productPlan && productPlan.productRatePlanCharges && productPlan.productRatePlanCharges.length > 0) {
        const pricing = productPlan.productRatePlanCharges[0].pricing;
        if (pricing && pricing.length > 0) {
            return pricing[0];
        }
    }
    return {};
}

export function allowOwnDomain (productPlan) {
    return productPlan.allowOwnDomain__c === 'Yes';
}


export function isActive (productPlan) {
    return productPlan.status === 'Active';
}