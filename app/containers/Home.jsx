import React, {Component} from 'react';

import Button from 'components/CustomButton';
import Header from 'components/Header';
import HorizontalLine from 'components/HorizontalLine';
import StepCard from 'components/StepCard';
import SupplierPlanCard from 'components/SupplierPlanCard';

const styles = {
    part1Container: {
        backgroundImage: 'url(\'./_assets/images/home1.jpeg\')',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    part2Container: {
        backgroundColor: '#ffffff',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    cardsContainer: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%'
    },
    h1: {
        color: '#ffffff',
        fontSize: 50
    },
    header: {

    }
};

export default class Home extends Component {

    render () {
        return (
            <div style={{backgroundColor: '#eae9ed'}}>
                <div style={styles.part1Container}>
                    <Header />
                    <div style={{color: '#ffffff', fontSize: 50}}>{'INIZIA ORA'}</div>
                    <div style={{color: '#ffffff', fontSize: 45}}>{'IL TUO NUOVO BUSINESS'}</div>
                    <div style={{color: '#ffffff', fontSize: 20, width: '50%'}}>
                        {
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut`
                        }
                    </div>
                    <HorizontalLine color={'#20bda9'} width={100} />
                    <Button
                        backgroundColor={'#ffffff'}
                        onClick={() => console.log('inizia ora')}
                        text={'INIZIA ORA!'}
                        textColor={'#20bda9'}
                    />
                </div>
                <div style={styles.part2Container}>
                    <div style={{color: '#d8d8d8', fontSize: 20}}>{'PROCESSO'}</div>
                    <div style={{color: '#000000', fontSize: 45}}>{'COME FUNZIONA?'}</div>
                    <div style={{color: '#000000', fontSize: 20, width: '50%'}}>
                        {
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut`
                        }
                    </div>
                    <HorizontalLine color={'#20bda9'} width={100} />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                width: 200
                            }}
                        >
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
                        </div>
                        <img src='./_assets/images/iPhone.png' style={{height: 400, width: 350}} />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                width: 200
                            }}
                        >
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
                        </div>
                    </div>
                </div>
                <div style={styles.cardsContainer}>
                    <SupplierPlanCard
                        backgroundColor='#20bda9'
                        features={['feat 1', 'feat 2']}
                        name='STANDARD'
                        onConfirm={() => console.log('confirm')}
                        price={20}
                    />
                    <SupplierPlanCard
                        backgroundColor='#f69232'
                        features={['feat 1', 'feat 2', 'feat 3']}
                        name='PROFESIONAL'
                        onConfirm={() => console.log('confirm')}
                        price={40}
                    />
                </div>
                <div style={{height: 300}} />
            </div>
        );
    }

}
