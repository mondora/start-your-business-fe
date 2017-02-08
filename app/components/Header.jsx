import React, {Component} from 'react';

import LoginButton from 'components/LoginButton';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        position: 'absolute',
        top: 10
    },
    text: {
        color: '#ffffff',
        fontSize: 50
    },
    loginContainer: {
        display: 'flex',
        flexdirection: 'row',
        alignItems: 'center'
    }
};

export default class Header extends Component {

    render () {
        return (
            <div style={styles.container} >
                <div style={styles.text}>{'logo'}</div>
                <div style={styles.loginContainer}>
                    <span
                        style={{color: '#ffffff', fontSize: 20, paddingRight: 10}}
                    >
                        {'LOGIN'}
                    </span>
                    <LoginButton
                        backgroundColor={'#20bda9'}
                    />
                </div>
            </div>
        );
    }
}


