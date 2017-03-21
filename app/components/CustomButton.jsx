import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';
import * as colors from 'lib/colors';

export default class CustomButton extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        border: PropTypes.string,
        fontSize: PropTypes.number,
        height: PropTypes.number,
        onClick: PropTypes.func,
        padding: PropTypes.number,
        text: PropTypes.string,
        textColor: PropTypes.string,
        type: PropTypes.string
    };

    static defaultProps = {
        backgroundColor: colors.primaryColor,
        border: `1px solid ${colors.transparent}`,
        height: 52,
        textColor: colors.white,
        type: 'button',
        fontSize: 52 / 3,
        paddingLeft: 30,
        paddingRight: 30
    };

    render () {
        const {backgroundColor, border, height, onClick, text, textColor, type, fontSize, padding} = this.props;
        return (
            <Button
                style={{
                    backgroundColor: backgroundColor,
                    border: border,
                    height: height,
                    paddingLeft: padding ? padding : 30,
                    paddingRight: padding ? padding : 30,
                    minWidth: 60,
                    borderRadius: 100,
                    color: textColor,
                    fontSize: fontSize ? fontSize : height / 3,
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
