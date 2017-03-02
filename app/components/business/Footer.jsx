import React, {Component, PropTypes} from 'react';

import FormInput from 'components/FormInput';

import * as colors from 'lib/colors';

const commonStyle = {
    bottomFooter: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media screen and (max-width: 500px)': {
            flexDirection: 'column',
            alignItems: 'flex-start'
        }
    },
    bottomFooterWrp: {
        backgroundColor: colors.templateBottomFooterBg,
        color: colors.grey,
        fontSize: 12
    },
    bottomLegal: {
        '@media screen and (max-width: 767px)': {
            paddingTop: '10px'
        }
    },
    footerCol: {
        color: colors.lightGrey,
        fontSize: 14,
        '@media screen and (max-width: 991px)': {
            marginBottom: 20
        }
    },
    footerColTitle: {
        fontSize: 18,
        textTransform: 'uppercase',
        color: colors.white
    },
    footerContainer: {
        backgroundColor: colors.templateFooterBg
    },
    footerPayment: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '10px 0',
        '@media screen and (max-width: 767px)': {
            justifyContent: 'flex-start'
        }
    },
    imgPayment: {
        display: 'inline-block',
        maxWidth: '50px',
        height: 'auto',
        marginRight: 10,
        marginBottom: 5
    }
};

export default class Footer extends Component {
    static propTypes = {
        buildSiteMode: PropTypes.number,
        footerInfo: PropTypes.object.isRequired,
        form: PropTypes.object
    };

    getCommonStyle () {
        return commonStyle;
    }
    
    renderLink (buildSiteMode, path, children, style) {
        return (
            <a href={buildSiteMode ? null : path} style={style}>
                {children}
            </a>
        );
    }
    
    renderTextField (isEditMode, fieldName, placeholder, readNode) {
        return isEditMode ? (
            <FormInput
                field={this.props.form[fieldName]}
                inputType='text'
                model={`businessSite.siteConfig.footer.${fieldName}`}
                placeholder={placeholder}
                inputStyle={{
                    color: colors.darkGrey,
                    fontWeight: '300'
                }}
                style={{margin: 0, width: '100vw'}}
            />
        ) : readNode;
    }
    
    renderPaymentImages () {
        return (
            <div style={commonStyle.footerPayment}>
                <img src='../_assets/images/template_01/payment01.png' style={commonStyle.imgPayment} />
                <img src='../_assets/images/template_01/payment02.png' style={commonStyle.imgPayment} />
                <img src='../_assets/images/template_01/payment03.png' style={commonStyle.imgPayment} />
                <img src='../_assets/images/template_01/payment04.png' style={commonStyle.imgPayment} />
            </div>
        );
    }
    
    renderLegalInfo (isEditMode) {
        return this.renderTextField(isEditMode, 'bottom', '© 2017 Nome Azienda - PIVA: 0123456789',
            <span style={commonStyle.bottomLegal}>{this.props.footerInfo.bottom}</span>
        );
    }
    
    renderCompanyAddress (isEditMode) {
        const {companyName, line1, line2} = this.props.footerInfo;
        return (
            <div>
                {this.renderTextField(isEditMode, 'companyName', 'Nome Azienda',
                    <span style={commonStyle.footerColTitle}>
                        {companyName}
                    </span>
                )}
                <br />
                {this.renderTextField(isEditMode, 'line1', 'Via Giosuè Carducci, 10', line1)}
                <br />
                {this.renderTextField(isEditMode, 'line2', '20100 Milano (MI)', line2)}
            </div>    
        );
    }
    
    renderCompanyContact (isEditMode, buildSiteMode) {
        const {line3, line4} = this.props.footerInfo;
        return (
            <div>
                <br />
                {this.renderLink(
                    buildSiteMode,
                    'mailto:info@maildisupporto.it',
                    this.renderTextField(isEditMode, 'line3', 'Email: info@maildisupporto.it', line3),
                    {color: colors.lightGrey}
                )}
                <br />
                {this.renderTextField(isEditMode, 'line4', 'Tel: 012-3456789', line4)}
            </div>
        );
    }
}