import R from 'ramda';

const currencies = {
    'EUR': '€ '
};

export const frequencies = {
    'Annual': 'annui',
    'Monthly': 'mensili',
    'Quarterly': 'trimestrali'
};

export const frequenciesOptions = R.map(key => ({
    value: key,
    label: frequencies[key]
}), R.keys(frequencies));

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

export function getPlanFeatures (productPlan) {
    let features = [];
    if (productPlan) {
        for (let i = 1; i < 5; i++) {
            const feature = productPlan[`feature${i}__c`];
            if (feature) {
                features.push(feature);
            }
        }
    }
    return features;
}

export function getPlanFrequency (productPlan) {
    const freq = productPlan.Frequency__c;
    return frequencies[freq] ? frequencies[freq] : freq;
}

export function getDefaultPricing (productPlan) {
    if (productPlan && productPlan.productRatePlanCharges && productPlan.productRatePlanCharges.length > 0) {
        const pricing = productPlan.productRatePlanCharges[0].pricing;
        if (pricing && pricing.length > 0) {
            let price = pricing[0];
            price.currencySymbol = currencies[price.currency];
            return price;
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

export function normalizeSubscriptions (subscriptions) {
    let productPlans = [];
    for (let i = 1; i < 4; i++) {
        productPlans.push({
            description: subscriptions[`subscriptionType${i}`],
            frequency: subscriptions[`subscriptionFrequency${i}`],
            price: subscriptions[`subscriptionPrice${i}`],
            features: [
                subscriptions[`subscriptionFeature${i}a`],
                subscriptions[`subscriptionFeature${i}b`]
            ]
        });
    }
    return productPlans;
}
