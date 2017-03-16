import AWS from 'aws-sdk';
import {AWS_ACCESS_KEY, AWS_COGNITO, AWS_REGION, AWS_S3_BUCKET, AWS_SECRET_KEY} from 'config';

AWS.config.update({
    region: AWS_REGION,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: AWS_COGNITO.identityPoolId
    })
});
//TODO understand why required in two places
AWS.config.credentials.accessKeyId = AWS_ACCESS_KEY;
AWS.config.credentials.secretAccessKey = AWS_SECRET_KEY;
AWS.config.accessKeyId = AWS_ACCESS_KEY;
AWS.config.secretAccessKey = AWS_SECRET_KEY;

const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: {Bucket: AWS_S3_BUCKET}
});

export function uploadImage (businessName, imageFile, imageName, successCallback) {
    const imageKey = `${encodeURIComponent(businessName)}/${imageName}`;
    s3.upload({
        Key: imageKey,
        Body: imageFile,
        ACL: 'public-read'
    }, (err, data) => {
        if (err) {
            console.error(err);
        } else if (successCallback) {
            successCallback(data.Location);
        }
    });
}

export function createFolder (businessName) {
    const folderKey = `${encodeURIComponent(businessName)}/`;
    s3.putObject({Key: folderKey}, (err, data) => {
        if (err) {
            console.error(err);
        } else {
            //TODO
            console.log(data);
        }
    });
}
