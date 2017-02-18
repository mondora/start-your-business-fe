import Radium from 'radium';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {Col, Row, Alert} from 'react-bootstrap';

import * as colors from 'lib/colors';

import Button from 'components/CustomButton';
import PageTeaser from 'components/PageTeaser';

const styles = {
    buttonWrp: {
        
    }
};

class BuildSite extends Component {

    renderSaveBar () {
        return (
            <Row>
                <Col xs={12} sm={8}>
                    <Alert bsStyle='success'>
                        <strong>{'Holy guacamole!'}</strong>
                    </Alert>
                </Col>
                <Col xs={12} sm={4}>
                    <div style={styles.buttonWrp}>
                        <Button
                            backgroundColor={colors.darkGrey}
                            onClick={() => browserHistory.push('/choose-plan')}
                            text={'SALVA E PROSEGUI >'}
                        />
                    </div>
                </Col>
            </Row>
        );
    }

    render () {
        return (
            <div>
                <PageTeaser
                    pageTitle={'CONFIGURA IL TUO SITO'}
                />
                <div className='container'>
                    {this.renderSaveBar()}
                </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(Radium(BuildSite));
