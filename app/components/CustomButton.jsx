import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

export default class CustomButton extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        onClick: PropTypes.func,
        text: PropTypes.string,
        textColor: PropTypes.string,
        type: PropTypes.string
    };

    static defaultProps = {
        backgroundColor: '#ffffff',
        textColor: '#ffffff',
        type: 'button'
    };

    render () {
        const {backgroundColor, onClick, text, textColor, type} = this.props;
        return (
            <Button
                style={{
                    backgroundColor: backgroundColor,
                    borderColor: backgroundColor,
                    height: 40,
                    paddingLeft: 50,
                    paddingRight: 50,
                    borderRadius: 20,
                    color: textColor
                }}
                onClick={onClick}
                type={type}
            >
                {text}
            </Button>
        );
    }
}


