import React from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import {BASE_MODAL_STYLE, COLORS} from "../../style-config";
import {Close} from "../../common/CloseSign";
import {entityId} from "../../../../common/db-interfaces/types";
import {SubmitButton} from "../../common/SubmitButton";
import { TILE_HEIGHT } from "../../style-config";

const StyledContainer = styled.div`
    margin-top: 40px;
`;

const StyledRequest = styled.div`
    height: ${TILE_HEIGHT + 20}px;
    box-shadow: 2px 2px #e8e8e8;
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledRequestText = styled.div`
    color: ${COLORS.darkGreen};
    padding-top: 15px;
`;

const StyledButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
    margin-bottom: 16px;
`;

const StyledEmphasizedText = styled.span`
   color: ${COLORS.notification};
`;

const StyledNoMoreRequests = styled.div`
    text-align: center;
    color: ${COLORS.lightGray};
`;

export interface ISubscriptionRequest {
    id: entityId;
    userId: entityId;
    userName: string;
    habitatId: entityId;
    habitatName: string;
}

interface IProps {
    close: () => any;
    requests: ISubscriptionRequest[];
    accept: (request: ISubscriptionRequest) => any;
    reject: (request: ISubscriptionRequest) => any;
}

export default (props: IProps) => {
    const contents = !props.requests.length
        ? <StyledNoMoreRequests>you responded to all requests</StyledNoMoreRequests>
        : props.requests.map(request => {
            const buttonWidth = '60px';
            return (
                <StyledRequest>
                    <StyledRequestText>
                        User{' '}
                        <StyledEmphasizedText>{request.userName}</StyledEmphasizedText>
                        {' '}wants to subscribe to your habitat {request.habitatName}
                    </StyledRequestText>
                    <StyledButtonsContainer>
                        <SubmitButton
                            onClick={() => props.accept(request)}
                            text={'accept'}
                            styles={{ width: buttonWidth }}
                        />
                        <SubmitButton
                            onClick={() => props.reject(request)}
                            text={'decline'}
                            styles={{
                                width: buttonWidth,
                                marginLeft: '10px',
                                background: COLORS.notification,
                            }}
                        />
                    </StyledButtonsContainer>
                </StyledRequest>
            );
        });

  return (
      <ReactModal isOpen style={{ content: BASE_MODAL_STYLE.CONTENT }}>
        <Close onClick={props.close} />
        <StyledContainer>{contents}</StyledContainer>
      </ReactModal>
  );
};