import React, {Component, PropTypes} from 'react';
import {FormControl} from 'react-bootstrap';

export default class DomainInput extends Component {
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
            <div>
                {this.props.customDomain ? 'http://' : 'www.wallabusiness.it/'}
                <FormControl
                    type={'text'}
                    value={this.state.domainName}
                    onChange={this.handleDomainNameChange.bind(this)}
                />
            </div>
        );
    }
}


