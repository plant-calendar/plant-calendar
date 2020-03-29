import React from 'react';
import styled from 'styled-components';
import {COLORS} from "../style-config";

const StyledButton = styled.button`
    background: ${COLORS.primaryGreen};
    color: ${COLORS.white};
    height: 25px;
    cursor: pointer;
    border-radius: 8%;
        
    :focus {
        border: none;
        outline: none;
    }
    :active {
        background: ${COLORS.darkGreen};
    }
`;

const DisabledButton = styled.button`
    background: ${COLORS.fadedPrimaryGreen};
    color: ${COLORS.white};
    height: 25px;
    
    :focus {
        border: none;
        outline: none;
    }
    border-radius: 8%;
`;

interface IProps {
    styles?: object;
    disabled?: boolean;
    onClick: (anything: any) => any;
    text: string;
}

export const SubmitButton = (props: IProps) => {
    return props.disabled
        ? (
            <DisabledButton
                style={{ ...(props.styles || {}) }}
                onClick={() => undefined}
            >
                {props.text}
            </DisabledButton>
        ) : (
            <StyledButton
                style={{ ...(props.styles || {}) }}
                onClick={props.onClick}
            >
                {props.text}
            </StyledButton>
        );
};