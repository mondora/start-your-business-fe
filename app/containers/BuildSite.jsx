import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';
import {browserHistory} from 'react-router';
import {Alert} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

import {setEditMode} from 'actions/ui';
import {fetch as fetchSiteConfig, setLogoImage, upsertSiteConfig} from 'actions/siteConfig';

import SiteEditor from 'components/SiteEditor';

class BuildSite extends Component {

    static propTypes = {
        editMode: PropTypes.number,
        fetchSiteConfig: PropTypes.func.isRequired,
        params: PropTypes.object.isRequired,
        setEditMode: PropTypes.func.isRequired,
        setLogoImage: PropTypes.func.isRequired,
        setTemplate: PropTypes.func.isRequired,
        siteConfig: PropTypes.object,
        upsertSiteConfig: PropTypes.func.isRequired
    };

    render () {
        return (
            <SiteEditor
                instructionMessage={
                    <Alert bsStyle='success'>
                        <strong>{'Grazie per esserti registrato! '}</strong>
                        {`Ora potrai scegliere il tuo template. Non disponi
                        di tutti i testi e immagini? Non ti preoccupare,
                        potrai modificare e aggiungere testi e immagini
                        anche in seguito.`}
                    </Alert>
                }
                pageTitle={'CONFIGURA IL TUO SITO'}
                saveButton={{
                    onSave: () => browserHistory.push('/choose-plan'),
                    text: 'SALVA E PROSEGUI >'
                }}
                {...this.props}
            />
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
        setLogoImage: bindActionCreators(setLogoImage, dispatch),
        setTemplate: templateId => dispatch(actions.change('siteConfig.element.templateId', templateId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildSite);