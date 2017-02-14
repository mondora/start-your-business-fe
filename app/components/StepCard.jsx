import React, {Component, PropTypes} from 'react';
import * as colors from 'lib/colors';

export default class StepCard extends Component {

    static propTypes = {
        number: PropTypes.number,
        text: PropTypes.string,
        title: PropTypes.string
    }

    render () {
        const {number, text, title} = this.props;

        return (
            <div
                style={{
                    padding: '4vw 0',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <div
                    className='number'
                    style={{
                        backgroundColor: colors.darkGrey,
                        color: colors.white,
                        fontSize: 25,
                        width: 40,
                        height: 40,
                        textAlign: 'center',
                        borderRadius: 20,
                        marginBottom: 10
                    }}
                >
                    {number}
                </div>
                <div
                    className='title'
                    style={{
                        color: colors.primaryColor,
                        fontSize: 'calc(20px + .25vw)',
                        lineHeight: 'calc(22px + .25vw)',
                        marginBottom: 10,
                        textAlign: 'center',
                        fontWeight: '800'
                    }}
                >
                    {title}
                </div>
                <div
                    className='text'
                    style={{
                        fontSize: 'calc(14px + .25vw)',
                        lineHeight: 'calc(16px + .25vw)',
                        textAlign: 'center',
                        width: '80%'
                    }}
                >
                    {text}
                </div>
            </div>
        );
    }
}
