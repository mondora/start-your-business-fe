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
import FeaturesIcons from 'components/FeaturesIcons';
import HomeSectionTitle from 'components/HomeSectionTitle';
import HorizontalLine from 'components/HorizontalLine';
import StepCard from 'components/StepCard';
import ProductPlanCardList from 'components/ProductPlanCardList';

const styles = {
    teaserWrp: {
        backgroundImage: 'url(\'./_assets/images/common/bg_teaser.jpg\')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
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
    templateWrp: {
        padding: '8% 0',
        backgroundImage: 'url(\'./_assets/images/home/bg_template.jpg\')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        height: 'auto',
        minHeight: 500
    },
};

class HomeContainer extends Component {
    static propTypes = {
        getSYBProductPlans: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        products: PropTypes.object,
        user: PropTypes.object
    };

    getFeaturesIcons () {
        return [
            {
                icon: 'responsive_white',
                title: '100% RESPONSIVE',
                text:
                    `Lorem ipsum Do commodo in proident enim in dolor
                    cupidatat adipisicing dolore officia nisi aliqua incididunt
                    Ut veniam lorem ipsum Consectetur ut in in eu do.`
            },
            {
                icon: 'template_white',
                title: '2 TEMPLATE ACCATTIVANTI',
                text:
                    `Lorem ipsum Do commodo in proident enim in dolor
                    cupidatat adipisicing dolore officia nisi aliqua incididunt
                    Ut veniam lorem ipsum Consectetur ut in in eu do.`
            },
            {
                icon: 'customizable_white',
                title: 'FACILI DA PERSONALIZZARE',
                text:
                    `Lorem ipsum Do commodo in proident enim in dolor
                    cupidatat adipisicing dolore officia nisi aliqua incididunt
                    Ut veniam lorem ipsum Consectetur ut in in eu do.`
            }
        ];
    }

    renderProcess () {
        return (
            <div style={styles.processWrp}>
                <div className='container' style={{textAlign: 'center'}}>
                    <HomeSectionTitle
                        subtitle={'PROCESSO'}
                        title={'COME FUNZIONA?'}
                        description={
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam.`
                        }
                    />
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
        );
    }

    renderTemplate () {
        return (
            <div style={styles.templateWrp}>
                <div className='container' style={{textAlign: 'center'}}>
                    <HomeSectionTitle
                        subtitle={'DESIGN'}
                        textColor={colors.white}
                        title={'SCEGLI UN TEMPLATE'}
                        description={
                            `Ut veniam lorem ipsum Consectetur ut in in eu do
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.`
                        }
                    />
                    <Row>
                        {this.getFeaturesIcons().map((featureIcon, index) =>
                            <Col key={index} xs={12} sm={4}>
                                <FeaturesIcons
                                    key={index}
                                    icon={featureIcon.icon}
                                    iconStyle={{margin: '0 auto'}}
                                    title={featureIcon.title}
                                    titleColor={colors.primaryColor}
                                    textColor={colors.white}
                                    text={featureIcon.text}
                                />
                            </Col>
                        )}
                    </Row>
                </div>
            </div>
        );
    }

    renderPlan () {
        return (
            <div style={styles.planWrp}>
                <div className='container' style={{textAlign: 'center'}}>
                    <HomeSectionTitle
                        subtitle={'ECONOMICS'}
                        title={'SCEGLI IL PIANO CHE FA PER TE'}
                        description={
                            `Consectetur adipiscing elit, aliqua incididunt
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua.`
                        }
                    />
                    <ProductPlanCardList
                        getSYBProductPlans={this.props.getSYBProductPlans}
                        productPlans={this.props.products.productPlans}
                    />
                </div>
            </div>
        );
    }

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
                {this.renderProcess()}
                {this.renderTemplate()}
                {this.renderPlan()}
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


export default connect(mapStateToProps, mapDispatchToProps)(Radium(HomeContainer));
