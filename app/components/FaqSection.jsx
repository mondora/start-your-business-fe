import Radium from 'radium';
import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';

import * as colors from 'lib/colors';
import HomeSectionTitle from 'components/HomeSectionTitle';

const styles = {
    faqWrp: {
        padding: '8% 0',
        backgroundColor: colors.white
    },
    faq: {
        minHeight: '230px',
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 30,
        '@media screen and (max-width: 767px)': {
            minHeight: 'auto',
            paddingLeft: 0,
            paddingTop: 20,
            paddingBottom: 20,
            borderBottom: `1px solid ${colors.lightGrey}`
        }
    },
    question: {
        color: colors.darkGrey,
        fontSize: 'calc(18px + .25vw)',
        lineHeight: 'calc(18px + .5vw)',
        fontWeight: 800,
        textAlign: 'left',
        '@media screen and (max-width: 767px)': {
            textAlign: 'center'
        }
    },
    answer: {
        color: colors.darkGrey,
        fontSize: 'calc(14px + .25vw)',
        lineHeight: 'calc(15px + .5vw)',
        textAlign: 'left',
        '@media screen and (max-width: 767px)': {
            textAlign: 'center'
        }
    }
};

class FaqSection extends Component {

    getFaq () {
        return [
            {
                question: 'Perchè mettere un business online a sottoscrizione?',
                answer:
                    `I vantaggi di un modello di business a sottoscrizione sono molti. Potrai coltivare
                    rapporti duraturi con i tuoi clienti, che sarai in grado di seguire passo passo per rispondere al meglio alle loro esigenze.`
            },
            {
                question: 'Website aziendale e template personalizzato: come funziona?',
                answer:
                    `Se hai già un sito web aziendale puoi facilmente aggiungere un link al template che hai creato.
                    Se scegli il piano Professional, puoi creare il tuo dominio specifico per le sottoscrizioni. `
            },
            {
                question: 'Come posso modificare i miei dati?',
                answer:
                    `Quando crei e salvi il tuo primo template ti chiederemo di creare un tuo account personale.
                    Potrai accedere al tuo account su entova.it e modificare i tuoi dati in qualsiasi momento.`
            },
            {
                question: 'Quali sono i vantaggi dell’abbonamento professional?',
                answer:
                    `Con l’abbonamento Professional potrai accedere ad una selezione più ampia di templates personalizzabili.
                    Inoltre potrai creare il tuo dominio e il tuo indirizzo email, oltre ad avere assistenza con LiveChat.`
            }
        ];
    }

    render () {
        return (
            <div style={styles.faqWrp}>
                <div className='container' style={{textAlign: 'center'}}>
                    <HomeSectionTitle
                        subtitle={'INFORMAZIONI'}
                        title={'DOMANDE FREQUENTI'}
                        description={
                            `Hai bisogno di aiuto o desideri ricevere maggiori
                            informazioni su entova.it e i suoi servizi?
                            Ecco le risposte alle domande più frequenti`
                        }
                    />
                    <Row>
                        {this.getFaq().map((singleFaq, index) =>
                            <Col key={index} xs={12} sm={6}>
                                <div style={styles.faq}>
                                    <h4 style={styles.question}>{singleFaq.question}</h4>
                                    <p style={styles.answer}>{singleFaq.answer}</p>
                                </div>
                            </Col>
                        )}
                    </Row>
                </div>
            </div>
        );
    }
}

export default Radium(FaqSection);
