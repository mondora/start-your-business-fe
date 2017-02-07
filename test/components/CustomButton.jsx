import chai, {expect} from 'chai';
import React from 'react';
import {shallow} from 'enzyme';
import {Button} from 'react-bootstrap';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

import CustomButton from 'components/CustomButton';

chai.use(sinonChai);

describe('Custom button', () => {

    describe('for prop', () => {

        describe('backgroundColor', () => {

            it('renders button with default color #ffffff without providing any color', () => {
                expect(
                    shallow(<CustomButton onClick={sinon.spy()} />)
                        .find(Button)
                        .prop('style')
                ).to.include({backgroundColor: '#ffffff', borderColor: '#ffffff'});
            });

            it('renders button with provided color', () => {
                expect(
                    shallow(<CustomButton backgroundColor={'#f1f1f1'} onClick={sinon.spy()} />)
                        .find(Button)
                        .prop('style')
                ).to.include({backgroundColor: '#f1f1f1', borderColor: '#f1f1f1'});
            });

        });

        describe('onClick', () => {

            it('calls provided function', () => {
                const onClick = sinon.spy();
                const element = shallow(<CustomButton onClick={onClick} />);
                element.find(Button).simulate('click');
                expect(onClick).to.have.callCount(1);
            });

        });

        describe('text', () => {

            it('renders provided text', () => {
                expect(
                    shallow(
                        <CustomButton onClick={sinon.spy()} text={'this is the text'} />
                    ).html()
                ).to.contains('this is the text');
            });

        });

        describe('textColor', () => {

            it('renders text with default color #ffffff without providing any color', () => {
                expect(
                    shallow(<CustomButton onClick={sinon.spy()} />)
                        .find(Button)
                        .prop('style')
                ).to.include({color: '#ffffff'});
            });

            it('renders text with provided color', () => {
                expect(
                    shallow(<CustomButton onClick={sinon.spy()} textColor={'#f2f2f2'} />)
                        .find(Button)
                        .prop('style')
                ).to.include({color: '#f2f2f2'});
            });
        });
    });

});
