import {IField} from "../interfaces";

export const ALLOWED_CHARACTERS = 'abcdefghijklmnopqrstuvwxyz0123456789-';

export const validatorGetters = {
  isDate: () => ({
    validate: () => val => true,
    getMessage: () => `must be a date`,
  }),
  isNotNil: () => ({
    validate: val => !!val || val === 0,
    getMessage: () => `cannot be blank`,
  }),
  isNumber: () => ({
    validate: val => !isNaN(parseFloat(val)),
    getMessage: () => `must be a number`,
  }),
  isAtLeastLength: length => ({
    validate: (val) => val && val.length >= length,
    getMessage: () => `must be at least ${length} characters long`,
  }),
  isAtMostLength: length => ({
    validate: (val) => val && val.length <= length,
    getMessage: () => `cannot be more than ${length} characters long`,
  }),
  isOfGenericAllowedCharacters: () => {
    let uniqueInvalidCharacters: { [char: string]: boolean } = {};
    return {
      validate: input => {
        uniqueInvalidCharacters = {};
        for (const char of input) {
          if (!ALLOWED_CHARACTERS.includes(char)) {
            uniqueInvalidCharacters[char] = true;
          }
        }
        return !Object.keys(uniqueInvalidCharacters).length;
      },
      getMessage: () =>
          `invalid characters: "${Object.keys(uniqueInvalidCharacters).join('')}"`,
    };
  },
};

export const validateField = (value, validatorsForField): string[] =>
  validatorsForField.reduce((errorMessages, validator) => {
    if (!validator.validate(value)) {
      errorMessages.push(validator.getMessage());
    }
    return errorMessages;
  }, []);

export const getFormErrorMessages = (fields: IField[], values: { [key: string]: any }): string[] => {
  return fields.reduce((allErrors, { validators, label, key }) => {
    const value = values[key];
    if (validators && validators.length) {
      const errorsForField = validateField(value, validators);
      // @ts-ignore
      return allErrors.concat(errorsForField);
    }
    return allErrors;
  }, []);
};