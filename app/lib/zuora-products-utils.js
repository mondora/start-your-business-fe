export function getProductPlans (product) {
    return product && product.productRatePlans ? product.productRatePlans : [];
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
