import React from 'react';
import styled from 'styled-components';
import PlusSign from "./PlusSign";
import {COLORS} from "./style-config";

const HorizontalContainer = styled.div`
  border: 1px solid ${COLORS.lightGray};
  display: flex;
  color: ${COLORS.darkGray};
  font-size: 24px;
  height: 72px;
  margin-top: 20px;
  padding-left: 7%;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Message = styled.div`
  margin-left: 10px;
`;

const AddTile = (props) => {
  return (
    <HorizontalContainer>
      <VerticalContainer>
        <PlusSign height={40} width={40} />
      </VerticalContainer>
      <VerticalContainer>
        <Message>{props.message}</Message>
      </VerticalContainer>
    </HorizontalContainer>
  );
};

export default AddTile;