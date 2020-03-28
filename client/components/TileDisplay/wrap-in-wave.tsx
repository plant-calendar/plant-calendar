import styled from 'styled-components';
import React from "react";

const overlayPrimaryColor = 'rgba(0, 66, 100, .5)';

const TransitionOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left:0;
    width:100%;
    height:0%;
    
    background:
      radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent),
      radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,.3) 21%, rgba(255,255,255,.3) 34%, transparent 35%, transparent) 0 -50px;
      background-color: ${overlayPrimaryColor};
      background-size:75px 100px;
`;

const Wave = styled.div`
  position: relative;
  display: none;
  
  &:before{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    background-repeat: repeat-x;
    height: 10px;
    background-size: 20px 20px;
    background-image: radial-gradient(circle at 10px -5px, transparent 12px, ${overlayPrimaryColor} 13px);
  }

`;

interface IProps {
    children: any;
    onReachEnd: () => any;
    elementIdKey: string | number;
    suppressWaveForNodes: string[];
}

export default (props: IProps) => {
    const { children, onReachEnd, elementIdKey, suppressWaveForNodes } = props;
    let timerId;
    const overlayElementId = `tile-transition-${elementIdKey}`;
    const waveElementId = `wave-${elementIdKey}`;

    const doTransition = (currentHeight) => {
        if (currentHeight === 0) {
            // @ts-ignore
            document.getElementById(waveElementId).style.display = 'block';
            // @ts-ignore
            document.getElementById(overlayElementId).style.display = 'block';
        }
        if (currentHeight === 100) {
            onReachEnd();
            return;
        }
        const newHeight = currentHeight + 5;
        // @ts-ignore
        document.getElementById(overlayElementId).style.height = `${newHeight}%`;
        timerId = setTimeout(() => doTransition(newHeight), 50);
    };

    const onHoldTile = e => {
        if (suppressWaveForNodes.includes(e.target.id)) {
            return;
        }
        e.preventDefault();
        doTransition(0);
    };
    const onUnHoldTile = e => {
        e.preventDefault();
        // @ts-ignore
        document.getElementById(overlayElementId).style.height = '0%';
        // @ts-ignore
        document.getElementById(waveElementId).style.display = 'none';
        clearTimeout(timerId);
    };

    return (
        <div
            onTouchStart={onHoldTile}
            onTouchEnd={onHoldTile}
            onMouseDown={onHoldTile}
            onMouseUp={onUnHoldTile}>
            <TransitionOverlay id={overlayElementId}>
                <Wave id={waveElementId}/>
            </TransitionOverlay>
            {children}
        </div>
    );
};
