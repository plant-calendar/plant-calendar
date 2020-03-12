import React, { useEffect } from 'react';
import styled from 'styled-components';
import draw, {IDrawConfig} from './draw';

const Container = styled.div`
    width: 100%;
    height: 100%;
`;

interface IProps {
    keyBase: string;
}

const CONTAINER_BASE_ID = 'growth-container-id';

export default (props: IProps) => {
    const containerId = `${CONTAINER_BASE_ID}-${props.keyBase}`;
    useEffect(() => {
        const container = document.getElementById(containerId);

        const configs: IDrawConfig[] = [];
        for (let i = 0; i < 1; i += 1) {
            const canv = document.createElement('CANVAS');
            canv.width = container.offsetWidth;
            canv.height = 1000;
            canv.style.zIndex = '-10000';
            canv.style.position = 'absolute';
            container.appendChild(canv);
            configs.push({
                canvas: canv,
                context: canv.getContext('2d'),
            });
        }
        draw(configs, container.offsetWidth);
    }, []);

    return (
      <Container id={containerId}/>
    );
};
