import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {Col, Row, Alert} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

import {setEditMode} from 'actions/business-site';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import Button from 'components/CustomButton';
import ChooseTemplateWidget from 'components/ChooseTemplateWidget';
import PageTeaser from 'components/PageTeaser';

import BusinessHome from 'containers/business/Home';
import BusinessRoot from 'containers/business/Root';

const styles = {
    buttonWrp: {
        
    }
};

class BuildSite extends Component {
    static propTypes = {
        businessSite: PropTypes.object.isRequired,
        setEditMode: PropTypes.func.isRequired
    };

    constructor (props) {
        super(props);
        props.setEditMode(editModes.VIEW);
    }
    
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

    renderBusinessSite () {
        return (
            <BusinessRoot>
                <BusinessHome />
            </BusinessRoot>
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
                    <Row>
                        <Col xs={12} sm={3}>
                            <ChooseTemplateWidget
                                editMode={this.props.businessSite.editMode}
                                setEditMode={this.props.setEditMode}
                            />
                        </Col>
                        <Col xs={12} sm={9}>
                            {this.renderBusinessSite()}
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        businessSite: state.businessSite
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setEditMode: bindActionCreators(setEditMode, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(BuildSite));
