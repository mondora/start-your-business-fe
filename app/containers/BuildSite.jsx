import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';
import {browserHistory} from 'react-router';
import {Col, Row, Alert} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

import {setEditMode} from 'actions/ui';
import {fetch as fetchSiteConfig, setTemplate, upsertSiteConfig} from 'actions/siteConfig';

import {editModes} from 'constants/editModes';
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
        editMode: PropTypes.number,
        fetchSiteConfig: PropTypes.func.isRequired,
        params: PropTypes.object.isRequired,
        setEditMode: PropTypes.func.isRequired,
        setTemplate: PropTypes.func.isRequired,
        siteConfig: PropTypes.object,
        upsertSiteConfig: PropTypes.func.isRequired
    };

    componentWillMount () {
        const {params: {businessId}, setEditMode, fetchSiteConfig} = this.props;
        setEditMode(editModes.VIEW);
        fetchSiteConfig(businessId);
    }

    handleTemplateSaving () {
        const {
            upsertSiteConfig,
            siteConfig
        } = this.props;
        upsertSiteConfig(siteConfig);
        // browserHistory.push('/choose-plan');
    }

    renderSaveButton () {
        return (
            <div style={styles.buttonWrp}>
                <Button
                    backgroundColor={colors.darkGrey}
                    onClick={::this.handleTemplateSaving}
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

    render () {
        const {editMode, siteConfig, setEditMode, setTemplate} = this.props;
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
                                    editMode={editMode}
                                    selectTemplate={setTemplate}
                                    selectedTemplateId={siteConfig.templateId}
                                    setEditMode={setEditMode}
                                />
                                <ChangeLogoWidget
                                    editMode={editMode}
                                    setEditMode={setEditMode}
                                />
                                <ChangeColorWidget
                                    colors={siteConfig.colors}
                                    editMode={editMode}
                                    setEditMode={setEditMode}
                                />
                                <Icon
                                    iconName='change_image_white'
                                    iconStyle={iconStyle(editMode === editModes.UPLOAD_IMAGES)}
                                    onClick={() => setEditMode(editModes.UPLOAD_IMAGES)}
                                />
                                <Icon
                                    iconName='change_text_white'
                                    iconStyle={iconStyle(editMode === editModes.EDIT_TEXTS)}
                                    onClick={() => setEditMode(editModes.EDIT_TEXTS)}
                                />
                                <Icon
                                    iconName='change_payment_white'
                                    iconStyle={iconStyle(editMode === editModes.CHANGE_PAYMENT)}
                                    onClick={() => setEditMode(editModes.CHANGE_PAYMENT)}
                                />
                            </div>
                            <div style={{width:'calc(100% - 65px)', float: 'right', border: `2px solid ${colors.lightGrey}`, overflow: 'hidden'}}>
                                <BusinessRoot>
                                    <BusinessHome />
                                </BusinessRoot>
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
        editMode: state.ui.editMode,
        siteConfig: state.siteConfig.element
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        upsertSiteConfig: bindActionCreators(upsertSiteConfig, dispatch),
        fetchSiteConfig: bindActionCreators(fetchSiteConfig, dispatch),
        setEditMode: bindActionCreators(setEditMode, dispatch),
        setTemplate: templateId => dispatch(actions.change('siteConfig.element.templateId', templateId))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Radium(BuildSite));
