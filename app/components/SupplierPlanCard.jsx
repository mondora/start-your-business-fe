import React, {Component, PropTypes} from 'react';
import {Glyphicon} from 'react-bootstrap';

import Button from 'components/CustomButton';

const styles = {
    container: {
        backgroundColor: '#fff',
        width: 300,
        height: 400,
        borderRadius: 10
    },
    name: {
        color: '#fff',
        fontSize: 25,
    },
    line: {
        border: 'solid #fff 1px',
        display: 'block',
        width: 100
    },
    price: {
        color: '#fff',
        fontSize: 40
    },
    frequency: {
        color: '#fff',
        fontSize: 20
    },
    top: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: '10px 10px 0 0',
        height: 200,
        width: '100%',
        padding: 10
    },
    bottom: {
        height: 150,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: 10
    },
    confirmButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
};

export default class SupplierPlanCard extends Component {

    static propTypes = {
        backgroundColor: PropTypes.string,
        features: PropTypes.arrayOf(PropTypes.string),
        name: PropTypes.string,
        onConfirm: PropTypes.func.isRequired,
        price: PropTypes.number
    }

    static defaultProps = {
        features: [],
        backgroundColor: '#ffffff'
    }

    render () {
        const {backgroundColor, features, name, onConfirm, price} = this.props;
        return (
            <div style={styles.container}>
                <div
                    className='top'
                    style={{
                        ...styles.top,
                        ...{backgroundColor: backgroundColor}
                    }}
                >
                    <div style={styles.name}>
                        {name}
                    </div>
                    <hr style={styles.line} />
                    <div style={styles.price}>
                        {'€'}{price}
                    </div>
                    <div style={styles.frequency}>
                        {'(annui)'}
                    </div>
                </div>
                <div style={styles.bottom}>
                    {features.map((f, i) => (
                        <div key={i}>
                            <Glyphicon
                                glyph='glyphicon glyphicon-ok-circle'
                                style={{
                                    color: backgroundColor,
                                    fontSize: 30,
                                    paddingRight: 10
                                }}
                            />
                            {f}
                        </div>
                    ))}
                </div>
                <div style={styles.confirmButtonContainer} >
                    <Button
                        backgroundColor={'#d8d8d8'}
                        onClick={onConfirm}
                        text={'INIZIA ORA!'}
                    />
                </div>
            </div>
        );
    }
}


