import React, {Component, PropTypes} from 'react';
import Button from 'components/CustomButton';
import Link from 'react-router';

export default class SignUpButton extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        textColor: PropTypes.string
    };

    render () {
        return (
            <Link to='signup' onClick={this.closeModal.bind(this)}>
                <Button
                    text={'INIZIA ORA!'}
                    {...this.props}
                />
            </Link>
        );
    }
}
