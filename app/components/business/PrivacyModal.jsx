import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';

import * as colors from 'lib/colors';

const styles = {
    title: {
        color: colors.black,
        fontSize: '1.6em',
        lineHeight: '1em',
        fontWeight: 700,
        paddingTop: 10
    },
    text: {
        fontSize: '1.1em',
        lineHeight: '1.5em',
        paddingBottom: 30,
        color: colors.templateGreyText
    }
};

export default class PrivacyModal extends Component {
    static propTypes = {
        onClose: PropTypes.func,
        show: PropTypes.bool
    };

    closeModal () {
        this.props.onClose();
    }

    render () {
        return (
            <div>
                <Modal show={this.props.show} bsSize='large' onHide={this.closeModal.bind(this)}>
                    <Modal.Header closeButton={true} style={{border: 0}}>
                        <Modal.Title>
                            <p style={styles.title}>{'PRIVACY POLICY:'}</p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={styles.text}>
                            <p>
                                {`In questa pagina si descrivono le modalità di gestione del sito in riferimento
                                al trattamento dei dati personali degli utenti che lo consultano.
                                La presente pagina contiene, dunque, l’informativa resa ai sensi dell’art.
                                13 del D. Lgs. 196/2003 – Codice in materia di protezione dei dati personali -
                                a coloro che interagiscono con i servizi web di questo sito.
                                La semplice consultazione di questo sito, così come la registrazione nello stesso,
                                infatti, potranno comportare la registrazione, l’utilizzo, la cancellazione e,
                                più genericamente, il trattamento di dati personali relativi ad utenti identificati o identificabili.`}
                            </p>
                            <b>{'CONFERIMENTO DEI DATI E CONSENSO AL TRATTAMENTO'}</b>
                            <p>
                                {`Per “trattamento” dei dati personali si intende qualsiasi tipo di operazione di raccolta,
                                registrazione, conservazione, modificazione, comunicazione, cancellazione e diffusione
                                di dati personali. I sistemi informatici e le procedure software preposte al funzionamento
                                di questo sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la
                                cui trasmissione è implicita nell’uso dei protocolli di comunicazione di internet.
                                Di conseguenza, il mero accesso al sito implica l’acquisizione da parte del gestore
                                di informazioni e dati che riguardano l’utente. Inoltre, la registrazione nel sito,
                                facoltativa e volontaria, così come l’invio altrettanto facoltativo e volontario di posta
                                elettronica agli indirizzi indicati su questo sito, comportano l’acquisizione dei dati personali
                                dell’utente registrato, quali, a titolo meramente esemplificativo, l’indirizzo di posta elettronica.
                                L’utente è chiaramente libero di scegliere se fornire i propri dati personali, inserendoli negli
                                appositi moduli per la registrazione. Il mancato conferimento dei dati o il diniego del consenso al
                                loro trattamento degli stessi può comportare l’impossibilità di ottenere la registrazione e, quindi,
                                il servizio richiesto dall’utente.`}
                            </p>
                            <b>{'FINALITÁ DEL TRATTAMENTO DEI DATI'}</b>
                            <p>
                                {`Per tutti gli utenti del sito: I dati personali relativi agli utenti del sito potranno essere
                                utilizzati al fine di ricavare informazioni statistiche anonime sull’uso del sito,
                                per controllare il corretto funzionamento dello stesso e per l’accertamento di eventuali
                                responsabilità in caso di illeciti commessi a danno del sito, del Titolare o di terzi.
                                Con riferimento agli utenti che effettuano la registrazione nel sito Oltre che per le finalità
                                sopra descritte, i dati relativi agli utenti che effettuano la registrazione nel sito saranno
                                trattati al fine di:
                                1) rendere possibile l’accesso e la navigazione nel sito;
                                2) fornire all’utente i servizi web offerti dal sito;
                                3) per esigenze di monitoraggio dell’andamento delle relazioni con i Clienti
                                4) per finalità di marketing e di invio di materiale pubblicitario;`}
                            </p>
                            <b>{'COMUNICAZIONE E DIFFUSIONE DEI DATI'}</b>
                            <p>
                                {`I dati personali degli utenti "registrati" potranno essere comunicati a soggetti terzi che forniscono
                                i beni/servizi disponibili nel sito, a terzi che prestano attività di servizio relativo agli strumenti
                                informatici, compreso il presente sito, nonché a terzi che svolgono attività di analisi dei dati
                                a fini statistici o attività di trasporto/spedizione; comunque, entro il limite delle finalità
                                del trattamento sopra descritte. Tale comunicazione potrà essere effettuata sia verso soggetti
                                stanziati sul territorio nazionale, sia verso soggetti stanziati all’estero in paesi appartenenti
                                all’Unione Europea o estranei alla stessa. I dati potranno, inoltre, essere comunicati a soggetti
                                terzi incaricati della manutenzione del sito da parte del Titolare e sotto la sua vigilanza.
                                Nessun dato personale acquisito verrà diffuso.`}
                            </p>
                            <b>{'MODALITÁ DEL TRATTAMENTO'}</b>
                            <p>
                                {`I dati personali sono trattati con strumenti automatizzati per il tempo strettamente necessario
                                a conseguire gli scopi per cui sono stati raccolti. Specifiche misure di sicurezza sono osservate
                                per prevenire la perdita dei dati, usi illeciti o non corretti ed accessi non autorizzati,
                                come previsto dalla legge. Infine, i trattamenti di dati personali connessi ai servizi di questo
                                sito sono curati solo dal personale incaricato del trattamento da parte del Titolare o del
                                Responsabile oppure da addetti ad occasionali operazioni di manutenzione del sistema esterno ma
                                incaricati dal Titolare.`}
                            </p>
                            <b>{'TRATTAMENTO DEI COOKIES'}</b>
                            <p>
                                {`In questo sito l'uso di Cookies è strettamente
                                limitato alla trasmissione di identificativi di sessione necessari per consentire l’esplorazione
                                sicura ed efficiente del sito.`}
                            </p>
                            <b>{'DIRITTI DEGLI INTERESSATI'}</b>
                            <p>
                                {`Ai sensi dell'art. 7 del Codice della Privacy, i soggetti cui si riferiscono i dati personali
                                hanno il diritto, in qualunque momento, di: ottenere la conferma dell’esistenza dei medesimi dati
                                e di conoscerne il contenuto e l’origine, conoscere le finalità e le modalità del trattamento,
                                conoscere gli estremi del Titolare e dell’eventuale Responsabile, conoscere i soggetti o le categorie
                                di soggetti cui i dati possono essere comunicati, verificare l’esattezza dei dati, chiederne l’integrazione,
                                l’aggiornamento o la rettificazione, la cancellazione, la trasformazione in forma anonima o il blocco
                                dei dati trattati in violazione di legge, chiedere l’attestazione del fatto che le operazioni di cui
                                ai sopra sono state portate a conoscenza, anche per quanto riguarda il loro contenuto, di coloro ai quali
                                i dati sono stati comunicati o diffusi. Inoltre, i soggetti cui i dati si riferiscono possono, per motivi
                                legittimi, opporsi, in tutto o in parte al trattamento dei dati che li riguardano, nonché, in particolare,
                                al trattamento dei dati personali previsto ai fini di informazione commerciale o di invio di materiale
                                pubblicitario o di vendita diretta ovvero per il compimento di ricerche di mercato o di comunicazione commerciale.";`}
                            </p>
                            <b>{'COOKIES POLICY'}</b>
                            <p>{`il sito utilizza cookie per fornire servizi che migliorino l’esperienza di navigazione degli utenti.

                                Come utilizziamo i cookie
                                • Utilizziamo cookie di navigazione anonimi, necessari per consentire agli utenti di navigare correttamente,
                                utilizzare tutte le funzionalità ed accedere ad aree sicure.
                                • Utilizziamo cookie analitici per capire meglio come i nostri utenti utilizzano il sito web, per ottimizzare
                                e migliorare il sito, rendendolo sempre interessante e rilevante per gli utenti.

                                Come modificare o disattivare le preferenze dei cookie
                                • Dalle impostazioni del tuo browser (Internet Explorer, Safari, Firefox, Chrome ecc..) potrai stabilire
                                quali sono i cookie che desideri ricevere e quali no. Per sapere dove puoi trovare suddette impostazioni,
                                utilizza il tasto “Help” del tuo browser.`}
                            </p>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
