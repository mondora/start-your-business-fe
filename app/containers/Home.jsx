import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Alert, Glyphicon, Modal} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getSYBProductPlans} from 'actions/products';
import {login} from 'actions/user';

import {getUserSiteState} from 'lib/auth-utils';
import * as colors from 'lib/colors';

import Button from 'components/CustomButton';
import FaqSection from 'components/FaqSection';
import HomeSectionTitle from 'components/HomeSectionTitle';
import HorizontalLine from 'components/HorizontalLine';
import ProcessSection from 'components/ProcessSection';
import SignUpButton from 'components/SignUpButton';
import TemplateSection from 'components/TemplateSection';
import ProductPlanCardList from 'components/ProductPlanCardList';

const styles = {
    teaserWrp: {
        backgroundImage: 'url(\'/_assets/images/common/bg_teaser.jpg\')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        height: 'auto',
        minHeight: 500,
        padding: '20% 0 8% 0',
        '@media screen and (max-width: 767px)': {
            paddingTop: '220px'
        },
        '@media screen and (min-width: 1200px)': {
            height: '100vh'
        }
    },
    titleTeaser: {
        margin: 0,
        color: colors.white,
        fontWeight: 800,
        lineHeight: 'calc(45px + 1vw)',
        textAlign: 'center'
    },
    textTeaser: {
        color:  colors.white,
        margin: '20px auto',
        width: '60%',
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 'calc(20px + .25vw)',
        lineHeight: 'calc(20px + 1vw)',
        '@media screen and (max-width: 767px)': {
            width: '100%'
        }
    },
    imgResponsive: {
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
        margin: '40px auto'
    },
    planWrp: {
        padding: '8% 0',
        backgroundColor: colors.backgroundLightGrey
    },
    plan: {
        textAlign: 'center',
        '@media screen and (min-width: 991px)': {
            padding: '0 10%'
        }
    }
};

class Home extends Component {

    constructor () {
        super();
        this.state = {showWarningModal: true};
    }

    static propTypes = {
        getSYBProductPlans: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        products: PropTypes.object,
        user: PropTypes.object
    };

    renderAlert () {
        return (
            <Alert
                onDismiss={this.handleAlertDismiss}
                style={{
                    margin: '0 auto',
                    color: colors.white,
                    borderRadius: '30px',
                    backgroundColor: colors.grey,
                    textAlign: 'left',
                    fontSize: 'calc(12px + .7vw)',
                    border: 0
                }}
            >
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start'}}>
                    <div style={{width: 50, marginRight: 8}}>
                        <Glyphicon
                            glyph='glyphicon glyphicon-info-sign'
                            style={{
                                display: 'block',
                                color: colors.white,
                                fontSize: 'calc(28px + .7vw)'
                            }}
                        />
                    </div>
                    <div>
                        <strong>{'LA SOTTOSCRIZIONE PROFESSIONAL SARÁ DISPONIBILE DA AUTUNNO 2017'}</strong>
                    </div>
                </div>
            </Alert>
        );
    }

    renderPlan (isLoggedIn) {
        return (
            <div style={styles.planWrp}>
                <div className='container'>
                    <div style={styles.plan}>
                        <HomeSectionTitle
                            subtitle={'SOTTOSCRIZIONI'}
                            title={'SCEGLI IL TUO PIANO'}
                            description={
                                `Sei alla ricerca di una soluzione semplice,
                                veloce ed economica? Oppure hai bisogno di un
                                prodotto più funzionale e con maggiori possibilità?
                                Scegli la sottoscrizione che meglio corrisponde
                                alle tue esigenze`
                            }
                        />
                        {this.renderAlert()}
                        <ProductPlanCardList
                            getSYBProductPlans={this.props.getSYBProductPlans}
                            isLoggedIn={isLoggedIn}
                            productPlans={this.props.products.productPlans}
                        />
                    </div>
                </div>
            </div>
        );
    }

    closeWarningModal () {
        this.setState({showWarningModal: false});
    }

    render () {
        const logged = getUserSiteState(this.props.user).isLoggedIn;
        const {showWarningModal} = this.state;

        return (
            <div style={{backgroundColor: colors.backgroundLightGrey}}>
                <div style={styles.teaserWrp}>
                    <div className='container' style={{textAlign: 'center'}}>
                        <h2 style={{...styles.titleTeaser, ...{fontSize: 'calc(40px + 2vw)'}}}>
                            {'INNOVA IL TUO'}
                        </h2>
                        <h1 style={{...styles.titleTeaser, ...{fontSize: 'calc(60px + 1vw)'}}}>
                            {'BUSINESS'}
                        </h1>
                        <div style={styles.textTeaser}>
                            {
                                `Crea il tuo shop online in pochi secondi su entova.it e vendi i tuoi prodotti o servizi a sottoscrizione.
                                Nutri il tuo business... con Entova`
                            }
                        </div>
                        <HorizontalLine color={colors.primaryColor} width={100} />
                        <SignUpButton
                            backgroundColor={colors.white}
                            loggedUrl={logged ? '#/account' : null}
                            textColor={colors.primaryColor}
                        />
                    </div>
                </div>
                <ProcessSection />
                <TemplateSection />
                {this.renderPlan(logged)}
                <FaqSection />
                <Modal show={showWarningModal} onHide={::this.closeWarningModal}>
                    <Modal.Header closeButton={true} style={{border: 0}}>
                        <Modal.Title style={{textAlign: 'center'}}>
                            <h2>{'Benvenuto in'}</h2>
                            <img
                                src='/_assets/images/common/logo.png'
                                style={{
                                    cursor: 'pointer',
                                    maxHeight: 80,
                                    margin: 10,
                                    backgroundColor: colors.darkGrey,
                                    borderRadius: 10
                                }}
                            />
                        </Modal.Title>
                    </Modal.Header>
                    <HorizontalLine color={colors.primaryColor} width={60} />
                    <Modal.Body style={{textAlign: 'center'}}>
                        <div style={{paddingBottom: 25, fontSize: 18}}>
                            <div>{'Stiamo ancora lavorando a questo prodotto.'}</div>
                            <div>{'Al momento puoi registrarti, creare un template e salvarlo.'}</div>
                            <div>{'La sottoscrizione al servizio e la creazione del tuo sito saranno disponibili a breve.'}</div>
                        </div>
                        <Button
                            backgroundColor={colors.primaryColor}
                            onClick={::this.closeWarningModal}
                            text={'PROVA SUBITO'}
                            type='submit'
                        />
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSYBProductPlans: bindActionCreators(getSYBProductPlans, dispatch),
        login: bindActionCreators(login, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(Home));
