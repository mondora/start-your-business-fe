import React, {Component} from 'react';

import Button from 'components/CustomButton';

import * as colors from 'lib/colors';

export default class UserAccountSaveButton extends Component {
    render () {
        return (
            <div style={{float: 'right', textAlign: 'right'}}>
                <Button
                    backgroundColor={colors.darkGrey}
                    text='SALVA MODIFICHE'
                    type='submit'
                />
            </div>
        );
    }
}