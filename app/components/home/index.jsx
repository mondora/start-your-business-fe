import React, {Component} from 'react';

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
    }
};

export default class Home extends Component {

    render () {
        return (
            <div style={{backgroundColor: '#eae9ed'}}>
                <div style={styles.part1Container}>
                    <div style={{color: '#FFF', fontSize: 50}}>{'INIZIA ORA'}</div>
                    <div style={{color: '#FFF', fontSize: 45}}>{'IL TUO NUOVO BUSINESS'}</div>
                </div>
                <div style={styles.cardsContainer}>
                    <SupplierPlanCard
                        backgroundColor='#20BDA9'
                        features={['feat 1', 'feat 2']}
                        name='STANDARD'
                        onConfirm={() => console.log('confirm')}
                        price={20}
                    />
                    <SupplierPlanCard
                        backgroundColor='#F69232'
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
