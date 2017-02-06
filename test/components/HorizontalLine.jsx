import {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';

import HorizontalLine from 'components/HorizontalLine';

describe('HorizontalLine', () => {

    describe('for prop', () => {

        describe('color', () => {

            it('renders line with default color #ffffff without providing any color', () => {
                expect(
                    shallow(<HorizontalLine />)
                        .find('hr')
                        .prop('style')
                ).to.include({border: 'solid #ffffff 1px'});
            });

            it('renders line with provided color', () => {
                expect(
                    shallow(<HorizontalLine color={'#f1f1f1'} />)
                        .find('hr')
                        .prop('style')
                ).to.include({border: 'solid #f1f1f1 1px'});
            });

        });

        describe('width', () => {

            it('renders line with default size 100 without providing any width', () => {
                expect(
                    shallow(<HorizontalLine />)
                        .find('hr')
                        .prop('style')
                ).to.include({width: 100});
            });

            it('renders line with provided width', () => {
                expect(
                    shallow(<HorizontalLine width={200} />)
                        .find('hr')
                        .prop('style')
                ).to.include({width: 200});
            });
        });
    });

});
