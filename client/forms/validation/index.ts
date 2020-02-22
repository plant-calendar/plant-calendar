export const validatorGetters = {
  isDate: () => ({
    validate: () => val => true,
    getMessage: fieldName => `${fieldName} must be a date`,
  }),
  isNotNil: () => ({
    validate: val => !!val || val === 0,
    getMessage: fieldName => `${fieldName} cannot be blank`,
  }),
  isNumber: () => ({
    validate: val => !isNaN(parseFloat(val)),
    getMessage: fieldName => `${fieldName} must be a number`,
  }),
  isOfLength: length => ({
    validate: (val) => val && val.length >= length,
    getMessage: fieldName => `${fieldName} must be at least ${length} characters long`,
  }),
};

const validateField = (value, fieldName, validatorsForField): string[] =>
  validatorsForField.reduce((errorMessages, validator) => {
    if (!validator.validate(value)) {
      errorMessages.push(validator.getMessage(fieldName));
    }
    return errorMessages;
  }, []);

export const getFormErrorMessages = (fields): string[] => {
  return fields.reduce((allErrors, { validators, label, value }) => {
    if (validators && validators.length) {
      const errorsForField = validateField(value, label, validators);
      return allErrors.concat(errorsForField);
    }
    return allErrors;
  }, []);
};