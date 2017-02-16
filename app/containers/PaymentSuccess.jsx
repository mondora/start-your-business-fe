import Radium from 'radium';
import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import * as colors from 'lib/colors';

import Button from 'components/CustomButton';
import PageTeaser from 'components/PageTeaser';

const styles = {
    rowStyle: {
        marginBottom: '60px',
        '@media screen and (min-width: 767px)': {
            margin: '20px auto 60px auto'
        }
    },
    title: {
        margin: 0,
        color: colors.primaryColor,
        fontWeight: 800,
        fontSize: 'calc(30px + 1vw)',
        lineHeight: 'calc(30px + 1vw)'
    }
};

class PaymentSuccess extends Component {

    render () {
        return (
            <div>
                <PageTeaser
                    pageTitle={'COMPLIMENTI!'}
                />
                <div className='container' style={styles.rowStyle}>
                    <h2 style={styles.title}>
                        {'PAGAMENTO ANDATO A BUON FINE'}
                    </h2>
                    <Button
                        backgroundColor={colors.darkGrey}
                        onClick={() => browserHistory.push('/')}
                        text='VAI ALL’AREA UTENTI>'
                    />
                </div>
            </div>
        );
    }
}

export default (Radium(PaymentSuccess));
