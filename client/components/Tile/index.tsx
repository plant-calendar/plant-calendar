import React from 'react';
import styled from 'styled-components';
import Avatar from "./avatar";
import {COLORS, TILE_HEIGHT} from "../style-config";

interface ITileProps {
  title: string;
  details: string;
  imageUrl?: string;
  style?: object;
}

const TileText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 30px;
  color: ${COLORS.primaryGreen};
`;

const TileTitle = styled.div`
 font-weight: 600;
 color: ${COLORS.darkGreen};
 margin-bottom: 6px;
`;

const TileDetails = styled.div`
  font-size: 14px;
`;

const Tile = (props: ITileProps) => {
  const style = props.style || {};
  const getStyleFromKeyVal = (key, val) => `\n${key}: ${val};`;
  const styleString = Object.keys(style).reduce(
    (s, styleKey) => s + getStyleFromKeyVal(styleKey, style[styleKey]),
    `display: flex;
    justify-content: center;
    height: ${TILE_HEIGHT};`,
  );
  const StyledTile = styled.div`${styleString}`;
  return (
    <div>
      <StyledTile>
        <Avatar imageUrl={props.imageUrl}/>
        <TileText>
          <TileTitle>{props.title}</TileTitle>
          <TileDetails>{props.details}</TileDetails>
        </TileText>
      </StyledTile>
    </div>
  );
};

export default Tile;