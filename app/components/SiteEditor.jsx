import Radium from 'radium';
import React, {Component, PropTypes} from 'react';
import {Col, Row} from 'react-bootstrap';

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

class SiteEditor extends Component {

    static propTypes = {
        editMode: PropTypes.number,
        fetchSiteConfig: PropTypes.func.isRequired,
        instructionMessage: PropTypes.node,
        pageTitle: PropTypes.string.isRequired,
        params: PropTypes.object.isRequired,
        saveButton: PropTypes.object.isRequired,
        setEditMode: PropTypes.func.isRequired,
        setLogoImage: PropTypes.func.isRequired,
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
            saveButton: {onSave},
            upsertSiteConfig,
            siteConfig
        } = this.props;
        upsertSiteConfig(siteConfig);
        if (onSave) {
            onSave();
        }
    }

    renderSaveButton () {
        return (
            <div style={styles.buttonWrp}>
                <Button
                    backgroundColor={colors.darkGrey}
                    onClick={::this.handleTemplateSaving}
                    text={this.props.saveButton.text}
                />
            </div>
        );
    }

    renderSaveBar () {
        return (
            <Row style={{marginBottom: 25}}>
                <Col xs={12} sm={8}>
                    {this.props.instructionMessage}
                </Col>
                <Col xs={12} sm={4}>
                    {this.renderSaveButton()}
                </Col>
            </Row>
        );
    }

    render () {
        const {editMode, pageTitle, siteConfig, setEditMode, setLogoImage, setTemplate} = this.props;
        //TODO put when change plans available
        // <Icon
        //     iconName='change_payment_white'
        //     iconStyle={iconStyle(editMode === editModes.CHANGE_PAYMENT)}
        //     onClick={() => setEditMode(editModes.CHANGE_PAYMENT)}
        // />
        return (
            <div>
                <PageTeaser
                    pageTitle={pageTitle}
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
                                    setLogoImage={setLogoImage}
                                />
                                <ChangeColorWidget
                                    colors={siteConfig.colors}
                                    editMode={editMode}
                                    setEditMode={setEditMode}
                                    setLogoImage={setLogoImage}
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

export default Radium(SiteEditor);