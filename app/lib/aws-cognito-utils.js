import {
    AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool
} from 'amazon-cognito-identity-js';
import AWS, {CognitoIdentityCredentials} from 'aws-sdk';
import {map} from 'ramda';

import {AWS_ACCESS_KEY, AWS_COGNITO, AWS_REGION, AWS_SECRET_KEY} from 'lib/config';

AWS.config.apiVersions = {
    cognitoidentityserviceprovider: '2016-04-18'
};
AWS.config.region = AWS_REGION;
AWS.config.credentials = new CognitoIdentityCredentials({
    IdentityPoolId: AWS_COGNITO.identityPoolId
});
AWS.config.accessKeyId = AWS_ACCESS_KEY;
AWS.config.secretAccessKey = AWS_SECRET_KEY;

const userPool = new CognitoUserPool({
    ClientId: AWS_COGNITO.clientId,
    UserPoolId: AWS_COGNITO.userPoolId
});

const cisp = new AWS.CognitoIdentityServiceProvider();

function getCognitoUser (username) {
    const userData = {
        Username : username,
        Pool : userPool
    };
    return new CognitoUser(userData);
}

export function authenticateUser (username, password, callback) {
    const authenticationData = {
        Username : username,
        Password : password
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const cognitoUser = getCognitoUser(username);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log(`Cogito authorizer token: ${result.getIdToken().getJwtToken()}`);
            let login = {};
            login[`cognito-idp.${AWS_REGION}.amazonaws.com/${AWS_COGNITO.userPoolId}`] = result.getIdToken().getJwtToken();
            AWS.config.credentials = new CognitoIdentityCredentials({
                IdentityPoolId : AWS_COGNITO.identityPoolId,
                Logins : login
            });
            callback({success: true});
        },

        onFailure: function (err) {
            console.error(err);
            callback({error: err});
        }
    });
}

export function confirmRegistration (username, confirmationCode, callback) {
    const cognitoUser = getCognitoUser(username);
    cognitoUser.confirmRegistration(confirmationCode, true, (err, result) => {
        if (err) {
            console.error(err);
            callback({error: err});
            return;
        }
        console.log(`call result: ${result}`);
        callback({success: true});
    });
}

export function createUserPool (businessName, callback) {
    const params = {
        PoolName: businessName
    };
    //TODO see why this give the error: TypeError: First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.
    cisp.createUserPool(params, (err, result) => {
        if (err) {
            console.error(err);
            console.error(result);
            callback({error: err});
            return;
        }
        console.log(`call result: ${result}`);
        callback({success: true});
    });
}

export function resendConfirmationCode (username) {
    const cognitoUser = getCognitoUser(username);
    cognitoUser.resendConfirmationCode((err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`call result: ${result}`);
    });
}

export function signUp (email, password, attributes, callback) {
    const attributeList = map(attr => new CognitoUserAttribute({
        Name: attr.name,
        Value: attr.value
    }), attributes);

    userPool.signUp(email, password, attributeList, null, (err, result) => {
        if (err) {
            console.error(err);
            callback({error: err});
            return;
        }
        console.log(`user name is ${result.user.getUsername()}!`);
        console.log(`call result: ${result}`);
        callback({success: true});
    });
}