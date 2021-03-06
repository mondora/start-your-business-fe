import React from 'react';

import FormInput from 'components/FormInput';
import FormInputSelect from 'components/FormInputSelect';
import FormTextarea from 'components/FormTextarea';

export const templatesIds = {
    TEMPLATE_1: 1,
    TEMPLATE_2: 2
};

export const templates = [
    {
        id: templatesIds.TEMPLATE_1,
        image: '/_assets/images/home/template1.jpg',
        label: 'template 1'
    },
    {
        id: templatesIds.TEMPLATE_2,
        image: '/_assets/images/home/template2.jpg',
        label: 'template 2'
    }
];

export function getSelectField (isEditMode, model, readNode, options) {
    return isEditMode ? (
        <FormInputSelect
            model={model}
            options={options}
        />
    ) : readNode;
}

export function getTextField (isEditMode, field, model, placeholder, readNode, inputStyle, style, validator) {
    return isEditMode ? (
        <FormInput
            field={field}
            inputType='text'
            model={model}
            placeholder={placeholder}
            inputStyle={inputStyle}
            style={style}
            validator={validator}
        />
    ) : readNode;
}

export function getTextAreaField (isEditMode, field, model, placeholder, readNode, textareaStyle, style) {
    return isEditMode ? (
        <FormTextarea
            field={field}
            model={model}
            placeholder={placeholder}
            textareaStyle={textareaStyle}
            style={style}
        />
    ) : readNode;
}

export function getLink (buildSiteMode, path, children, style, target) {
    return (
        <a href={buildSiteMode ? null : path} style={style} target={target}>
            {children}
        </a>
    );
}