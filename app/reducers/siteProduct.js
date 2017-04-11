export const initialPlanInfo = (type, features, price, frequency) => ({
    type,
    features,
    price,
    frequency,
    imagePath: null
});

const initialState = {
    productPlans: [
        initialPlanInfo(
            'CASSETTINA PICCOLA',
            ['Adatta per un consumo mensile di una persona', 'Assortimento: verdura mista (frutta a richiesta)'],
            '35',
            'Monthly'
        ),
        initialPlanInfo(
            'CASSETTINA MEDIA',
            ['Adatta per un consumo mensile di 2/3 persone', 'Assortimento: verdura mista (frutta a richiesta)'],
            '45',
            'Monthly'
        ),
        initialPlanInfo(
            'CASSETTINA GRANDE',
            ['Adatta per un consumo mensile di 4/5 persone', 'Assortimento: verdura mista (frutta a richiesta)'],
            '45',
            'Monthly'
        )
    ]
};

export default function siteProduct (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}