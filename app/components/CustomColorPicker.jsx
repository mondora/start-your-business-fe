import React, {Component, PropTypes} from 'react';
import {TwitterPicker, SwatchesPicker} from 'react-color';
import {connect} from 'react-redux';
import {actions, Form} from 'react-redux-form';
import reactCSS from 'reactcss';

import * as colors from 'lib/colors';

class WrappedSwatchesPicker extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        model: PropTypes.string.isRequired
    };

    render () {
        return (
            <SwatchesPicker
                {...this.props}
                onChange={e => this.props.dispatch(actions.change(this.props.model, e.hex))}
            />
        );
    }
}

const SwatchesPickerField = connect(s => s)(WrappedSwatchesPicker);

class WrappedTwitterPicker extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        model: PropTypes.string.isRequired
    };

    render () {
        return (
            <TwitterPicker
                {...this.props}
                onChange={e => this.props.dispatch(actions.change(this.props.model, e.hex))}
            />
        );
    }
}

const TwitterPickerField = connect(s => s)(WrappedTwitterPicker);

const styles = (color) => reactCSS({
    default: {
        color: {
            width: '100%',
            height: '100px',
            borderRadius: '2px',
            background: color
        },
        swatch: {
            width: '100%',
            padding: '16px',
            background: colors.white,
            borderRadius: '4px',
            display: 'inline-block',
            cursor: 'pointer',
            boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 5px'
        }
    }
});

export default class CustomColorPicker extends Component {
    static propTypes = {
        colors: PropTypes.object.isRequired
    };

    render () {
        const {mainColor} = this.props.colors;
        const {color, swatch} = styles(mainColor);
        return (
            <Form model={'businessSite.siteConfig.colors'}>
                <p style={{fontSize: 18, marginTop: 20}}>
                    {'Scegli il colore principale per il tuo sito'}
                </p>
                <div style={swatch}>
                    <div style={color} color={mainColor} />
                </div>
                <SwatchesPickerField
                    color={mainColor}
                    height={'100%'}
                    model='businessSite.siteConfig.colors.mainColor'
                    triangle={'hide'}
                    width={'100%'}
                />
                <p style={{fontSize: 18, marginTop: 20}}>
                    {'Oppure inserisci il codice esadecimale'}
                </p>
                <TwitterPickerField
                    color={mainColor}
                    colors={[]}
                    model='businessSite.siteConfig.colors.mainColor'
                    triangle={'hide'}
                    width={'100%'}
                />
            </Form>
        );
    }
}
