import R from 'ramda';
import React, {Component, PropTypes} from 'react';
import {Carousel, Glyphicon} from 'react-bootstrap';

import ImageUploader from 'components/ImageUploader';

import {editModes} from 'constants/editModes';

import * as colors from 'lib/colors';

const commonStyles = {
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
};

export default class TeaserCarousel extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        images: PropTypes.object.isRequired,
        imgStyle: PropTypes.object,
        next: PropTypes.node,
        prev: PropTypes.node,
        setImagePath: PropTypes.func.isRequired,
        templateId: PropTypes.number.isRequired
    };

    static defaultProps = {
        prev: <Glyphicon glyph='chevron-left' />,
        next: <Glyphicon glyph='chevron-right' />
    };

    getCarouselItems () {
        const {images, imgStyle, templateId} = this.props;
        return R.mapObjIndexed((img, key) => {
            const id = parseInt(key.slice(-1));
            return id === 1 || img ? (
                <Carousel.Item key={key}>
                    <img src={img ? img : `/_assets/images/template_0${templateId}/carousel01.jpg`} style={imgStyle} />
                </Carousel.Item>
            ) : null;
        }, images);
    }

    getImageUploaders (images, setImagePath) {
        return R.mapObjIndexed((img, key) =>
            <ImageUploader
                key={key}
                setImagePath={(imagePath) => setImagePath(['element', 'teaserImages', key], imagePath)}
            />
        , images);
    }

    renderUploadForm () {
        const {images, setImagePath} = this.props;
        const imageUploaders = this.getImageUploaders(images, setImagePath);
        return (
            <div style={commonStyles.backgroundWidget}>
                <p style={commonStyles.widgetText}>
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
                    {Object.keys(imageUploaders).map(key => imageUploaders[key])}
                </div>
            </div>
        );
    }

    renderCarousel () {
        const carouselItems = this.getCarouselItems();
        return (
            <Carousel nextIcon={this.props.next} prevIcon={this.props.prev}>
                {Object.keys(carouselItems).map(key => carouselItems[key])}
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
