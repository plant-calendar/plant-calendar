import React from 'react';
import styled from 'styled-components';
import { COLORS, TILE_HEIGHT } from "../style-config";

const AvatarImage = styled.img`
  height: ${TILE_HEIGHT - 30}px;
`;

const VerticalFlexer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

interface IProps {
  borderColor?: string;
  alert?: boolean;
  imageUrl: string;
}

const Avatar = (props: IProps) => {
  let style = `
    height: ${TILE_HEIGHT - 10}px;
    width: ${TILE_HEIGHT - 10}px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
  `;
  if (props.borderColor) {
    style += `border: 2px solid ${props.borderColor};`;
  }
  if (props.alert) {
    style += `border: 2px solid ${COLORS.notification};`;
  }

  const Container = styled.div`${style}`;
  return (
    <Container>
      <VerticalFlexer>
        <AvatarImage src={props.imageUrl} />
      </VerticalFlexer>
    </Container>
  );
};

export default Avatar;