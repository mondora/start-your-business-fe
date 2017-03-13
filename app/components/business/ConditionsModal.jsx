import React, {Component, PropTypes} from 'react';
import {Modal} from 'react-bootstrap';

import * as colors from 'lib/colors';

const styles = {
    title: {
        color: colors.black,
        fontSize: '1.6em',
        lineHeight: '1em',
        fontWeight: 700,
        paddingTop: 10
    },
    text: {
        fontSize: '1.1em',
        lineHeight: '1.5em',
        paddingBottom: 30,
        color: colors.templateGreyText
    }
};

export default class ConditionssModal extends Component {
    static propTypes = {
        onClose: PropTypes.func,
        show: PropTypes.bool
    };

    closeModal () {
        this.props.onClose();
    }

    render () {
        return (
            <div>
                <Modal show={this.props.show} bsSize='large' onHide={this.closeModal.bind(this)}>
                    <Modal.Header closeButton={true} style={{border: 0}}>
                        <Modal.Title>
                            <p style={styles.title}>{'TERMS AND CONDITIONS:'}</p>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div style={styles.text}>
                            <p>
                                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec et interdum justo. Quisque vitae placerat turpis.
                                    Integer sagittis eget tortor eu porta. Quisque nec neque
                                    nec elit laoreet facilisis ac vel lectus. Aenean vitae sollicitudin ante,
                                    quis imperdiet justo. Nulla at sapien fermentum mi gravida vehicula
                                    blandit quis sapien. Nam sodales enim id lacus tincidunt, sit amet
                                    bibendum lorem sollicitudin. Morbi aliquam dolor at sem fermentum blandit.`}
                            </p>
                            <p>
                                {`Sed sollicitudin turpis quis erat facilisis, id hendrerit massa ornare.
                                    Maecenas dapibus fermentum eros. Suspendisse tincidunt velit porttitor
                                    hendrerit faucibus. Integer accumsan sagittis nunc, quis auctor tellus
                                    iaculis varius. Integer ut felis porttitor, rutrum ligula eu, lacinia tellus.
                                    Suspendisse finibus efficitur iaculis. Vivamus luctus tincidunt dolor.
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                    cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus.`}
                            </p>
                            <p>
                                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec et interdum justo. Quisque vitae placerat turpis.
                                    Integer sagittis eget tortor eu porta. Quisque nec neque
                                    nec elit laoreet facilisis ac vel lectus. Aenean vitae sollicitudin ante,
                                    quis imperdiet justo. Nulla at sapien fermentum mi gravida vehicula
                                    blandit quis sapien. Nam sodales enim id lacus tincidunt, sit amet
                                    bibendum lorem sollicitudin. Morbi aliquam dolor at sem fermentum blandit.`}
                            </p>
                            <p>
                                {`Sed sollicitudin turpis quis erat facilisis, id hendrerit massa ornare.
                                    Maecenas dapibus fermentum eros. Suspendisse tincidunt velit porttitor
                                    hendrerit faucibus. Integer accumsan sagittis nunc, quis auctor tellus
                                    iaculis varius. Integer ut felis porttitor, rutrum ligula eu, lacinia tellus.
                                    Suspendisse finibus efficitur iaculis. Vivamus luctus tincidunt dolor.
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                                    cubilia Curae; Interdum et malesuada fames ac ante ipsum primis in faucibus.`}
                            </p>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}
