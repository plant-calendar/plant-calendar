import React, { useEffect } from 'react';
import styled from 'styled-components';
import draw, {IDrawConfig} from './draw';
import {COLORS} from "../../style-config";

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1000;
`;

interface IProps {
    // just a string to serve as part of the React key
    keyBase: string;
    // the percent down the canvas to start the vine: for example, 0.4 will start the vine
    // 40% of the way down the canvas
    yStart?: number;
}

const CONTAINER_BASE_ID = 'growth-container-id';

export default (props: IProps) => {
    const containerId = `${CONTAINER_BASE_ID}-${props.keyBase}`;
    // the percent down the canvas to start the vine: for example, 0.4 will start the vine
    // 40% of the way down the canvas
    const yStart = (props.yStart || props.yStart === 0) ? props.yStart : 0.4;

    useEffect(() => {
        const container = document.getElementById(containerId) as any;

        const configs: IDrawConfig[] = [];
        for (let i = 0; i < 1; i += 1) {
            const canv = document.createElement('CANVAS') as any;
            canv.width = window.innerWidth;
            canv.height = window.innerHeight;
            canv.style.zIndex = '-10000';
            canv.style.position = 'absolute';
            container.appendChild(canv);
            const context = canv.getContext('2d');
            context.strokeStyle = COLORS.darkGreen;
            configs.push({ canvas: canv, context });
        }
        draw(configs, window.innerWidth, window.innerHeight, yStart);
    }, []);

    return (
        <Container id={containerId}/>
    );
};
