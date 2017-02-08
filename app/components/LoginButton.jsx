import React, {Component, PropTypes} from 'react';
import Button from 'components/CustomButton';
import LoginModal from 'components/LoginModal';

export default class LoginButton extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
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
                    text={'INIZIA ORA'}
                    {...this.props}
                />
                <LoginModal
                    show={this.state.showLoginModal}
                    onClose={() => this.setState({showLoginModal: false})}
                />
            </div>
        );
    }
}


