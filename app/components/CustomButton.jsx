import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import * as colors from 'lib/colors';

export default class CustomButton extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        border: PropTypes.string,
        height: PropTypes.number,
        onClick: PropTypes.func,
        text: PropTypes.string,
        textColor: PropTypes.string,
        type: PropTypes.string
    };

    static defaultProps = {
        backgroundColor: colors.primaryColor,
        border: colors.transparent,
        height: 52,
        textColor: colors.white,
        type: 'button'
    };

    render () {
        const {backgroundColor, border, height, onClick, text, textColor, type} = this.props;
        return (
            <Button
                style={{
                    backgroundColor: backgroundColor,
                    borderColor: border,
                    height: height,
                    paddingLeft: 30,
                    paddingRight: 30,
                    minWidth: 100,
                    borderRadius: 100,
                    color: textColor,
                    fontSize: height / 3,
                    fontWeight: 800,
                    outline: 0,
                    outlineStyle: 'none',
                    outlineWidth: 0
                }}
                onClick={onClick}
                type={type}
            >
                {text}
            </Button>
        );
    }
}
