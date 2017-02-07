import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';

import StepCard from 'components/StepCard';

describe('StepCard', () => {

    describe('for prop', () => {

        describe('number', () => {

            it('renders line with provided color', () => {
                expect(
                    shallow(<StepCard number={1} />)
                        .find('.number')
                        .html()
                ).to.contains(1);
            });

        });

        describe('text', () => {

            it('renders line with provided width', () => {
                expect(
                    shallow(<StepCard text={'this is a text'} />)
                        .find('.text')
                        .html()
                ).to.contains('this is a text');
            });
        });

        describe('title', () => {

            it('renders line with provided width', () => {
                expect(
                    shallow(<StepCard title={'this is a title'} />)
                        .find('.title')
                        .html()
                ).to.contains('this is a title');
            });
        });

    });

});
