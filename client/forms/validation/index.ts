import {IField} from "../interfaces";

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
  isOfLength: length => ({
    validate: (val) => val && val.length >= length,
    getMessage: () => `must be at least ${length} characters long`,
  }),
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