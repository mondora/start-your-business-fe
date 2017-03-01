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

import BusinessHome01 from 'containers/business01/Home';
import BusinessRoot01 from 'containers/business01/Root';
import BusinessHome02 from 'containers/business02/Home';
import BusinessRoot02 from 'containers/business02/Root';

const styles = {
    buttonWrp: {
        float: 'right'
    }
};

const iconStyle = (active) => ({
    display: 'block',
    borderRadius: '100%',
    marginBottom: '10px',
    padding: 4,
    width: 52,
    height: 52,
    backgroundColor: active ? colors.primaryColor : colors.primaryColorLight
});

class BuildSite extends Component {
    static propTypes = {
        businessSite: PropTypes.object.isRequired,
        setEditMode: PropTypes.func.isRequired,
        setTemplate: PropTypes.func.isRequired
    };

    componentWillMount () {
        this.props.setEditMode(editModes.VIEW);
    }

    renderSaveButton () {
        return (
            <div style={styles.buttonWrp}>
                <Button
                    backgroundColor={colors.darkGrey}
                    onClick={() => browserHistory.push('/choose-plan')}
                    text={'SALVA E PROSEGUI >'}
                />
            </div>
        );
    }

    renderSaveBar () {
        return (
            <Row style={{marginBottom: 25}}>
                <Col xs={12} sm={8}>
                    <Alert bsStyle='success'>
                        <strong>{'Grazie per esserti registrato! '}</strong>
                        {`Ora potrai scegliere il tuo template. Non disponi
                        di tutti i testi e immagini? Non ti preoccupare,
                        potrai modificare e aggiungere testi e immagini
                        anche in seguito.`}
                    </Alert>
                </Col>
                <Col xs={12} sm={4}>
                    {this.renderSaveButton()}
                </Col>
            </Row>
        );
    }

    renderBusinessSite () {
        switch (this.props.businessSite.siteConfig.templateId) {
            case 1:
                return (
                    <BusinessRoot01>
                        <BusinessHome01 />
                    </BusinessRoot01>
                );
            case 2:
                return (
                    <BusinessRoot02>
                        <BusinessHome02 />
                    </BusinessRoot02>
                );
            default:
                return (
                    <BusinessRoot02>
                        <BusinessHome02 />
                    </BusinessRoot02>
                );
        }

    }

    render () {
        return (
            <div>
                <PageTeaser
                    pageTitle={'CONFIGURA IL TUO SITO'}
                />
                <div className='container'>
                    {this.renderSaveBar()}
                    <Row style={{marginBottom: 25}}>
                        <Col xs={12}>
                            <div style={{width: 65, float: 'left'}}>
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
                                    colors={this.props.businessSite.siteConfig.colors}
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
                            </div>
                            <div style={{width:'calc(100% - 65px)', float: 'right', border: `2px solid ${colors.lightGrey}`, overflow: 'hidden'}}>
                                {this.renderBusinessSite()}
                            </div>
                        </Col>
                    </Row>
                    <Row style={{marginBottom: 100}}>
                        <Col xs={12}>
                            {this.renderSaveButton()}
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
