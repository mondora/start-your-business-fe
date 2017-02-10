import React, {Component} from 'react';
import {connect} from 'react-redux';

import Button from 'components/CustomButton';

const styles = {
    part1Container: {
        backgroundImage: 'url(\'./_assets/images/home1.jpeg\')',
        height: 800,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    }
};

class ChoseTemplateContainer extends Component {

    render () {
        return (
            <div style={{backgroundColor: '#eae9ed'}}>
                <div style={styles.part1Container}>
                    <Button
                        backgroundColor={'#708090'}
                        text={'SALVA E PROSEGUI >'}
                    />
                </div>
                <div style={{height: 300}} />
            </div>
        );
    }
}

const mapStateToProps = () => {
    return {};
};

const mapDispatchToProps = () => {
    return {};
};


const ChoseTemplate = connect(mapStateToProps, mapDispatchToProps)(ChoseTemplateContainer);

export default ChoseTemplate;