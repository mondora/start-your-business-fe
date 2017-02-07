import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

export default class CustomButton extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        onClick: PropTypes.func.isRequired,
        text: PropTypes.string,
        textColor: PropTypes.string
    }

    static defaultProps = {
        backgroundColor: '#ffffff',
        textColor: '#ffffff'
    }

    render () {
        const {backgroundColor, onClick, text, textColor} = this.props;
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
            >
                {text}
            </Button>
        );
    }
}


