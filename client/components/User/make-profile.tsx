import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import {getFormErrorMessages, validatorGetters} from "../../forms/validation";
import {actions as userActions, selectors as userSelectors} from '../../store/user';
import {COLORS} from "../style-config";
import {SubmitButton} from "../common/SubmitButton";
import GrowthBackground from '../common/GrowthBackground';
import renderField from '../../forms/rendering/render-fields';
import {FieldTypes} from "../../forms/interfaces";
import { ALLOWED_CHARACTERS } from "../../forms/validation";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const SecondContainer = styled.div`
    display: flex;
    justify-content: center;
    color: ${COLORS.darkGreen};
`;

const TextContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`;

const InputContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px;
`;

const HorizontalFlexer = styled.div`
    display: flex;
    justify-content: center;
`;

const VerticalFlexer = styled.div`
    display: flex;
    flex-direction: column;
    background: ${COLORS.white};
    border: 1px solid ${COLORS.darkGreen};
    padding: 5vh;
    
    @media (max-width: 768px) {
        width: 80%;
    }
`;

const MAX_ALLOWED_LENGTH = 20;
const MIN_ALLOWED_LENGTH = 3;

const MakeProfile = props => {
    const { allUserNames, fetchAllNames, updateName, history } = props;
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');

    useEffect(() => {
        fetchAllNames();
    }, []);
    
    const onSubmit = () => {
        const errorMessages = getFormErrorMessages([
                {
                    label: 'Name',
                    validators: [validatorGetters.isNotNil(), validatorGetters.isAtLeastLength(3)],
                    key: 'name',
                },
            ],
            { name },
        );
        if (errorMessages && errorMessages.length) {
            setNameError(errorMessages[0]);
            return;
        }
        if (allUserNames.includes(name)) {
            setNameError(`That name is already taken.  Try another?`);
            return;
        }
        updateName(name, user => {
            history.push(`/users/${user.id}/habitats`);
        });
    };
    const onChangeInput = (input: string) => {
        setName(input);
        if (input.length > MAX_ALLOWED_LENGTH) {
            setNameError('too long!');
            return;
        }

        const uniqueInvalidCharacters: { [char: string]: boolean } = {};
        for (const char of input) {
            if (char === ' ') {
                setNameError('spaces not allowed');
                return;
            }
            if (!ALLOWED_CHARACTERS.includes(char)) {
                uniqueInvalidCharacters[char] = true;
            }
        }
        if (Object.keys(uniqueInvalidCharacters).length) {
            setNameError(`invalid characters: "${Object.keys(uniqueInvalidCharacters).join('')}"`);
            return;
        }
        setNameError('');
    };
    return (
        <Container>
            <GrowthBackground keyBase="make-profile" yStart={0.1} />
            <SecondContainer>
              <VerticalFlexer>
                  <TextContainer>
                      Looks like this is your first time here. What would you like to be called?
                  </TextContainer>
                  <InputContainer>
                      {
                          renderField(
                              {
                                  type: FieldTypes.INPUT,
                                  label: '',
                                  key: 'make-profile-name',
                                  validators: [],
                                  lowerCase: true,
                              },
                              name,
                              onChangeInput,
                              nameError,
                              () => setNameError(''),
                              () => undefined,
                            onSubmit,
                          )
                      }
                  </InputContainer>
                  <HorizontalFlexer>
                    <SubmitButton
                        onClick={onSubmit}
                        text="Get started!"
                        disabled={nameError.length > 0 || name.length < MIN_ALLOWED_LENGTH}
                    />
                  </HorizontalFlexer>
              </VerticalFlexer>
          </SecondContainer>
        </Container>
    );
};

const mapStateToProps = state => ({
    allUserNames: userSelectors.getAllUserNames(state),
});

const mapDispatchToProps = dispatch => ({
    fetchAllNames: () => dispatch(userActions.fetchAllNames()),
    updateName: (newName, callback) => dispatch(userActions.updateName(newName, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MakeProfile);