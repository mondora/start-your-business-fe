import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Button} from 'react-bootstrap';

import * as colors from 'lib/colors';

import Icon from 'components/Icon';

const styles = {
    buttonWrpStyle: {
        width: '48%',
        margin: '30px 20px 10px 0px',
        '@media screen and (max-width: 767px)': {
            width: '100%',
        }
    },
    buttonStyle: {
        outline: 0,
        outlineStyle: 'none',
        outlineWidth: 0,
        backgroundColor: colors.transparent,
        border: 0,
        padding: 0
    },
    subTitle: {
        fontSize: 18,
        color: colors.white,
        float: 'left'
    },
    iconStyle: {
        width: 24,
        height: 24,
        marginRight: 5
    },
    uncheckedStyle: {
        borderRadius: '100%',
        opacity: .5,
        marginRight: 5,
        marginTop: 2,
        backgroundColor: colors.white,
        width: 24,
        height: 24,
    }
};

class TemplateCard extends Component {
    static propTypes = {
        onSelect: PropTypes.func.isRequired,
        selectedTemplate: PropTypes.number,
        template: PropTypes.object.isRequired
    };

    renderIconCkecked () {
        return (
            <Icon
                iconName={'check_white'}
                iconStyle={styles.iconStyle}
            />
        );
    }

    renderIconUnckecked () {
        return (
            <div style={styles.uncheckedStyle} />
        );
    }

    render () {
        const {id, image, label} = this.props.template;
        return (
            <div style={styles.buttonWrpStyle}>
                <Button onClick={() => this.props.onSelect(id)} style={styles.buttonStyle}>
                    <div>
                        <div style={styles.subTitle}>
                            {this.props.selectedTemplate === id ? this.renderIconCkecked() : this.renderIconUnckecked()}
                        </div>
                        <p style={styles.subTitle}>{label}</p>
                    </div>
                    <div style={{clear: 'both'}} />
                    <img
                        src={image}
                        style={{
                            display: 'block',
                            height: 'auto',
                            maxWidth: '90%',
                            opacity: this.props.selectedTemplate === id ? '1' : '.5',
                            border: this.props.selectedTemplate === id
                            ? `6px solid ${colors.darkGrey}`
                            : `6px solid ${colors.white}`
                        }}
                    />
                </Button>
            </div>
        );
    }
}

export default Radium(TemplateCard);
