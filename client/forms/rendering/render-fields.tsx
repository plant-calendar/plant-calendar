import React from "react";
import styled from 'styled-components';
import renderPictures from './avatars';
import {COLORS} from "../../components/style-config";
import {FieldTypes, IField} from "../interfaces";
import Toggle from './toggle';

const HorizontalCenterer =  styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;
const StyledInput = styled.textarea`
    resize: none;
    border: 1px solid ${COLORS.darkGreen};
    color: ${COLORS.darkGreen};
    text-decoration: none;
    width: 100%;
    
    :focus {
      outline: none;
    }
`;

const StyledInputAndErrorContainer = styled.div`
  width: 95%;
`;

const StyledDropdown = styled.select`
    background: ${COLORS.white};
    border: 1px solid ${COLORS.darkGreen};
    width: 100%;
    color:  ${COLORS.darkGreen};
`;

const StyledLabel = styled.div`
    color: ${COLORS.darkGreen};
`;

const StyledError = styled.div`
    color: ${COLORS.notification};
    font-size: small;
    height: 20px;
`;

const fieldGetters = {
    [FieldTypes.INPUT]: ({ label, lowerCase }, value, onChange, error: string, clearError, onLeave, onHitEnter) => (
        <StyledInputAndErrorContainer key={`create-${label}-1`}>
          <HorizontalCenterer>
            <div>
              <StyledLabel>{label}</StyledLabel>
              <StyledInput
                  onFocus={clearError}
                  onBlur={onLeave}
                  value={value}
                  onChange={event => {
                    let newOutput = event.target.value;
                    if (onHitEnter) {
                      newOutput = newOutput.replace('\n', '');
                    }
                    onChange(lowerCase ? newOutput.toLowerCase() : newOutput);
                  }}
                  spellCheck={false}
                  onKeyUp={e => {
                    if (onHitEnter && e.key === 'Enter') {
                      onHitEnter();
                    }
                  }}
              />
            </div>
          </HorizontalCenterer>
          <HorizontalCenterer>
            <StyledError>{error}</StyledError>
          </HorizontalCenterer>
        </StyledInputAndErrorContainer>
    ),
    [FieldTypes.AVATAR]: ({ key, imageUrls, label }, value, onChange, error: string) => (
        <div key={key}>
            <StyledLabel>{label}</StyledLabel>
            {renderPictures(imageUrls, value, onChange)}
            <StyledError>{error}</StyledError>
        </div>
    ),
    [FieldTypes.DROPDOWN]: ({ key, options, label }, value, onChange, error: string, clearError, onLeave) => {
        return (
            <div key={key}>
                <StyledLabel>{label}</StyledLabel>
                <StyledDropdown
                    onFocus={clearError}
                    onBlur={onLeave}
                    value={value}
                    onChange={event => onChange(event.target.value)}
                >
                    {options.map(
                        option => (<option key={`${key}-${option.value}`} value={option.value}>{option.label}</option>),
                    )}
                </StyledDropdown>
                <StyledError>{error}</StyledError>
            </div>
        );
    },
    [FieldTypes.TOGGLE]: ({ key, label }, value, onChange) => {
      return (
          <div key={key}>
              <StyledLabel>{label}</StyledLabel>
              <Toggle value={value} onChange={onChange} />
          </div>
      );
    },
};


export default (
    field: IField,
    value: any,
    onChange: (value: any) => any,
    error: string,
    clearError,
    onLeave,
    onHitEnter?,
  ) =>
    // @ts-ignore
    fieldGetters[field.type || FieldTypes.INPUT](field, value, onChange, error, clearError, onLeave, onHitEnter);

