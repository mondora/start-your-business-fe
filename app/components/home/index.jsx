import React, {Component} from 'react';

const styles = {
    part1Container: {
        backgroundImage: 'url(\'./_assets/images/home1.jpeg\')',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

};

export default class Home extends Component {

    render () {
        return (
            <div style={styles.part1Container}>
                <div style={{color: '#FFF', fontSize: 50}}>{'INIZIA ORA'}</div>
                <div style={{color: '#FFF', fontSize: 45}}>{'IL TUO NUOVO BUSINESS'}</div>
            </div>
        )
    }
}
