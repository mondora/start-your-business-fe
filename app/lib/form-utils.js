import validator from 'validator';

export function genericRequiredValidator (val) {
    return (!val || validator.isEmpty(val.trim())) && 'Campo richiesto';
}

export function requiredEmailValidator (val) {
    return genericRequiredValidator(val) || (!validator.isEmail(val) && 'Indirizzo email non valido');
}

export function requiredPasswordValidator (val) {
    //TODO
    /***
        Minimum length 8
        Require numbers
        Require special character
        Require uppercase letters
        Require lowercase letters
     ***/
    return genericRequiredValidator(val);
}