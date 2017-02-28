import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {FormControl} from 'react-bootstrap';

import * as colors from 'lib/colors';

const styles = {
    inputWrp: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        backgroundColor: colors.lightGrey,
        padding: '5px 5px 5px 10px',
        borderRadius: 5,
        '@media screen and (max-width: 991px)': {
            flexDirection: 'column',
            padding: 5,
            alignItems: 'flex-start'
        },
    }
};

class DomainInput extends Component {
    static propTypes = {
        customDomain: PropTypes.bool
    };

    constructor (props) {
        super(props);
        this.state = {
            domainName: ''
        };
    }

    handleDomainNameChange (e) {
        this.setState({domainName: e.target.value});
    }

    render () {
        return (
            <div style={styles.inputWrp}>
                {this.props.customDomain ? 'http://' : 'www.entova.it/'}
                <FormControl
                    type={'text'}
                    value={this.state.domainName}
                    onChange={this.handleDomainNameChange.bind(this)}
                />
            </div>
        );
    }
}

export default Radium(DomainInput);
