import React from 'react';

import {templatesIds} from 'lib/business-site-utils';

import BusinessTeaser from 'components/business/Teaser';

const styles = {
    teaserWrp: {
        height: 'auto'
    },
    image: {
        width: '100%',
        height: 'auto'
    }
};

export default class Teaser extends BusinessTeaser {

    render () {
        return (
            <div style={styles.teaserWrp}>
                {this.renderContent(templatesIds.TEMPLATE_2, styles.image)}
            </div>
        );
    }
}
