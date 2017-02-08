import React, {Component} from 'react';

import Button from 'components/CustomButton';

const styles = {
    container: {
    }
};

export default class Footer extends Component {

    render () {
        return (
            <div style={styles.container} >
                <Button
                    backgroundColor={'#20bda9'}
                    text={'SERVE AIUTO ?'}
                />
            </div>
        );
    }
}


