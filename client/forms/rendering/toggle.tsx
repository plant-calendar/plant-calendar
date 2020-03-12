import React from 'react';
import styled from 'styled-components';
import {COLORS} from "../../components/style-config";

const StyledSvg = styled.svg`
    cursor: pointer;
`;

interface IProps {
    size?: number;
    value: boolean;
    onChange: (newVal: boolean) => any;
}

export default ({ size = 55, value, onChange }: IProps) => {
    const toggleValue = () => onChange(!value);
    const path = value
        ? `M43.9167 15.5H18.0834C9.53254 15.5 2.58337 22.4492 2.58337 31C2.58337 39.5508 9.53254 46.5 18.0834 46.5H43.9167C52.4675 46.5 59.4167 39.5508 59.4167 31C59.4167 22.4492 52.4675 15.5 43.9167 15.5ZM43.9167 41.3334H18.0834C12.3742 41.3334 7.75004 36.7092 7.75004 31C7.75004 25.2908 12.3742 20.6667 18.0834 20.6667H43.9167C49.6259 20.6667 54.25 25.2908 54.25 31C54.25 36.7092 49.6259 41.3334 43.9167 41.3334ZM36.1667 31C36.1667 26.7117 39.6284 23.25 43.9167 23.25C48.205 23.25 51.6667 26.7117 51.6667 31C51.6667 35.2883 48.205 38.75 43.9167 38.75C39.6284 38.75 36.1667 35.2883 36.1667 31Z`
        : `M43.9167 15.5H18.0834C9.53254 15.5 2.58337 22.4492 2.58337 31C2.58337 39.5508 9.53254 46.5 18.0834 46.5H43.9167C52.4675 46.5 59.4167 39.5508 59.4167 31C59.4167 22.4492 52.4675 15.5 43.9167 15.5ZM43.9167 41.3333H18.0834C12.3742 41.3333 7.75004 36.7092 7.75004 31C7.75004 25.2908 12.3742 20.6667 18.0834 20.6667H43.9167C49.6259 20.6667 54.25 25.2908 54.25 31C54.25 36.7092 49.6259 41.3333 43.9167 41.3333ZM10.3334 31C10.3334 26.7117 13.795 23.25 18.0834 23.25C22.3717 23.25 25.8334 26.7117 25.8334 31C25.8334 35.2883 22.3717 38.75 18.0834 38.75C13.795 38.75 10.3334 35.2883 10.3334 31Z`;
    return (
        <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox={`0 0 62 62`}
            fill="none"
            onClick={toggleValue}
        >
            <g>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d={path}
                    fill={value ? COLORS.primaryGreen : COLORS.lightGray}
                    fillOpacity="1"/>
            </g>
        </StyledSvg>
    );
}