import chai, {expect} from 'chai';
import {shallow} from 'enzyme';
import {Glyphicon} from 'react-bootstrap';
import React from 'react';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

import Button from 'components/CustomButton';
import SupplierPlanCard from 'components/SupplierPlanCard';

chai.use(sinonChai);

describe('SupplierPlanCard', () => {

    describe('for prop', () => {

        describe('name', () => {

            it('renders provided plan name in the card', () => {
                expect(
                    shallow(
                        <SupplierPlanCard
                            name='this is a name'
                            onConfirm={sinon.spy()}
                        />
                    ).html()
                ).to.contains('this is a name');
            });

        });

        describe('price', () => {

            it('renders provided plan price in the card', () => {
                expect(
                    shallow(<SupplierPlanCard price={30} onConfirm={sinon.spy()} />).html()
                ).to.contains(30);
            });

        });

        describe('topBackroundColor', () => {

            it('applies #ffffff color as default', () => {
                expect(
                    shallow(<SupplierPlanCard onConfirm={sinon.spy()} />)
                        .find('.top')
                        .prop('style')
                ).to.include({backgroundColor: '#ffffff'});
            });

            it('applies provided color at the top of the card', () => {
                expect(
                    shallow(<SupplierPlanCard backgroundColor='#F1F1F1' onConfirm={sinon.spy()} />)
                        .find('.top')
                        .prop('style')
                ).to.include({backgroundColor: '#F1F1F1'});
            });

        });

        describe('features', () => {

            const features = ['feat 1', 'feat 2', 'feat 3'];

            it('renders a glyphicon-ok-circle icon for each feature', () => {
                expect(
                    shallow(<SupplierPlanCard features={features} onConfirm={sinon.spy()} />)
                        .find(Glyphicon)
                        .findWhere(n => n.prop('glyph') === 'glyphicon glyphicon-ok-circle')
                ).to.have.length(3);
            });

            it('renders provided text for each feature', () => {
                const element = shallow(
                    <SupplierPlanCard features={features} onConfirm={sinon.spy()} />
                ).html();
                expect(element).to.contains('feat 1');
                expect(element).to.contains('feat 2');
                expect(element).to.contains('feat 3');
            });

        });

        describe('features', () => {

            const features = ['feat 1', 'feat 2', 'feat 3'];

            it('renders a glyphicon-ok-circle icon for each feature', () => {
                expect(
                    shallow(
                        <SupplierPlanCard features={features} onConfirm={sinon.spy()} />
                    )
                        .find(Glyphicon)
                        .findWhere(n => n.prop('glyph') === 'glyphicon glyphicon-ok-circle')
                ).to.have.length(3);
            });

            it('renders provided text for each feature', () => {
                const element = shallow(
                    <SupplierPlanCard features={features} onConfirm={sinon.spy()} />
                ).html();
                expect(element).to.contains('feat 1');
                expect(element).to.contains('feat 2');
                expect(element).to.contains('feat 3');
            });

        });

        describe('onConfirm', () => {

            it('calls onConfirm prop clicking on the button', () => {
                const onConfirm = sinon.spy();
                const element = shallow(<SupplierPlanCard onConfirm={onConfirm} />);
                element.find(Button).simulate('click');
                expect(onConfirm).to.have.callCount(1);
            });

        });

    });

});