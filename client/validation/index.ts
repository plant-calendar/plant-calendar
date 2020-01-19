export const validators = {
  isDate: { validate: val => true, getMessage: fieldName => `${fieldName} must be a date` },
  isNotNil: { validate: val => !!val || val === 0, getMessage: fieldName => `${fieldName} cannot be blank`},
  isNumber: { validate: val => !isNaN(parseFloat(val)), getMessage: fieldName => `${fieldName} must be a number` },
};

const validateField = (value, fieldName, validatorsForField): string[] =>
  validatorsForField.reduce((errorMessages, validator) => {
    if (!validator.validate(value)) {
      errorMessages.push(validator.getMessage(fieldName));
    }
    return errorMessages;
  }, []);

// if there is one or more errors in all of values, get back a flat string array of all error messages
export const getFormErrorMessages = (values: object, validatorsByFieldName: object): string[] => {
  return Object.keys(values).reduce((allErrors, fieldName) => {
    const validatorsForField = validatorsByFieldName[fieldName];
    if (validatorsForField && validatorsForField.length) {
      const errorsForField = validateField(values[fieldName], fieldName, validatorsForField);
      // @ts-ignore
      return allErrors.concat(errorsForField);
    }
    return allErrors;
  }, []);
};
