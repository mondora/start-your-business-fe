import React, {Component, PropTypes} from 'react';

export default class Header extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        headerInfo: PropTypes.object.isRequired
    };

    render () {
        const {emailAddress, phoneNumber} = this.props.headerInfo;
        return (
            <div>
                {phoneNumber}
                {emailAddress}
                {'| LOGIN | REGISTRATI |'}
            </div>
        );
    }
}