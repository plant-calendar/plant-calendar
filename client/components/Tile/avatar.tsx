import React from 'react';
import styled from 'styled-components';
import {COLORS} from "../style-config";

const Container = styled.div`
    width: 125px;
    height: 125px;
`;

const Avatar = props => {
  console.log(props.imageUrl);
  let style = `
    border-radius: 50%;
    height: 80%;
    margin-left: 10%;
  `;
  if (props.alert) {
    style += `border: 2px solid ${COLORS.notification};`;
  }
  const AvatarImage = styled.img`${style}`;
  return (
    <Container>
      <AvatarImage src={props.imageUrl} />
    </Container>
  );
};

export default Avatar;