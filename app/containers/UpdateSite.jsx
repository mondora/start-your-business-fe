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
        upsertSiteConfig: PropTypes.func.isRequired
    };

    render () {
        return (
            <SiteEditor
                instructionMessage={
                    <Alert bsStyle='success'>
                        {'Fai le modifiche al tuo sito e salva per pubblicarle subito.'}
                    </Alert>
                }
                pageTitle={'AGGIORNA IL TUO SITO'}
                resetButton={{
                    text: 'ANNULLA IMPOSTAZIONI'
                }}
                saveButton={{
                    text: 'SALVA E PUBBLICA'
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
        setImagePath: bindActionCreators(setImagePath, dispatch),
        setTemplate: templateId => dispatch(actions.change('siteConfig.element.templateId', templateId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildSite);