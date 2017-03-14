import React, {Component, PropTypes} from 'react';
import {Carousel, Glyphicon} from 'react-bootstrap';

import ImageUploader from 'components/ImageUploader';
import SaveButton from 'components/BuildSiteSaveButton';

import {editModes} from 'constants/editModes';
import {getS3ImagePath} from 'lib/business-site-utils';
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

export default class TeaserCarousel extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        images: PropTypes.array.isRequired,
        imgStyle: PropTypes.object,
        next: PropTypes.node,
        prev: PropTypes.node,
        templateId: PropTypes.number.isRequired,
    };

    static defaultProps = {
        prev: <Glyphicon glyph='chevron-left' />,
        next: <Glyphicon glyph='chevron-right' />
    }

    renderUploadForm () {
        const {templateId} = this.props;
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

    renderCarousel () {
        const {templateId, imgStyle} = this.props;
        return (
            <Carousel nextIcon={this.props.next} prevIcon={this.props.prev}>
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

    render () {
        const {buildSiteMode} = this.props;
        switch (buildSiteMode) {
            case editModes.UPLOAD_IMAGES:
                return this.renderUploadForm();
            case editModes.EDIT_TEXTS: //TODO
            default:
                return this.renderCarousel();
        }
    }

}
