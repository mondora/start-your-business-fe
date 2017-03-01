export const editModes = {
    VIEW: 1,
    CHOOSE_TEMPLATE: 2,
    UPLOAD_LOGO: 3,
    CHOOSE_COLOR: 4,
    UPLOAD_IMAGES: 5,
    EDIT_TEXTS: 6,
    CHANGE_PAYMENT: 7
};

export const templatesIds = {
    TEMPLATE_1: 1,
    TEMPLATE_2: 2
};

export const templates = [
    {
        id: templatesIds.TEMPLATE_1,
        image: './_assets/images/home/template1.jpg',
        label: 'template 1'
    },
    {
        id: templatesIds.TEMPLATE_2,
        image: './_assets/images/home/template2.jpg',
        label: 'template 2'
    }
];

//TODO decide how persist users's images and retrieve them
export function getS3ImagePath (imageId) {
    return imageId;
}
