import React from 'react';
import {COLORS} from "../style-config";

interface IProps {
    strokeWidth?: number;
    strokeColor?: string;
    fillColor?: string;
    direction: 'left' | 'right';
    size: 'small' | 'medium' | 'large';
    onClick: () => any;
}

const sizes = {
    small: {
        width: 20,
        height: 40,
    },
    medium: {
        width: 40,
        height: 80,
    },
    large: {
        width: 50,
        height: 100,
    },
};

export const Arrow = (props: IProps) => {
    const { strokeWidth = 10, strokeColor = COLORS.darkGray, fillColor = "none" } = props;
    const pathD = props.direction === 'left' ? "M43 2L3 70.5L43 131" : "M2.5 1.5L42.5 70L2.5 130.5";
    const { width, height } = sizes[props.size];

    return (
        <div onClick={props.onClick} style={{cursor: 'pointer'}}>
            <svg xmlns="http://www.w3.org/2000/svg"width={width} height={height} viewBox="0 0 46 132" fill={fillColor}>
                <path
                    d={pathD}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                />
            </svg>
        </div>
    );
};
