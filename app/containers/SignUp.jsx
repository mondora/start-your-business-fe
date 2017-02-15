import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {signUpUser} from 'actions/user';

import SignUpForm from 'components/SignUpForm';

const styles = {
    part1Container: {
        backgroundImage: 'url(\'./_assets/images/home1.jpeg\')',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
};

class SignUpContainer extends Component {
    static propTypes = {
        signUpUser: PropTypes.func.isRequired,
        signupForm: PropTypes.object,
        user: PropTypes.object
    };
    
    render () {
        return (
            <div style={{backgroundColor: '#eae9ed'}}>
                <div style={styles.part1Container}>
                    <div style={{color: '#ffffff', fontSize: 50}}>{'REGISTRATI'}</div>
                    <SignUpForm
                        signUpUser={this.props.signUpUser}
                        signupForm={this.props.signupForm}
                        signupState={this.props.user.signup}
                    />
                </div>
                <div style={{height: 300}} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        signupForm: state.userSignupForm,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUpUser: bindActionCreators(signUpUser, dispatch)
    };
};


const SignUp = connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);

export default SignUp;