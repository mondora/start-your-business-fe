import React, {Component, PropTypes} from 'react';

import Button from 'components/CustomButton';

export default class SignUpButton extends Component {
    static propTypes = {
        loggedUrl: PropTypes.string
    };
    
    render () {
        return (
            <Button
                onClick={() => window.location = this.props.loggedUrl ? this.props.loggedUrl : '#/signup'}
                text={'INIZIA ORA!'}
                {...this.props}
            />
        );
    }
}
