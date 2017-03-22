import Radium from 'radium';
import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';

import * as colors from 'lib/colors';

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
    },
    text: {
        fontSize: '1.2em',
        lineHeight: '1.5em',
        paddingTop: 20,
        paddingBottom: 20
    }
};

class Privacy extends Component {
    render () {
        return (
            <div>
                <PageTeaser
                    pageTitle={''}
                />
                <div className='container' style={styles.rowStyle}>
                    <Row>
                        <Col xs={12} style={{padding: '10px 25px'}}>
                            <h2 style={styles.title}>{'PRIVACY POLICY:'}</h2>
                            <div style={styles.text}>
                                <h3>{'INFORMATIVA SUL TRATTAMENTO DEI DATI PERSONALI'}</h3>
                                <p>
                                    {`La presente informativa descrive il trattamento dei dati personali che TeamSystem
                                        Service S.r.l. (di seguito, "TeamSystem") effettua in qualità di titolare del trattamento in relazione all'utilizzo della
                                        Piattaforma Entova
                                        (di seguito,"Piattaforma") e all'erogazione dei servizi offerti tramite tale piattaforma (di seguito,"Dati Personali").
                                        Resta inteso che, in relazione ai dati personali importati o caricati dal Cliente/Terzo Beneficiario (di seguito
                                        "Cliente"/"Terzo Beneficiario"), nel contesto della fruizione dei servizi offerti sulla Piattaforma, TeamSystem
                                        tratta detti dati personali in qualità di responsabile del trattamento attendendosi alle istruzioni impartite dal
                                        Cliente/Terzo Beneficiario.`}
                                </p>
                                <p>
                                    {`Ai fini della presente informativa e in conformità a quanto previsto dalla normativa applicabile in materia di
                                    protezione dei dati personali si precisa che le informazioni riguardanti le persone giuridiche, gli enti e le
                                    associazioni, non ricadono nella definizione di "Dati Personali" e, pertanto, la presente informativa e richiesta di
                                    consenso si intendono resa, o avanzata, ai soli fini dell'uso dei dati personali per finalità di marketing tramite
                                    canali digitali (es. comunicazioni trasmesse a numeri fax aziendali o indirizzo email generale aziendale)`}
                                </p>
                                <p>
                                    {`La presente informativa si applica esclusivamente al trattamento dei dati personali effettuato tramite la Piattaforma
                                    e nell'ambito dell'erogazione deiservizi ivi offerti (diseguito, "Servizi"). Eventuali siti internet di terzi consultabili
                                    dagli utenti tramite link restano soggetti all' informativa sul trattamento dei dati personali fornita dal gestore del
                                    relativo sito terzo. Si invitano gli utenti a prendere visione di tali documenti prima di navigare sui siti terzi.`}
                                </p>
                                <h3>{'1. Titolare del trattamento'}</h3>
                                <p>
                                    {`Titolare autonomo del trattamento dei Dati Personali per le finalità di seguito descritte è la società TeamSystem
                                    S.r.l., iscritta presso il Registro delle Imprese del Molise, C.F. e P.IVA n. 01641790702, con sede legale in via
                                    Martiri della Repubblica Partenopea 2, 86025 – Ripalimosani (CB), telefono 0874/6056, indirizzo email:
                                    privacy@teamsystem.com.`}
                                </p>
                                <h3>{'2. Tipologia di dati'}</h3>
                                <h4><em>{'Dati di navigazione'}</em></h4>
                                <p>
                                    {`Per la consultazione delle pagine pubbliche della Piattaforma non è richiesto alcun conferimento di dati personali.
                                    Tuttavia, eventuali contatti con TeamSystem, l'invio facoltativo, esplicito e spontaneo di messaggi, di posta
                                    elettronica o tradizionale, ai loro recapiti comportano la successiva acquisizione dell'indirizzo, anche e-mail, del
                                    mittente o della relativa numerazione telefonica, necessari per rispondere alle richieste, nonché di eventuali altri
                                    dati personali inseriti nelle relative comunicazioni. Tali dati saranno utilizzati al solo fine di dar seguito alla
                                    richiesta e potranno essere comunicati a terzi solo nel caso in cui ciò sia necessario a tal fine. Tali dati sono
                                    conservati per il tempo strettamente necessario a fornire il servizio richiesto e non saranno diffusi.`}
                                </p>
                                <p>
                                    {`Inoltre, i sistemi informatici e i programmi informatici utilizzati per il funzionamento della Piattaforma raccolgono
                                    alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet (es.
                                    indirizzi IP o nomi a dominio dei computer utilizzati dagli utenti che si connettono al Sito, gli indirizzi URI -
                                    Uniform Resource Identifier - delle risorse richieste, orario della richiesta, metodo utilizzato nel sottoporre la
                                    richiesta al server, dimensione del file ottenuto in risposta, codice numerico circa lo stato della risposta resa dal
                                    server -buon fine, errore, ecc.- e altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente).
                                    Benché si tratti di informazioni che non sono raccolte per essere associate a interessati identificati, per loro natura
                                    potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, consentire di identificare gli utenti.`}
                                </p>
                                <p>
                                    {`Tali dati sono utilizzati al solo fine di ricavare informazioni statistiche non associate ad alcun dato identificativo
dell'utente sull'uso della Piattaforma e per controllarne il corretto funzionamento e vengono cancellati
immediatamente dopo l'elaborazione.`}
                                </p>
                                <h4><em>{'Dati forniti in sede di utilizzo della Piattaforma e dei Servizi'}</em></h4>
                                <p>
                                    {`In caso di utilizzo della Piattaforma e dei Servizi ivi offerti il trattamento dei Dati Personali avrà ad oggetto le
                                    operazioni, o il complesso di operazioni (quali a mero titolo esemplificativo: raccolta, registrazione,
                                    consultazione, organizzazione, conservazione, elaborazione, comunicazione, modificazione, selezione, utilizzo),
                                    concernenti i dati forniti in fase di registrazione alla Piattaforma e/o in occasione della fruizione dei Servizi:`}
                                    <br />
                                    {`a) dati identificativi e di contatto del Cliente/Terzo Beneficiario acquisiti in fase di stipulazione del
                                    contratto di erogazione dei Servizi tra cui:`}
                                    <br />
                                    <ul>
                                        <li>{`alcuni dati essenziali per l'identificazione del Cliente/Terzo Beneficiario (es. ragione sociale, P.IVA,
                                    indirizzi, email, PEC, ecc.)`}</li>
                                        <li> {`alcuni dati essenziali per la registrazione dell'account sulla Piattaforma Hub (es. username, password
                                    ed email);`}</li>
                                    </ul>
                                    {'b) dati essenziali per la gestione del contratto es. dati di fatturazione, pagamento;'}
                                    <br />
                                    {`c) dati relativi all'utilizzo dei Servizi ottenuti nel corso della fruizione dei servizi da parte del
                                    Cliente/Terzo Beneficiario (es. numero di pratiche/operazioni per tipologia di Servizio, frequenza e
                                    tipologia di errore nella generazione di fatture elettroniche, funzionalità specifiche utilizzate).`}
                                </p>
                                <p>
                                    {`s
                                        s`}
                                </p>
                                <p>
                                    {`s
                                        s`}
                                </p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Radium(Privacy);
