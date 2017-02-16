import React, {Component, PropTypes} from 'react';

import * as colors from 'lib/colors';

const errorsWrp = {
    display: 'block',
    borderRadius: '4px',
    margin: '2px 0',
    marginBottom: '20px',
    padding: '5px 10px',
    border: `1px solid ${colors.errorText}`,
    backgroundColor: colors.backgroundError,
    color: colors.errorText
};

export default class FormErrorMessage extends Component {
    static propTypes = {
        message: PropTypes.string
    };

    render () {
        return this.props.message ? (
            <strong style={errorsWrp}>
                {this.props.message}
            </strong>
        ) : null;
    }
}