import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

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

  const onHoldTile = e => {
    e.preventDefault();
    doTransition(0);
  };
  const onUnHoldTile = () => {
    // @ts-ignore
    document.getElementById(overlayElementId).style.height = '0%';
    // @ts-ignore
    document.getElementById(waveElementId).style.display = 'none';
    clearTimeout(timerId);
  };

  return (
    <Container
        onTouchStart={onHoldTile}
        onTouchEnd={onHoldTile}
        onMouseDown={onHoldTile}
        onMouseUp={onUnHoldTile}>
      <TransitionOverlay id={overlayElementId}>
        <Wave id={waveElementId}/>
      </TransitionOverlay>
      {children}
    </Container>
  );
};
