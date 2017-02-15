import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import Button from 'components/CustomButton';

export default class SignUpButton extends Component {
    render () {
        return (
            <Button
                onClick={() => browserHistory.push('/signup')}
                text={'INIZIA ORA!'}
                {...this.props}
            />
        );
    }
}
