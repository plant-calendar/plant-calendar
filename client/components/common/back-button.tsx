import React, {useState} from 'react';
import styled from 'styled-components';
import {COLORS} from "../style-config";

const StyledSvg = styled.svg`
    cursor: pointer;
`;

interface IProps {
    onClick: () => any;
}

export default (props: IProps) => {
    const [isHover, setIsHover] = useState(false);

    return (
        <StyledSvg
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            onClick={props.onClick}
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            viewBox="0 0 25 25"
            fill="none"
        >
            <g id="arrow_back_24px">
                <path
                    id="icon/navigation/arrow_back_24px"
                    d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                    fill={isHover ? COLORS.primaryGreen : COLORS.darkGray}
                    fillOpacity="1"
                />
            </g>
        </StyledSvg>
    );
};