import React, {Component, PropTypes} from 'react';

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
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <div
                    className='number'
                    style={{
                        backgroundColor: '#39414F',
                        color: '#ffffff',
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
                        color: '#20bda9',
                        fontSize: 18,
                        marginBottom: 10,
                        textAlign: 'center'
                    }}
                >
                    {title}
                </div>
                <div
                    className='text'
                    style={{textAlign: 'center', width: 200}}
                >
                    {text}
                </div>
            </div>
        );
    }
}


