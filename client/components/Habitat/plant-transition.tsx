import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const overlayPrimaryColor = 'rgba(61, 84, 96, .4)';
const overlaySecondaryColor = 'rgba(0, 66, 100, 0.8)';

const TransitionOverlay = styled.div`
    position: absolute;
    bottom: 0;
    left:0;
    width:100%;
    height:0%;
    
    background:
      radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, ${overlaySecondaryColor} 10px, rgba(96, 16, 48, 0) 11px) 0px 10px,
      radial-gradient(circle at 100% 50%, rgba(96, 16, 48, 0) 9px, ${overlaySecondaryColor} 10px, rgba(96, 16, 48, 0) 11px) 0px 10px,
      ${overlayPrimaryColor};
      background-size: 20px 20px;
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

export default (props) => {
  const { children, onReachEnd, plantId } = props;
  let timerId;
  const overlayElementId = `tile-transition-${plantId}`;
  const waveElementId = `wave-${plantId}`;

  const doTransition = (currentHeight) => {
    if (currentHeight === 0) {
      // @ts-ignore
      document.getElementById(waveElementId).style.display = 'block';
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

  const onHoldTile = () => {
    console.log('mouse entered triggered');
    doTransition(0);
  };
  const onUnHoldTile = () => {
    console.log('called onUnholdTile');
    // @ts-ignore
    document.getElementById(overlayElementId).style.height = '0%';
    // @ts-ignore
    document.getElementById(waveElementId).style.display = 'none';
    clearTimeout(timerId);
  };

  return (
    <Container onMouseDown={onHoldTile} onMouseUp={onUnHoldTile}>
      <TransitionOverlay id={overlayElementId}>
        <Wave id={waveElementId}/>
      </TransitionOverlay>
      {children}
    </Container>
  );
};
