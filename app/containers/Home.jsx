import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Radium from 'radium';
// import {Col, Row} from 'react-bootstrap';

import {getSYBProductPlans} from 'actions/products';
import {login} from 'actions/user';
import * as colors from 'lib/colors';

// import SignUpButton from 'components/SignUpButton';
import Button from 'components/CustomButton';
import HomeSectionTitle from 'components/HomeSectionTitle';
import HorizontalLine from 'components/HorizontalLine';
import FaqSection from 'components/FaqSection';
import ProcessSection from 'components/ProcessSection';
import TemplateSection from 'components/TemplateSection';

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
    }
};

class HomeContainer extends Component {
    static propTypes = {
        getSYBProductPlans: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired,
        products: PropTypes.object,
        user: PropTypes.object
    };

    renderProcess () {
        return (
            <ProcessSection />
        );
    }

    renderTemplate () {
        return (
            <TemplateSection />
        );
    }

    renderFAQ () {
        return (
            <FaqSection />
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
                {this.renderFAQ()}
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
