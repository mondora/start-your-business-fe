import React, {Component} from 'react';

import Button from 'components/CustomButton';

import * as colors from 'lib/colors';

const styles = {
    TooltipButtonWrp: {
        width: '100%',
        textAlign: 'right',
        margin: '20px 0'
    }
};

export default class BuildSiteSaveButton extends Component {
    render () {
        return (
            <div style={styles.TooltipButtonWrp}>
                <Button
                    backgroundColor={colors.white}
                    onClick={() => console.log('save')}
                    text='SALVA'
                    height={42}
                    textColor={colors.primaryColor}
                    style={{float: 'right'}}
                />
            </div>
        );
    }
}