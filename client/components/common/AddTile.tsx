import React, {useState} from 'react';
import styled from 'styled-components';
import PlusSign from "./PlusSign";
import {COLORS} from "../style-config";

const HorizontalContainer = styled.div`
  border: 1px solid ${COLORS.lightGray};
  display: flex;
  color: ${COLORS.darkGray};
  font-size: 24px;
  height: 72px;
  margin-top: 20px;
  padding-left: 7%;
  cursor: pointer;
  opacity: 0.7;
  box-shadow: 2px 2px #e8e8e8;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Message = styled.div`
  margin-left: 10px;
`;

interface IAddTileProps {
  onClick: () => any;
  message?: string;
}

const AddTile = (props: IAddTileProps) => {
    const [color, setColor] = useState(COLORS.lightGray);
    return (
        <HorizontalContainer
            onMouseOver={() => setColor(COLORS.primaryGreen)}
            onMouseLeave={() => setColor(COLORS.lightGray)}
            onClick={props.onClick}
            style={{ borderColor: color, color}}
        >
          <VerticalContainer>
            <PlusSign color={color} height={40} width={40} />
          </VerticalContainer>
          <VerticalContainer>
            <Message>{props.message}</Message>
          </VerticalContainer>
        </HorizontalContainer>
    );
};

export default AddTile;