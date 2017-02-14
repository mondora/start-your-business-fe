import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Radium from 'radium';
import {Col, Row} from 'react-bootstrap';

import {getSYBProductPlans} from 'actions/products';
import {login} from 'actions/user';
import * as colors from 'lib/colors';

// import SignUpButton from 'components/SignUpButton';
import Button from 'components/CustomButton';
import HorizontalLine from 'components/HorizontalLine';
import StepCard from 'components/StepCard';
import ProductPlanCardList from 'components/ProductPlanCardList';

const styles = {
    teaserWrp: {
        background: 'url(\'./_assets/images/common/bg_teaser.jpg\') no-repeat center top',
        backgroundSize: 'cover',
        height: 'calc(100vh - 80px)',
        minHeight: 500,
        paddingTop: '200px',
        '@media screen and (max-width: 767px)': {
            paddingTop: '220px',
            height: '500'
        },
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
        lineHeight: 'calc(18px + 1vw)',
        '@media screen and (max-width: 767px)': {
            width: '100%'
        },
    },
    subtitleSection: {
        margin: 0,
        color: colors.grey,
        fontWeight: 800,
        letterSpacing: '4px',
        lineHeight: 'calc(15px + .5vw)',
        fontSize: 'calc(14px + .5vw)',
    },
    titleSection: {
        margin: '0 0 20px 0',
        color: colors.darkGrey,
        fontWeight: 800,
        fontSize: 'calc(35px + 1vw)',
        lineHeight: 'calc(35px + 1vw)',
    },
    textSection: {
        margin: '0 auto',
        width: '80%',
        fontSize: 'calc(14px + .5vw)',
        lineHeight: 'calc(18px + .5vw)',
        '@media screen and (max-width: 767px)': {
            width: '100%'
        },
    },
    processWrp: {
        padding: '8% 0',
        backgroundColor: colors.white
    },
    imgResponsive: {
        display: 'block',
        height: 'auto',
        maxWidth: '85%',
        margin: '40px 0'
    },
    planWrp: {
        padding: '8% 0',
        backgroundColor: colors.backgroundLightGrey
    },
};

class HomeContainer extends Component {
    static propTypes = {
        getSYBProductPlans: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        products: PropTypes.object,
        user: PropTypes.object
    };

    render () {
        return (
            <div style={{backgroundColor: colors.white}}>
                <div style={styles.teaserWrp}>
                    <div className='container' style={{textAlign: 'center'}}>
                        <h1 style={{...styles.titleTeaser, ...{fontSize: 'calc(60px + 1vw)'}}}>
                            {'INIZIA ORA'}
                        </h1>
                        <h2 style={{...styles.titleTeaser, ...{fontSize: 'calc(40px + 2vw)'}}}>
                            {'IL TUO NUOVO BUSINESS'}
                        </h2>
                        <div style={{...styles.textTeaser, ...{fontSize: 'calc(18px + .25vw)'}}}>
                            {
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam.`
                            }
                        </div>
                        <HorizontalLine color={colors.primaryColor} width={100} />
                        <Button
                            text={'INIZIA ORA!'}
                            backgroundColor={colors.white}
                            textColor={colors.primaryColor}
                        />
                    </div>
                </div>
                <div style={styles.processWrp}>
                    <div className='container' style={{textAlign: 'center'}}>
                        <p style={styles.subtitleSection}>{'PROCESSO'}</p>
                        <h2 style={styles.titleSection}>
                            {'COME FUNZIONA?'}
                        </h2>
                        <div style={styles.textSection}>
                            {
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. Ut enim ad minim veniam.`
                            }
                        </div>
                        <HorizontalLine color={colors.primaryColor} width={140} />
                        <Row>
                            <Col xs={12} sm={4}>
                                <StepCard
                                    number={1}
                                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'}
                                    title={'REGISTRATI'}
                                />
                                <StepCard
                                    number={2}
                                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'}
                                    title={'SCEGLI UN TEMPLATE'}
                                />
                            </Col>
                            <Col xs={12} sm={4} smPush={4}>
                                <StepCard
                                    number={3}
                                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'}
                                    title={'INSERISCI LE SOTTOSCRIZIONI'}
                                />
                                <StepCard
                                    number={4}
                                    text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore'}
                                    title={'METTI ONLINE IL TUO BUSINESS'}
                                />
                            </Col>
                            <Col xs={12} sm={4} smPull={4}>
                                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    <img src='./_assets/images/home/iPhone.png' style={styles.imgResponsive} />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div style={styles.planWrp}>
                    <div className='container' style={{textAlign: 'center'}}>
                        <p style={styles.subtitleSection}>{'ECONOMICS'}</p>
                        <h2 style={styles.titleSection}>
                            {'SCEGLI IL PIANO CHE FA PER TE'}
                        </h2>
                        <div style={styles.textSection}>
                            {
                                `Consectetur adipiscing elit, aliqua incididunt
                                sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.`
                            }
                        </div>
                        <ProductPlanCardList
                            getSYBProductPlans={this.props.getSYBProductPlans}
                            productPlans={this.props.products.productPlans}
                        />
                    </div>
                </div>
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


const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

export default Radium(Home);
