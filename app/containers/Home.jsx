import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {getSYBProductPlans} from 'actions/products';
import {login} from 'actions/user';

import LoginButton from 'components/LoginButton';
import HorizontalLine from 'components/HorizontalLine';
import StepCard from 'components/StepCard';
import ProductPlanCardList from 'components/ProductPlanCardList';

const styles = {
    part1Container: {
        backgroundImage: 'url(\'./_assets/images/home1.jpeg\')',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    part2Container: {
        backgroundColor: '#ffffff',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    h1: {
        color: '#ffffff',
        fontSize: 50
    },
    header: {

    }
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
            <div style={{backgroundColor: '#eae9ed'}}>
                <div style={styles.part1Container}>
                    <div style={{color: '#ffffff', fontSize: 50}}>{'INIZIA ORA'}</div>
                    <div style={{color: '#ffffff', fontSize: 45}}>{'IL TUO NUOVO BUSINESS'}</div>
                    <div style={{color: '#ffffff', fontSize: 20, width: '50%'}}>
                        {
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut`
                        }
                    </div>
                    <HorizontalLine color={'#20bda9'} width={100} />
                    <LoginButton
                        errorMessage={this.props.user.loginErrorMessage}
                        login={this.props.login}
                        textColor={'#20bda9'}
                    />
                </div>
                <div style={styles.part2Container}>
                    <div style={{color: '#d8d8d8', fontSize: 20}}>{'PROCESSO'}</div>
                    <div style={{color: '#000000', fontSize: 45}}>{'COME FUNZIONA?'}</div>
                    <div style={{color: '#000000', fontSize: 20, width: '50%'}}>
                        {
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud
                            exercitation ullamco laboris nisi ut`
                        }
                    </div>
                    <HorizontalLine color={'#20bda9'} width={100} />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                width: 200
                            }}
                        >
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
                        </div>
                        <img src='./_assets/images/iPhone.png' style={{height: 400, width: 350}} />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                width: 200
                            }}
                        >
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
                        </div>
                    </div>
                </div>
                <ProductPlanCardList
                    getSYBProductPlans={this.props.getSYBProductPlans}
                    productPlans={this.props.products.productPlans}
                />
                <div style={{height: 300}} />
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

export default Home;
