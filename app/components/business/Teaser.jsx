import React, {Component, PropTypes} from 'react';
import {Carousel} from 'react-bootstrap';

import ImageUploader from 'components/ImageUploader';
import SaveButton from 'components/BuildSiteSaveButton';

import {editModes, getS3ImagePath} from 'lib/business-site-utils';
import * as colors from 'lib/colors';

const commonStyles = (templateId) => ({
    backgroundImg: {
        backgroundImage: `url(\'/_assets/images/template_0${templateId}/carousel01.jpg\')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top'
    },
    backgroundWidget: {
        backgroundColor: colors.blackOpacity,
        textAlign: 'center',
        padding: '60px 30px'
    },
    widgetText: {
        fontSize: 30,
        fontWeight: '700',
        lineHeight: '30px',
        marginBottom: 40,
        color: colors.white
    }
});

export default class Teaser extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        images: PropTypes.array.isRequired
    };

    renderUploadForm (templateId) {
        return (
            <div style={commonStyles(templateId).backgroundImg}>
                <div style={commonStyles(templateId).backgroundWidget}>
                    <p style={commonStyles(templateId).widgetText}>
                        {'PUOI SCEGLIERE FINO A TRE IMMAGINI PER IL TEASER'}
                        <br />
                        {'ATTENZIONE! ALMENO UNA È OBBLIGATORIA'}
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <ImageUploader />
                        <br />
                        <ImageUploader />
                        <br />
                        <ImageUploader />
                        <br />
                        <SaveButton />
                    </div>
                </div>
            </div>
        );
    }

    renderCarousel (templateId, imgStyle) {
        return (
            <Carousel>
                {this.props.images.map(img =>
                    <Carousel.Item
                        key={img.id}
                    >
                        <img src={img.id ? getS3ImagePath(img.id) : `/_assets/images/template_0${templateId}/carousel01.jpg`} style={imgStyle} />
                    </Carousel.Item>
                )}
            </Carousel>
        );
    }

    renderContent (templateId, imgStyle) {
        switch (this.props.buildSiteMode) {
            case editModes.UPLOAD_IMAGES:
                return this.renderUploadForm(templateId);
            case editModes.EDIT_TEXTS: //TODO
            default:
                return this.renderCarousel(templateId, imgStyle);
        }
    }
}