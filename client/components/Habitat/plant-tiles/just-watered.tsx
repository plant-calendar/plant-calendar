import React from 'react';
import styled from 'styled-components';
import {IPlant} from "../../../../server/db/models/plant/plant.interface";
import {COLORS, TILE_HEIGHT} from "../../style-config";

interface IJustWateredTileProps {
  plant: IPlant;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${TILE_HEIGHT};
  background: ${COLORS.primaryGreen};
  color: white;
`;

const AvatarImg = styled.img`
  height: 70px;
  width: 70px;
`;

export default (props: IJustWateredTileProps) => {
  return (
    <Container>
      <div>{`You watered ${props.plant.name}!`}</div>
      <AvatarImg src="/plant-cartoon.png"/>
    </Container>
  );
};
