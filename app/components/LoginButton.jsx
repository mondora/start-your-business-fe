import React, {Component, PropTypes} from 'react';
import Button from 'components/CustomButton';
import LoginModal from 'components/LoginModal';

export default class LoginButton extends Component {
    static propTypes = {
        backgroundColor: PropTypes.string,
        form: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        loginState: PropTypes.object.isRequired,
        textColor: PropTypes.string
    };

    constructor (props) {
        super(props);
        this.state = {
            showLoginModal: false
        };
    }

    render () {
        return (
            <div>
                <Button
                    onClick={() => this.setState({showLoginModal: true})}
                    text={'LOGIN'}
                    {...this.props}
                />
                <LoginModal
                    form={this.props.form}
                    login={this.props.login}
                    loginState={this.props.loginState}
                    show={this.state.showLoginModal}
                    onClose={() => this.setState({showLoginModal: false})}
                />
            </div>
        );
    }
}
