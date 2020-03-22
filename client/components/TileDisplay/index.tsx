import React from 'react';
import styled from 'styled-components';
import Tile, { ITileProps } from "./tile";

const StyledContainer = styled.div`
    margin-top: 20px;
    
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-around;
    }
`;

interface IProps {
    tiles: ITileProps[];
}

export default (props: IProps) => {
    return (
      <StyledContainer>
          {props.tiles.map(tile => <Tile key={`tile-${tile.elementKey}`} {...tile} />)}
      </StyledContainer>
    );
};