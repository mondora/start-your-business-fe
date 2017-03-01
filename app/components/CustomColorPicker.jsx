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

export default class CustomColorPicker extends Component {
    static propTypes = {
        colors: PropTypes.object.isRequired
    };

    render () {
        const {mainColor} = this.props.colors;
        return (
            <Form model={'businessSite.siteConfig.colors'}>
                <p style={{fontSize: 18, marginTop: 20}}>
                    {'Scegli il colore principale per il tuo sito'}
                </p>
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
