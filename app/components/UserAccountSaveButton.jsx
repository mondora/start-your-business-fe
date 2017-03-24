import React, {Component, PropTypes} from 'react';

import Button from 'components/CustomButton';

import * as colors from 'lib/colors';

export default class UserAccountSaveButton extends Component {
    static propTypes = {
        isActive: PropTypes.bool.isRequired
    };

    render () {
        return (
            <div style={{float: 'right', textAlign: 'right'}}>
                {this.props.isActive ? 
                    <Button
                        height={40}
                        backgroundColor={colors.darkGrey}
                        text='SALVA MODIFICHE'
                        type='submit'
                    /> :
                    <Button
                        border={`1px solid ${colors.grey}`}
                        disabled={true}
                        height={40}
                        textColor={colors.grey}
                        backgroundColor={colors.white}
                        text='SALVA MODIFICHE'
                    />
                }
            </div>
        );
    }
}
