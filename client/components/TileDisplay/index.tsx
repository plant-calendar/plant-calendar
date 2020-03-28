import React from 'react';
import styled from 'styled-components';
import Tile, { ITileProps } from "./tile";

// const StyledContainer = styled.div`
//     margin-top: 20px;
//
//     @media (min-width: 768px) {
//         display: flex;
//         justify-content: space-around;
//     }
// `;
const StyledContainer = styled.div`
   margin-top: 20px;
   display: flex;
   flex-flow: row wrap;
   justify-content: space-between;
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