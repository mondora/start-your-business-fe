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
    subtitle: {
        color: colors.darkGrey,
        fontWeight: 800,
        marginTop: 30,
        fontSize: 'calc(10px + 1vw)',
        lineHeight: 'calc(10px + 1vw)'
    },
    text: {
        fontSize: '1.1em',
        lineHeight: '1.3em',
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
                                <h3 style={styles.subtitle}>{'INFORMATIVA SUL TRATTAMENTO DEI DATI PERSONALI'}</h3>
                                <p>
                                    {`La presente informativa descrive il trattamento dei dati personali che Mondora S.r.l. (di seguito, "Mondora") effettua in qualità di titolare del trattamento in relazione all'utilizzo della
                                    Piattaforma Entova
                                    (di seguito,"Piattaforma") e all'erogazione dei servizi offerti tramite tale piattaforma (di seguito,"Dati Personali").
                                    Resta inteso che, in relazione ai dati personali importati o caricati dal Cliente/Terzo Beneficiario (di seguito
                                    "Cliente"/"Terzo Beneficiario"), nel contesto della fruizione dei servizi offerti sulla Piattaforma, Mondora
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
                                <h3 style={styles.subtitle}>{'1. Titolare del trattamento'}</h3>
                                <p>
                                    {`Titolare autonomo del trattamento dei Dati Personali per le finalità di seguito descritte è la società Mondora
                                    S.r.l., C.F. e P.IVA n. 03680680968, con sede legale in Via Uberto Visconti di Modrone 33 , 20122, Milano,
                                    telefono +39 0342 1856 264, indirizzo email: info@mondora.com.`}
                                </p>
                                <h3 style={styles.subtitle}>{'2. Tipologia di dati'}</h3>
                                <h4><em>{'Dati di navigazione'}</em></h4>
                                <p>
                                    {`Per la consultazione delle pagine pubbliche della Piattaforma non è richiesto alcun conferimento di dati personali.
                                    Tuttavia, eventuali contatti con Mondora, l'invio facoltativo, esplicito e spontaneo di messaggi, di posta
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
                                    <br /><br />
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
                                <h4><em>{'Aggiornamento dei dati'}</em></h4>
                                <p>
                                    {`Il Cliente/Terzo Beneficiario è tenuto ad assicurarsi che i Dati Personali forniti a Mondora siano corretti e,
                                    in caso di variazioni, ad aggiornare tali dati scrivendo a Mondora all’indirizzo info@mondora.com`}
                                </p>
                                <h3 style={styles.subtitle}>{'3. Finalità del trattamento'}</h3>
                                <p>
                                    {`I Dati Personali verranno raccolti e trattati per le finalità
                                    e secondo le modalità di seguito riportate:`}<br /><br />
                                    {`a) per l'esecuzione del contratto e l'erogazione dei Servizi (es. gestione e amministrazione del contratto,
                                    gestione dei pagamenti, gestione dei processi di registrazione e accesso alla Piattaforma, gestione e
                                    utilizzo dell’account, assistenza e gestione di eventuali richieste e reclami, assistenza tecnica);`}<br /><br />
                                    {`b) per l’assolvimento di eventuali obblighi di legge e/o regolamentari (es. fatturazione, tenuta della
                                    contabilità, obblighi di segnalazione di incidenti di sicurezza);`}<br /><br />
                                    {`c) per la tutela dei diritti di Mondora, sia in sede giudiziale
                                    che stragiudiziale. `}<br /><br />

                                    {`Per le finalità sopra elencate non è necessario il consenso del Cliente/Terzo Beneficiario, ai sensi di quanto
                                    previsto dall'art. 24, comma 1, lett. a), b) ed f) del D.Lgs. 196/2003.
                                    Inoltre, i Dati Personali del Cliente/Terzo Beneficiario, potranno essere trattati da Mondora:`}<br /><br />
                                    {`d) con il consenso del Cliente/Terzo Beneficiario, che potrà rifiutare successivamente in qualsiasi momento,
                                    per finalità di marketing mediante invio, tramite e-mail, posta tradizionale (cartacea), telefono, fax e/o
                                    SMS/MMS, notifiche push, di newsletter e comunicazioni commerciali relative ai prodotti o servizi
                                    Mondora (e di suoi partner commerciali), nonché, per effettuare telefonicamente, online, o via e-mail
                                    analisi statistiche, sondaggi e indagini di mercato, ivi incluse attività di customer satisfactions,
                                    relative a prodotti e servizi offerti da Mondora (o da suoi partner commerciali). Fatto salvo quanto
                                    previsto nella nostra cookie policy, qualora il Cliente/Terzo Beneficiario abbia acconsentito anche
                                    all’attività di profilazione di seguito descritta, Mondora potrà utilizzare il risultato dell’analisi così
                                    condotta per l’invio di comunicazioni ritenute da Mondora di interesse per il Cliente/Terzo
                                    Beneficiario;`}<br /><br />
                                    {`e) con il consenso del Cliente/Terzo Beneficiario, che potrà rifiutare successivamente in qualsiasi momento,
                                    per finalità di profilazione, e specificamente per l’analisi da parte di Mondora delle scelte,
                                    preferenze, interessi e abitudini del Cliente/Terzo Beneficiario acquisite nel contesto della fruizione dei
                                    Servizi. I Dati Personali potranno essere utilizzati da Mondora anche mediante creazione di profili
                                    individuali e/o aggregati per elaborare analisi di mercato e statistiche finalizzate all’identificazione di
                                    prodotti e/o servizi di interesse della propria clientela`}<br /><br />
                                    {`Inoltre, alcune informazioni e meta-dati di carattere prevalentemente economico, relativi ai documenti generati,
                                    caricati o trasmessi dal Cliente/Terzo Beneficiario nel contesto della fruizione dei Servizi di fatturazione
                                    disponibili tramite la Piattaforma, potranno essere raccolti da Mondora in forma anonima per elaborare analisi
                                    statistiche al fine di migliorare la qualità dei Servizi e fornire dati statistici in forma aggregata e anonima a soggetti
                                    terzi operanti nel settore delle informazioni commerciali e dei servizi alle imprese. In quanto dati anonimi, o
                                    comunque anonimizzati, il relativo trattamento resta estraneo all'applicazione della normativa in materia di
                                    protezione dei dati personali.`}
                                </p>

                                <h3 style={styles.subtitle}>{'4. Natura del conferimento dei dati'}</h3>
                                <p>
                                    {`Rispetto alle finalità di cui ai punti 3.a), 3.b) e 3.c), il conferimento dei dati contrassegnati come obbligatori in
                                    fase di registrazione (ovvero in ulteriori circostanze nelle quali sia richiesto al Cliente/Beneficiario di conferire
                                    dati) è necessario per fruire dei Servizi e l’eventuale rifiuto comporta l’oggettiva impossibilità di fruire dei Servizi.
                                    Il conferimento di eventuali dati diversi da quelli obbligatori, è del tutto facoltativo e libero e l’eventuale rifiuto
                                    non pregiudica in alcun modo la possibilità per il Cliente/Terzo Beneficiario di fruire dei Servizi. In tal caso, il
                                    Cliente/terzo Beneficiario potrebbe tuttavia non riuscire a fruire pienamente di alcune funzionalità della
                                    Piattaforma che necessitano tecnicamente del conferimento di alcune informazioni.`}<br /><br />
                                    {`Il conferimento di dati che dovessero risultare funzionali al perseguimento delle finalità di cui ai punti 3.d) e 3.e)
                                    non è obbligatorio e l’eventuale rifiuto non pregiudica in alcun modo la possibilità per il Cliente/terzo Beneficiario
                                    di fruire dei Servizi. In tal caso, però, Mondora potrebbe non essere in grado, ad esempio, di trasmettere al
                                    Cliente/Terzo Beneficiario materiale promozionale mirato su prodotti o servizi che potrebbero essere di interesse
                                    del Cliente/Terzo Beneficiario. `}
                                </p>

                                <h3 style={styles.subtitle}>{'5. Comunicazione e diffusione dei dati'}</h3>
                                <p>
                                    {`Con riguardo alle attività di trattamento Mondora potrà rendere disponibili i Dati Personali al proprio
                                    personale dipendente e ai consulenti incaricati da Mondora che abbiano necessità di trattare i Dati Personali
                                    per lo svolgimento delle proprie mansioni (es. funzione digital, amministrazione, servizio clienti).`}<br /><br />
                                    {`Inoltre, i Dati Personali potranno anche essere disponibili a società terze che svolgono, per conto di Mondora,
                                    specifici servizi in qualità di Responsabili del trattamento (es. fornitori di servizi logistici e informatici, gestione
                                    di attività di marketing e analisi, etc.) o essere comunicati a terzi che trattano i dati in modo autonomo e conforme
                                    alla legge unicamente per dare esecuzione al contratto di acquisto (es. istituti bancari in relazione alla gestione dei
                                    pagamenti, ovvero autorità fiscali e previdenziali in caso di versamenti delle imposte e ritenute).`}<br /><br />
                                    {`I Dati Personali potranno essere comunicati a forze di polizia o all'autorità giudiziaria, in conformità alla legge e
                                    previa formale richiesta legittima da parte di tali soggetti.`}<br /><br />
                                    {`I Dati Personali non saranno diffusi né ceduti a terzi per l’utilizzo a fini propri; resta inteso che, in caso di eventuali
                                    operazioni societarie straordinarie (es. cessione o affitto di azienda, fusione, ecc.), i Dati Personali potrebbero
                                    essere ceduti o conferiti a terzi acquirenti/affittuari o aventi diritto.`}
                                </p>

                                <h3 style={styles.subtitle}>{'6. Trasferimento dei dati all`estero'}</h3>
                                <p>
                                    {`I Dati Personali sono trasferiti fuori dall'Unione Europea (tra cui gli Stati Uniti) solo al fine di consentire a Zuora
                                    Inc. di gestire i servizi di pagamento della Piattaforma. A tal fine Mondora ha vincolato Zuora Inc. al rispetto
                                    della normativa italiana in materia di protezione dei dati personali, ivi inclusi i profili riguardanti la sicurezza
                                    mediante clausole contrattuali tipo. `}
                                </p>

                                <h3 style={styles.subtitle}>{'7. Sicurezza'}</h3>
                                <p>
                                    {`Mondora riconosce l'importanza di proteggere i Dati Personali della propria clientela (es. i dati identificativi
                                    e i dati finanziari) e per tale ragione Mondora adotta politiche e misure di sicurezza di natura tecnica e
                                    organizzativa per proteggere, nel rispetto delle norme vigenti, i Dati Personali di Clienti/Terzi Beneficiari e i
                                    sistemi informatici utilizzati per la gestione della Piattaforma. In particolare, Mondora ha implementato
                                    misure per proteggere i Dati Personali contro manomissioni accidentali o intenzionali, perdita, distruzione,
                                    divulgazione o accesso non autorizzato ai dati raccolti online.`}<br /><br />
                                    {`Tuttavia, ancorché Mondora continui a implementare e migliorare le misure di sicurezza in linea con lo
                                    sviluppo della tecnologia e degli standard di settore, per la natura stessa di Internet tali misure non possono limitare
                                    o escludere totalmente il rischio di accesso non consentito o di diffusione dei dati. Si raccomanda pertanto di
                                    aggiornare periodicamente i software per la protezione della trasmissione in rete di dati (es. antivirus) e di
                                    verificare che il proprio fornitore di servizi di comunicazione elettronica abbia adottato misure idonee per la
                                    sicurezza della trasmissione di dati in rete (es. firewall e filtri antispamming). Si ricorda inoltre che l'accesso
                                    all’account personale, contenente i Dati Personali, è possibile solo per mezzo di credenziali di autenticazione che
                                    dovranno essere gestite e protette in stretta conformità a quanto previsto nella documentazione contrattuale
                                    evitando pertanto qualsiasi forma di comunicazione dei dati a terzi.`}
                                </p>

                                <h3 style={styles.subtitle}>{'8. Conservazione dei dati'}</h3>
                                <p>
                                    {`I dati personali saranno conservati per il tempo necessario al raggiungimento delle finalità sopra descritte. In
                                    particolare, i dati saranno conservati per tutta la durata del contratto, nonché per il tempo richiesto per assolvere
                                    agli obblighi di legge (es. tenuta della contabilità per 10 anni, conservazione a fini di fatturazione e per assolvere
                                    a obblighi fiscali, in caso di dati relativi agli acquisti online) o sino a revoca del consenso o richiesta di
                                    cancellazione per quanto riguarda i dati relativi a finalità di marketing (es. unsubscribe alle newsletter).`}<br /><br />
                                    {`In caso di consenso alla profilazione, i dati saranno conservati per il tempo massimo identificato dal Garante per
                                    la protezione dei dati personali per la profilazione e il marketing personalizzato. Fuori da tali casi, i dati personali
                                    saranno conservati solo per assolvere agli obblighi di legge e regolamentari posti in capo a Mondora, o a fini
                                    probatori a fini di difesa.`}
                                </p>

                                <h3 style={styles.subtitle}>{'9. Diritti dell`interessato'}</h3>
                                <p>
                                    {`Ai sensi dell'art. 7 del D.Lgs. 196/2003 in qualunque momento il Cliente/terzo Beneficiario ha il diritto di ottenere
                                    da Mondora la conferma dell'esistenza o meno dei propri Dati Personali e di conoscerne il contenuto e
                                    l'origine, verificarne l'esattezza o chiederne l'integrazione, l'aggiornamento, oppure la rettificazione. Il
                                    Cliente/Terzo Beneficiario ha inoltre il diritto di chiedere la cancellazione, la trasformazione in forma anonima o
                                    il blocco dei Dati Personali trattati in violazione di legge, nonché di opporsi in ogni caso, per motivi legittimi, al
                                    loro trattamento. Il Cliente/Terzo Beneficiario ha altresì il diritto di rivolgersi al Garante per la protezione dei dati
                                    personali per tutelare i propri diritti (www.garanteprivacy.it). Per l’esercizio di tali diritti e per conoscere l'elenco
                                    aggiornato dei responsabili del trattamento e dei soggetti ai quali Mondora può comunicare i Dati Personali)
                                    il Cliente/Terzo Beneficiario potrà indirizzare la propria richiesta via email all’indirizzo è
                                    privacy@Mondora.com o contattare Mondora al numero di telefono o all'indirizzo indicati al punto 1.`}<br /><br />
                                    {`Se il Cliente/Terzo Beneficiario ha consentito all’utilizzo dei suoi Dati Personali da parte di Mondora per
                                    ricevere pubblicità e materiale promozionale e informativo, e desidera che i suoi Dati Personali non siano più
                                    utilizzati per tale finalità (o siano usati per ricevere pubblicità solo tramite alcuni canali, es. posta o email), sarà
                                    sufficiente che comunichi a Mondora tale richiesta nei modi sopra indicati o apportando le necessarie
                                    modifiche tramite il proprio account nell'area riservata. Analogamente, il Cliente/Terzo Beneficiario potrà seguire
                                    la medesima procedura anche nell’ipotesi in cui intenda revocare il suo consenso, se rilasciato, all’utilizzo dei
                                    propri dati per finalità di profilazione.`}
                                </p>

                                <h3 style={styles.subtitle}>{'10. Modifiche'}</h3>
                                <p>
                                    {`Mondora potrà modificare o aggiornare la presente informativa, anche per conformarsi a nuovi obblighi
                                    imposti dalle leggi vigenti o per necessità tecniche. Le modifiche e gli aggiornamenti si applicheranno dal
                                    momento della loro pubblicazione sulla Piattaforma. Si invita pertanto il Cliente/Terzo Beneficiario a consultare
                                    periodicamente questa pagina per verificare la versione più aggiornata di informativa sul trattamento dei Dati
                                    Personali.`}
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
