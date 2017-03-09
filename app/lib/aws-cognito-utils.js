import {
    AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool
} from 'amazon-cognito-identity-js';
import AWS, {CognitoIdentityCredentials} from 'aws-sdk';
import {map} from 'ramda';

import {AWS_ACCESS_KEY, AWS_COGNITO, AWS_REGION, AWS_SECRET_KEY} from 'lib/config';

AWS.config.region = AWS_REGION;
AWS.config.credentials = new CognitoIdentityCredentials({
    IdentityPoolId: AWS_COGNITO.identityPoolId
});
//TODO understand why required in two places 
AWS.config.credentials.accessKeyId = AWS_ACCESS_KEY;
AWS.config.credentials.secretAccessKey = AWS_SECRET_KEY;
AWS.config.accessKeyId = AWS_ACCESS_KEY;
AWS.config.secretAccessKey = AWS_SECRET_KEY;

const sybUserPool = new CognitoUserPool({
    ClientId: AWS_COGNITO.clientId,
    UserPoolId: AWS_COGNITO.userPoolId
});

const cisp = new AWS.CognitoIdentityServiceProvider();

function getUserPool (userPoolConfig) {
    return new CognitoUserPool({
        ClientId: userPoolConfig.clientId,
        UserPoolId: userPoolConfig.userPoolId
    });
}

function getCognitoUser (username, userPoolConfig) {
    const userData = {
        Username: username,
        Pool: userPoolConfig ? getUserPool(userPoolConfig) : sybUserPool
    };
    return new CognitoUser(userData);
}

export function authenticateUser (username, password, callback, userPoolConfig) {
    const authenticationData = {
        Username : username,
        Password : password
    };
    const authenticationDetails = new AuthenticationDetails(authenticationData);
    const cognitoUser = getCognitoUser(username, userPoolConfig);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess: function (result) {
            console.log(`Cogito authorizer token: ${result.getIdToken().getJwtToken()}`);
            let login = {};
            const userPoolId = userPoolConfig ? userPoolConfig.userPoolId : AWS_COGNITO.userPoolId;
            const identityPoolId = userPoolConfig ? userPoolConfig.identityPoolId : AWS_COGNITO.identityPoolId;
            login[`cognito-idp.${AWS_REGION}.amazonaws.com/${userPoolId}`] = result.getIdToken().getJwtToken();
            AWS.config.credentials = new CognitoIdentityCredentials({
                IdentityPoolId : identityPoolId,
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

export function confirmRegistration (username, confirmationCode, callback, userPoolConfig) {
    const cognitoUser = getCognitoUser(username, userPoolConfig);
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

export function resendConfirmationCode (username, userPoolConfig) {
    const cognitoUser = getCognitoUser(username, userPoolConfig);
    cognitoUser.resendConfirmationCode((err, result) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`call result: ${result}`);
    });
}

export function signUp (email, password, attributes, callback, userPoolConfig) {
    const attributeList = map(attr => new CognitoUserAttribute({
        Name: attr.name,
        Value: attr.value
    }), attributes);
    const userPool = userPoolConfig ? getUserPool(userPoolConfig) : sybUserPool;
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