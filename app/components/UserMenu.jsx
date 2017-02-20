import React, {Component, PropTypes} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

export default class UserMenu extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    };

    render () {
        return (
            <DropdownButton
                bsStyle='success'
                title={`Ciao ${this.props.user.username}`}
            >
                <MenuItem eventKey='1'>
                    {'Il mio account'}
                </MenuItem>
                <MenuItem divider={true} />
                <MenuItem eventKey='2'>
                    {'Logout'}
                </MenuItem>
            </DropdownButton>
        );
    }
}