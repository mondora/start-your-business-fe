import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import Radium from 'radium';

import * as colors from 'lib/colors';
import HomeSectionTitle from 'components/HomeSectionTitle';
import StepCard from 'components/StepCard';

const styles = {
    processWrp: {
        padding: '8% 0',
        backgroundColor: colors.white
    },
    imgResponsive: {
        display: 'block',
        height: 'auto',
        maxWidth: '90%',
        margin: '40px auto'
    }
};

class TemplateSection extends Component {
    render () {
        return (
            <div style={styles.processWrp}>
                <div className='container' style={{textAlign: 'center'}}>
                    <HomeSectionTitle
                        subtitle={'ENTOVA'}
                        title={'COME FUNZIONA'}
                        description={
                            `Entova ti permette di creare un business online in
                            pochi minuti e di vendere i tuoi prodotti o servizi
                            tramite abbonamento`
                        }
                    />
                    <Row>
                        <Col xs={12} sm={4}>
                            <StepCard
                                number={1}
                                text={`crea il tuo account su Entova.it per accedere
                                    ai template e mettere online il tuo business`}
                                title={'REGISTRATI'}
                            />
                            <StepCard
                                number={2}
                                text={`e personalizzalo come vuoi tu, aggiungendo
                                    logo, immagini e testo. Scegli le sottoscrizioni -
                                    con cui desideri vendere il tuo prodotto o servizio`}
                                title={'SCEGLI UN TEMPLATE'}
                            />
                        </Col>
                        <Col xs={12} sm={4} smPush={4}>
                            <StepCard
                                number={3}
                                text={`con cui desideri vendere il tuo prodotto
                                    o servizio`}
                                title={'SCEGLI LE SOTTOSCRIZIONI'}
                            />
                            <StepCard
                                number={4}
                                text={`metti subito online il tuo business e
                                    inizia a guadagnare!`}
                                title={'GO LIVE!'}
                            />
                        </Col>
                        <Col xs={12} sm={4} smPull={4}>
                            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                <img src='/_assets/images/home/iPhone.png' style={styles.imgResponsive} />
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Radium(TemplateSection);
