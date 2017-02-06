import React, {Component} from 'react';

import Header from 'components/Header';
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
