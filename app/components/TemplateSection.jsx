import Radium from 'radium';
import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';

import * as colors from 'lib/colors';

import FeaturesIcons from 'components/FeaturesIcons';
import HomeSectionTitle from 'components/HomeSectionTitle';

const styles = {
    templateWrp: {
        position: 'relative',
        padding: '8% 0 12% 0',
        backgroundImage: 'url(\'/_assets/images/home/bg_template.jpg\')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        height: 'auto',
        marginBottom: 300,
        minHeight: 500,
        '@media screen and (max-width: 767px)': {
            marginBottom: 0,
            padding: '8% 0'
        }
    },
    templateRow: {
        '@media screen and (min-width: 767px)': {
            position: 'absolute'
        },
        '@media screen and (max-width: 767px)': {
            backgroundColor: colors.blackOpacity
        },
        width: '100%',
        margin: '0 auto'
    },
    templateImage: {
        maxHeight: '560px',
        display: 'block',
        height: 'auto',
        maxWidth: '100%',
        margin: '40px auto'
    }
};

class TemplateSection extends Component {

    getFeaturesIcons () {
        return [
            {
                icon: 'responsive_white',
                title: '100% RESPONSIVE',
                text:
                    `Lorem ipsum Do commodo in proident enim in dolor
                    cupidatat adipisicing dolore officia nisi aliqua incididunt
                    Ut veniam lorem ipsum Consectetur ut in in eu do.`
            },
            {
                icon: 'template_white',
                title: '2 TEMPLATE ACCATTIVANTI',
                text:
                    `Lorem ipsum Do commodo in proident enim in dolor
                    cupidatat adipisicing dolore officia nisi aliqua incididunt
                    Ut veniam lorem ipsum Consectetur ut in in eu do.`
            },
            {
                icon: 'customizable_white',
                title: 'FACILI DA PERSONALIZZARE',
                text:
                    `Lorem ipsum Do commodo in proident enim in dolor
                    cupidatat adipisicing dolore officia nisi aliqua incididunt
                    Ut veniam lorem ipsum Consectetur ut in in eu do.`
            }
        ];
    }

    renderTemplateImages () {
        return (
            <div className='container' style={styles.templateRow}>
                <Row>
                    <Col xs={12} sm={6}>
                        <img src='/_assets/images/home/template1.png' style={styles.templateImage} />
                    </Col>
                    <Col xs={12} sm={6}>
                        <img src='/_assets/images/home/template2.png' style={styles.templateImage} />
                    </Col>
                </Row>
            </div>
        );
    }

    render () {
        return (
            <div style={styles.templateWrp}>
                <div className='container' style={{textAlign: 'center'}}>
                    <HomeSectionTitle
                        subtitle={'DESIGN'}
                        textColor={colors.white}
                        title={'SCEGLI UN TEMPLATE'}
                        description={
                            `Entova.it ti offre la possibilità di scegliere tra
                            i vari templates preimpostati e di personalizzarli
                            come vuoi tu`
                        }
                    />
                    <Row>
                        {this.getFeaturesIcons().map((featureIcon, index) =>
                            <Col key={index} xs={12} sm={4} style={{paddingTop: 40, paddingBottom: 40}}>
                                <FeaturesIcons
                                    icon={featureIcon.icon}
                                    iconStyle={{margin: '0 auto', width: 80}}
                                    title={featureIcon.title}
                                    titleColor={colors.primaryColor}
                                    textColor={colors.white}
                                    text={featureIcon.text}
                                />
                            </Col>
                        )}
                    </Row>
                </div>
                {this.renderTemplateImages()}
            </div>
        );
    }
}

export default Radium(TemplateSection);
