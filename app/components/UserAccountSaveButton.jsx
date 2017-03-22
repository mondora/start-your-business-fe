import React, {Component, PropTypes} from 'react';

import Button from 'components/CustomButton';

import * as colors from 'lib/colors';

export default class UserAccountSaveButton extends Component {
    static propTypes = {
        isActive: PropTypes.func.isRequired
    };

    render () {
        const isActive = this.props.isActive;
        return isActive ? (
            <div style={{float: 'right', textAlign: 'right'}}>
                <Button
                    height={40}
                    backgroundColor={colors.darkGrey}
                    text='SALVA MODIFICHE'
                    type='submit'
                />
            </div>
        ) : (
            <div style={{float: 'right', textAlign: 'right'}}>
                <Button
                    border={`1px solid ${colors.grey}`}
                    height={40}
                    textColor={colors.grey}
                    backgroundColor={colors.white}
                    text='SALVA MODIFICHE'
                    type='submit'
                />
            </div>
        );
    }
}
