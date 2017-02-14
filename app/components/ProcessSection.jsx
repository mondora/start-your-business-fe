import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import Radium from 'radium';

import * as colors from 'lib/colors';
import HomeSectionTitle from 'components/HomeSectionTitle';
import StepCard from 'components/StepCard';

const styles = {
    processWrp: {
        padding: '8% 0',
        backgroundColor: colors.white
    },
    imgResponsive: {
        display: 'block',
        height: 'auto',
        maxWidth: '90%',
        margin: '40px auto'
    }
};

class TemplateSection extends Component {
    render () {
        return (
            <div style={styles.processWrp}>
                <div className='container' style={{textAlign: 'center'}}>
                    <HomeSectionTitle
                        subtitle={'PROCESSO'}
                        title={'COME FUNZIONA?'}
                        description={
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam.`
                        }
                    />
                    <Row>
                        <Col xs={12} sm={4}>
                            <StepCard
                                number={1}
                                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'}
                                title={'REGISTRATI'}
                            />
                            <StepCard
                                number={2}
                                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'}
                                title={'SCEGLI UN TEMPLATE'}
                            />
                        </Col>
                        <Col xs={12} sm={4} smPush={4}>
                            <StepCard
                                number={3}
                                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'}
                                title={'INSERISCI LE SOTTOSCRIZIONI'}
                            />
                            <StepCard
                                number={4}
                                text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'}
                                title={'METTI ONLINE IL TUO BUSINESS'}
                            />
                        </Col>
                        <Col xs={12} sm={4} smPull={4}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <img src='./_assets/images/home/iPhone.png' style={styles.imgResponsive} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Radium(TemplateSection);
