import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {actions} from 'react-redux-form';
import {Alert} from 'react-bootstrap';
import {bindActionCreators} from 'redux';

import {setEditMode} from 'actions/ui';
import {fetch as fetchSiteConfig, setImagePath, upsertSiteConfig} from 'actions/siteConfig';

import SiteEditor from 'components/SiteEditor';

class BuildSite extends Component {

    static propTypes = {
        editMode: PropTypes.number,
        fetchSiteConfig: PropTypes.func.isRequired,
        params: PropTypes.object.isRequired,
        setEditMode: PropTypes.func.isRequired,
        setImagePath: PropTypes.func.isRequired,
        setTemplate: PropTypes.func.isRequired,
        siteConfig: PropTypes.object,
        subscriptions: PropTypes.object,
        upsertSiteConfig: PropTypes.func.isRequired,
        username: PropTypes.string
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
                pageTitle={'CREA E PERSONALIZZA'}
                saveButton={{
                    onSave: () => window.location = '#/choose-plan',
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
        siteConfig: state.siteConfig.element,
        subscriptions: state.ui.productPlans.subscriptions,
        username: state.user.SYB.username
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchSiteConfig: bindActionCreators(fetchSiteConfig, dispatch),
        setEditMode: bindActionCreators(setEditMode, dispatch),
        setImagePath: bindActionCreators(setImagePath, dispatch),
        setTemplate: templateId => dispatch(actions.change('siteConfig.element.templateId', templateId)),
        upsertSiteConfig: bindActionCreators(upsertSiteConfig, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildSite);
