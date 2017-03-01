import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Alert, Glyphicon} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getSYBProductPlans} from 'actions/products';
import {login} from 'actions/user';
import * as colors from 'lib/colors';

import FaqSection from 'components/FaqSection';
import HomeSectionTitle from 'components/HomeSectionTitle';
import HorizontalLine from 'components/HorizontalLine';
import ProcessSection from 'components/ProcessSection';
import SignUpButton from 'components/SignUpButton';
import TemplateSection from 'components/TemplateSection';
import ProductPlanCardList from 'components/ProductPlanCardList';

const styles = {
    teaserWrp: {
        backgroundImage: 'url(\'./_assets/images/common/bg_teaser.jpg\')',
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
        fontSize: 'calc(18px + .25vw)',
        lineHeight: 'calc(18px + 1vw)',
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

    renderPlan () {
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
                            productPlans={this.props.products.productPlans}
                        />
                    </div>
                </div>
            </div>
        );
    }

    render () {
        return (
            <div style={{backgroundColor: colors.backgroundLightGrey}}>
                <div style={styles.teaserWrp}>
                    <div className='container' style={{textAlign: 'center'}}>
                        <h1 style={{...styles.titleTeaser, ...{fontSize: 'calc(60px + 1vw)'}}}>
                            {'INIZIA ORA'}
                        </h1>
                        <h2 style={{...styles.titleTeaser, ...{fontSize: 'calc(40px + 2vw)'}}}>
                            {'IL TUO NUOVO BUSINESS'}
                        </h2>
                        <div style={styles.textTeaser}>
                            {
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam.`
                            }
                        </div>
                        <HorizontalLine color={colors.primaryColor} width={100} />
                        <SignUpButton
                            backgroundColor={colors.white}
                            textColor={colors.primaryColor}
                        />
                    </div>
                </div>
                <ProcessSection />
                <TemplateSection />
                {this.renderPlan()}
                <FaqSection />
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
