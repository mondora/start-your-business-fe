import {CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';
import {Config, CognitoIdentityCredentials} from 'aws-sdk';
import {map} from 'ramda';

import {AWS_COGNITO, AWS_REGION} from 'lib/config';

Config.region = AWS_REGION;
Config.credentials = new CognitoIdentityCredentials({
    IdentityPoolId: AWS_COGNITO.identityPoolId
});

const userPool = new CognitoUserPool({
    ClientId: AWS_COGNITO.clientId,
    UserPoolId: AWS_COGNITO.userPoolId
});

export function registerNewUser (email, password, attributes) {
    const attributeList = map(attr => new CognitoUserAttribute({
        Name: attr.name,
        Value: attr.value
    }), attributes);

    userPool.signUp(email, password, attributeList, null, (err, result) => {
        //TODO manage a callback for result
        if (err) {
            console.error(err);
            return;
        }
        console.log(`user name is ${result.user.getUsername()}!`);
        console.log(`call result: ${result}`);
    });
}

export function confirmRegistration (username, confirmationCode) {
    var userData = {
        Username : username,
        Pool : userPool
    };

    const cognitoUser = new CognitoUser(userData);
    cognitoUser.confirmRegistration(confirmationCode, true, function(err, result) {
        //TODO manage a callback for result
        if (err) {
            console.error(err);
            return;
        }
        console.log(`call result: ${result}`);
    });
}