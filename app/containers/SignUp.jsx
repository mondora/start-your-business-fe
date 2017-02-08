import React, {Component} from 'react';

import SignUpForm from 'components/SignUpForm';

const styles = {
    part1Container: {
        backgroundImage: 'url(\'./_assets/images/home1.jpeg\')',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
};

export default class SignUp extends Component {

    render () {
        return (
            <div style={{backgroundColor: '#eae9ed'}}>
                <div style={styles.part1Container}>
                    <div style={{color: '#ffffff', fontSize: 50}}>{'REGISTRATI'}</div>
                    <SignUpForm />
                </div>
                <div style={{height: 300}} />
            </div>
        );
    }

}
