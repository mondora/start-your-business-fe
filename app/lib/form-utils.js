import validator from 'validator';

export function genericRequiredValidator (val) {
    return (!val || validator.isEmpty(val.trim())) && 'Campo richiesto';
}

export function isCheckedValidator (val) {
    return !val;
}

export function requiredEmailValidator (val) {
    return genericRequiredValidator(val) || (!validator.isEmail(val) && 'Indirizzo email non valido');
}

export function requiredPasswordValidator (val) {
    /***
        Minimum length 8
        Require numbers
        Require uppercase letters
        Require lowercase letters
     ***/
    return genericRequiredValidator(val) ||
        (val.trim().length < 8 && 'La password deve essere lunga almeno 8 caratteri') ||
        (!val.match(/.*[0-9].*/) && 'La password deve contenere almeno un numero') ||
        (!val.match(/.*[A-Z].*/) && 'La password deve contenere almeno una lettera maiuscola') ||
        (!val.match(/.*[a-z].*/) && 'La password deve contenere almeno una lettera miniscula');
}

export function requiredPriceValidator (val) {
    return genericRequiredValidator(val) || (!validator.isFloat(val, {min: 0}) && 'Il prezzo deve essere un numero maggiore di zero');
}

export function businessNameValidator (val) {
    //TODO check for already existing business name
    return genericRequiredValidator(val) ||
        (val.indexOf('.') >= 0 && 'Il nome non può contenere un punto');
}

export function domainNameValidator (val) {
    //TODO check for domain availability
    return genericRequiredValidator(val);
}