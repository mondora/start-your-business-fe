import React, {Component} from 'react';
import {TwitterPicker, SwatchesPicker} from 'react-color';
import reactCSS from 'reactcss';

import * as colors from 'lib/colors';

export default class CustomColorPicker extends Component {
    state = {
        color: {
            r: '241',
            g: '112',
            b: '19',
            a: '1'
        },
    };

    handleChange = (color) => {
        this.setState({color: color.rgb});
    };

    render () {
        const styles = reactCSS ({
            'default': {
                color: {
                    width: '100%',
                    height: '100px',
                    borderRadius: '2px',
                    background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
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
            },

        });

        return (
            <div>
                <p style={{fontSize: 18, marginTop: 20}}>
                    {'Scegli il colore principale per il tuo sito'}
                </p>
                <div style={styles.swatch}>
                    <div style={styles.color} color={this.state.color} />
                </div>
                <SwatchesPicker
                    width={'100%'}
                    height={'100%'}
                    color={this.state.color}
                    onChange={this.handleChange}
                    triangle={'hide'}
                />
                <p style={{fontSize: 18, marginTop: 20}}>
                    {'Oppure inserisci il codice esadecimale'}
                </p>
                <TwitterPicker
                    width={'100%'}
                    color={this.state.color}
                    colors={[]}
                    onChange={this.handleChange}
                    triangle={'hide'}
                />
            </div>
        );
    }
}
