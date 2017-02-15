import chai, {expect} from 'chai';
import {shallow, mount} from 'enzyme';
// import {Glyphicon} from 'react-bootstrap';
import React from 'react';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import Button from 'components/CustomButton';
import ProductPlanCard from 'components/ProductPlanCard';

chai.use(sinonChai);

const productPlan = {
    id: '2c92c0f859d9576e0159f8709cc3640a',
    status: 'Active',
    name: 'this is a name',
    description: 'Se sottoscrivi il piano STANDARD non potrai modificare l\'URL del tuo dominio:',
    effectiveStartDate: '2017-02-01',
    effectiveEndDate: '2020-01-30',
    allowOwnDomain__c: 'No',
    PromotionCode__c: null,
    OperatingSystem__c: null,
    Region__c: 'EU',
    Frequency__c: 'Annual',
    productRatePlanCharges: [
        {
            id: '2c92c0f959d961e10159f874844e5cd9',
            name: 'Basic',
            type: 'Recurring',
            model: 'FlatFee',
            uom: null,
            pricingSummary: [
                'EUR30'
            ],
            pricing: [
                {
                    currency: 'EUR',
                    price: 30,
                    tiers: null,
                    includedUnits: null,
                    overagePrice: null,
                    discountPercentage: null,
                    discountAmount: null
                }
            ]
        }
    ]
};

describe('ProductPlanCard', () => {

    describe('for prop', () => {

        describe('name', () => {

            it('renders provided plan name in the card', () => {
                expect(
                    shallow(
                        <ProductPlanCard
                            productPlan={productPlan}
                            onConfirm={sinon.spy()}
                        />
                    ).html()
                ).to.contains('this is a name');
            });

        });

        describe('price', () => {

            it('renders provided plan price in the card', () => {
                expect(
                    shallow(<ProductPlanCard productPlan={productPlan} onConfirm={sinon.spy()} />).html()
                ).to.contains(30);
            });

        });

        describe('topBackgroundColor', () => {

            it('applies #ffffff color as default', () => {
                expect(
                    shallow(<ProductPlanCard productPlan={productPlan} onConfirm={sinon.spy()} />)
                        .find('.top')
                        .prop('style')
                ).to.include({backgroundColor: '#ffffff'});
            });

            it('applies provided color at the top of the card', () => {
                expect(
                    shallow(<ProductPlanCard productPlan={productPlan} backgroundColor='#F1F1F1' onConfirm={sinon.spy()} />)
                        .find('.top')
                        .prop('style')
                ).to.include({backgroundColor: '#F1F1F1'});
            });

        });

        //TODO uncomment when Zuora structure for features is defined
        // describe('features', () => {
        //
        //     const features = ['feat 1', 'feat 2', 'feat 3'];
        //
        //     it('renders a glyphicon-ok-circle icon for each feature', () => {
        //         expect(
        //             shallow(<ProductPlanCard features={features} onConfirm={sinon.spy()} />)
        //                 .find(Glyphicon)
        //                 .findWhere(n => n.prop('glyph') === 'glyphicon glyphicon-ok-circle')
        //         ).to.have.length(3);
        //     });
        //
        //     it('renders provided text for each feature', () => {
        //         const element = shallow(
        //             <ProductPlanCard features={features} onConfirm={sinon.spy()} />
        //         ).html();
        //         expect(element).to.contains('feat 1');
        //         expect(element).to.contains('feat 2');
        //         expect(element).to.contains('feat 3');
        //     });
        //
        // });
        //
        // describe('features', () => {
        //
        //     const features = ['feat 1', 'feat 2', 'feat 3'];
        //
        //     it('renders a glyphicon-ok-circle icon for each feature', () => {
        //         expect(
        //             shallow(
        //                 <ProductPlanCard features={features} onConfirm={sinon.spy()} />
        //             )
        //                 .find(Glyphicon)
        //                 .findWhere(n => n.prop('glyph') === 'glyphicon glyphicon-ok-circle')
        //         ).to.have.length(3);
        //     });
        //
        //     it('renders provided text for each feature', () => {
        //         const element = shallow(
        //             <ProductPlanCard features={features} onConfirm={sinon.spy()} />
        //         ).html();
        //         expect(element).to.contains('feat 1');
        //         expect(element).to.contains('feat 2');
        //         expect(element).to.contains('feat 3');
        //     });
        //
        // });

        describe('onConfirm', () => {

            it('calls onConfirm prop clicking on the button', () => {
                const onConfirm = sinon.spy();
                const element = mount(<ProductPlanCard productPlan={productPlan} onConfirm={onConfirm} />);
                element.find(Button).simulate('click');
                expect(onConfirm).to.have.callCount(1);
            });

        });

    });

});
