import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    cursor: pointer;
    background: none;
    border: none;
`;

export const Close = ({ onClick }) => (
    <StyledButton onClick={onClick} >
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.4764 14.3536L27.2929 25.17L25.17 27.2929L14.3536 16.4764L14 16.1229L13.6464 16.4764L2.83 27.2929L0.707106 25.17L11.5236 14.3536L11.8771 14L11.5236 13.6464L0.707107 2.83L2.83 0.707107L13.6464 11.5236L14 11.8771L14.3536 11.5236L25.17 0.707107L27.2929 2.83L16.4764 13.6464L16.1229 14L16.4764 14.3536Z" fill="#999999" stroke="black"/>
        </svg>
    </StyledButton>
);