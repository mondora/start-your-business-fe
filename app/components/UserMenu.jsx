import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import {browserHistory} from 'react-router';

import * as colors from 'lib/colors';

const styles = {
    blockWrp: {
        backgroundColor: colors.primaryColor,
        borderRadius: '30px'
    }
};

class UserMenu extends Component {
    static propTypes = {
        logout: PropTypes.func.isRequired,
        user: PropTypes.object.isRequired
    };

    render () {
        return (
            <div className='dropdown-account'>
                <DropdownButton
                    id='dropdown-account'
                    title={`Ciao ${this.props.user.username}`}
                    style={styles.buttonWrp}
                >
                    <Radium.Style
                        rules={{
                            '.btn-default': {
                                backgroundColor: `${colors.primaryColor} !important`,
                                borderRadius: '30px !important',
                                color: `${colors.white} !important`,
                                paddingLeft: '20px !important',
                                paddingRight: '20px !important',
                                height: '42px',
                                borderColor: `${colors.transparent} !important`
                            },
                            '.dropdown-menu': {
                                width: '88%',
                                margin: '2px 20px !important'
                            },
                            '.dropdown-menu>li>a:focus, .dropdown-menu>li>a:hover': {
                                backgroundColor: `${colors.transparent} !important`,
                                color: `${colors.primaryColor} !important`
                            }
                        }}
                        scopeSelector='.dropdown-account'
                    />
                    <MenuItem eventKey='1' onSelect={() => window.location = '#/account'}>
                        {'Il mio account'}
                    </MenuItem>
                    <MenuItem divider={true} />
                    <MenuItem eventKey='2'>
                        {'Logout'}
                    </MenuItem>
                </DropdownButton>
            </div>
        );
    }
}

export default Radium(UserMenu);
