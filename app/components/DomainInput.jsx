import Radium from 'radium';
import React, {Component, PropTypes} from 'react';

import FormInput from 'components/FormInput';

import * as colors from 'lib/colors';
import {businessNameValidator, domainNameValidator} from 'lib/form-utils';

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
        }
    }
};

class DomainInput extends Component {
    static propTypes = {
        customDomain: PropTypes.bool,
        disabled: PropTypes.bool,
        form: PropTypes.object.isRequired
    };

    getValidator (disabled, customDomain) {
        //TODO provide right validators
        return disabled ? null : (customDomain ? domainNameValidator : businessNameValidator);
    }

    render () {
        const {businessName, domainName} = this.props.form.site;
        const {customDomain, disabled} = this.props;
        return (
            <div style={styles.inputWrp}>
                {customDomain ? 'http://' : 'www.entova.it/'}
                <FormInput
                    disabled={disabled}
                    field={customDomain ? domainName : businessName}
                    inputType='text'
                    model={`billing.site.${customDomain ? 'domainName' : 'businessName'}`}
                    validator={this.getValidator(disabled, customDomain)}
                />
            </div>
        );
    }
}

export default Radium(DomainInput);
