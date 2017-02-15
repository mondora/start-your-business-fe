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
        paddingTop: 30,
        paddingBottom: 30,
        paddingLeft: 30,
        '@media screen and (max-width: 767px)': {
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
                question: 'Quali sono le features principali?',
                answer:
                    `Lorem ipsum Do commodo in proident enim in dolor
                    cupidatat adipisicing dolore officia nisi aliqua incididunt
                    Ut veniam lorem ipsum Consectetur ut in in eu do.`
            },
            {
                question: 'Come faccio a presonalizzare i template?',
                answer:
                    `Lorem ipsum Do commodo in proident enim in dolor
                    cupidatat adipisicing dolore officia nisi aliqua incididunt
                    Ut veniam lorem ipsum Consectetur ut in in eu do.`
            },
            {
                question: 'Quali features non sono comprese nella versione standard?',
                answer:
                    `Lorem ipsum Do commodo in proident enim in dolor
                    cupidatat adipisicing dolore officia nisi aliqua incididunt
                    Ut veniam lorem ipsum Consectetur ut in in eu do.`
            },
            {
                question: 'Posso modificare il piano da Standard a Premium in un secondo momento?',
                answer:
                    `Lorem ipsum Do commodo in proident enim in dolor
                    cupidatat adipisicing dolore officia nisi aliqua incididunt
                    Ut veniam lorem ipsum Consectetur ut in in eu do.`
            }
        ];
    }

    render () {
        return (
            <div style={styles.faqWrp}>
                <div className='container' style={{textAlign: 'center'}}>
                    <HomeSectionTitle
                        subtitle={'FAQ'}
                        title={'DOMANDE E RISPOSTE'}
                        description={
                            `Lorem ipsum Do commodo in proident enim in dolor
                            sed do eiusmod tempor incididunt ut labore et dolore.
                            Ut veniam lorem ipsum Consectetur ut in in eu do.`
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
