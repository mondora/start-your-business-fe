import Radium from 'radium';
import React, {Component} from 'react';

const styles = {
    footerPayment: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '10px 0',
        '@media screen and (max-width: 767px)': {
            justifyContent: 'flex-start'
        }
    },
    imgPayment: {
        display: 'inline-block',
        maxWidth: '50px',
        height: 'auto',
        marginRight: 10,
        marginBottom: 5
    }
};

class FooterPayment extends Component {
    getPaymentIcon () {
        return [
            {
                path: 'payment01.png'
            },
            {
                path: 'payment02.png'
            },
            {
                path: 'payment03.png'
            },
            {
                path: 'payment04.png'
            }
        ];
    }

    render () {
        return (
            <div style={styles.footerPayment}>
                {this.getPaymentIcon().map((imgPath, index) =>
                    <img key={index} src={`/_assets/images/template_01/${imgPath.path}`} style={styles.imgPayment} />
                )}
            </div>
        );
    }
}

export default Radium(FooterPayment);
