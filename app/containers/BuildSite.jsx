import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {Col, Row, Alert} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

import {setEditMode, setTemplate} from 'actions/business-site';

import {editModes} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

import Button from 'components/CustomButton';
import ChangeColorWidget from 'components/ChangeColorWidget';
import ChangeLogoWidget from 'components/ChangeLogoWidget';
import ChooseTemplateWidget from 'components/ChooseTemplateWidget';
import Icon from 'components/Icon';
import PageTeaser from 'components/PageTeaser';

import BusinessHome from 'containers/business/Home';
import BusinessRoot from 'containers/business/Root';

const styles = {
    buttonWrp: {
        
    }
};

const iconStyle = (active) => ({
    display: 'block',
    width: 55,
    float: 'left',
    marginTop: '-8px',
    backgroundColor: active ? colors.primaryColor : colors.primaryColorLight
});

class BuildSite extends Component {
    static propTypes = {
        businessSite: PropTypes.object.isRequired,
        setEditMode: PropTypes.func.isRequired,
        setTemplate: PropTypes.func.isRequired
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
                                selectTemplate={this.props.setTemplate}
                                selectedTemplateId={this.props.businessSite.siteConfig.templateId}
                                setEditMode={this.props.setEditMode}
                            />
                            <ChangeLogoWidget
                                editMode={this.props.businessSite.editMode}
                                setEditMode={this.props.setEditMode}
                            />
                            <ChangeColorWidget
                                editMode={this.props.businessSite.editMode}
                                setEditMode={this.props.setEditMode}
                            />
                            <Icon
                                iconName='change_image_white'
                                iconStyle={iconStyle(this.props.businessSite.editMode === editModes.UPLOAD_IMAGES)}
                                onClick={() => this.props.setEditMode(editModes.UPLOAD_IMAGES)}
                            />
                            <Icon
                                iconName='change_text_white'
                                iconStyle={iconStyle(this.props.businessSite.editMode === editModes.EDIT_TEXTS)}
                                onClick={() => this.props.setEditMode(editModes.EDIT_TEXTS)}
                            />
                            <Icon
                                iconName='change_payment_white'
                                iconStyle={iconStyle(this.props.businessSite.editMode === editModes.CHANGE_PAYMENT)}
                                onClick={() => this.props.setEditMode(editModes.CHANGE_PAYMENT)}
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
        setEditMode: bindActionCreators(setEditMode, dispatch),
        setTemplate: bindActionCreators(setTemplate, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(BuildSite));
