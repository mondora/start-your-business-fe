import React, {Component, PropTypes} from 'react';

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
    static propTypes = {
        onClick: PropTypes.func
    };

    static defaultProps = {
        onClick: () => console.log('save')
    }

    render () {
        return (
            <div style={styles.TooltipButtonWrp}>
                <Button
                    backgroundColor={colors.white}
                    onClick={this.props.onClick}
                    text='SALVA'
                    height={42}
                    textColor={colors.primaryColor}
                    style={{float: 'right'}}
                />
            </div>
        );
    }
}
