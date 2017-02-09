import React, {Component, PropTypes} from 'react';
import {PacmanLoader} from 'halogen';

const styles = {
    container: {
        boxSizing: 'border-box',
        display: '-webkit-flex',
        WebkitFlex: '0 1 auto',
        flex: '0 1 auto',
        WebkitFlexDirection: 'row',
        flexDirection: 'row',
        WebkitFlexWrap: 'wrap',
        flexWrap: 'wrap'
    },
    spinnerContainer: {
        display: '-webkit-flex',
        WebkitFlex: '0 1 auto',
        flex: '0 1 auto',
        WebkitFlexDirection: 'column',
        flexDirection: 'column',
        WebkitFlexGrow: 1,
        flexGrow: 1,
        WebkitFlexShrink: 0,
        flexShrink: 0,
        WebkitFlexBasis: '25%',
        flexBasis: '25%',
        maxWidth: '25%',
        height: '200px',
        WebkitAlignItems: 'center',
        alignItems: 'center',
        WebkitJustifyContent: 'center',
        justifyContent: 'center'
    }
};

const spinnerColor = '#4DAF7C';

export default class Spinner extends Component {
    static propTypes = {
        show: PropTypes.bool
    };

    render () {
        return this.props.show ? (
            <div style={styles.container}>
                <div style={styles.spinnerContainer}>
                    <PacmanLoader color={spinnerColor} />
                </div>
            </div>
        ) : null;
    }
}