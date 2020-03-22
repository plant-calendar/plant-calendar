import React from 'react';
import styled from 'styled-components';
import {IHabitat} from "../../../../../server/db/models/habitat/habitat.interface";
import {SubmitButton} from "../../../common/SubmitButton";
import {COLORS} from "../../../style-config";
import Avatar from "../../../TileDisplay/avatar";
import {entityId} from "../../../../../server/db/types";

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40%;
`;

const StyledMessage = styled.div`
    color: ${COLORS.darkGreen};
    text-align: center;
    margin-bottom: 20px;
`;

const StyledButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledAvatarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
`;

interface IProps {
    habitat: IHabitat;
    onConfirm: (habitatId: entityId) => any;
}

export default (props: IProps) => {
    return (
        <StyledContainer>
            <StyledAvatarContainer>
                <Avatar imageUrl={props.habitat.imageUrl} borderColor={COLORS.primaryGreen} />
            </StyledAvatarContainer>
            <StyledMessage>Request to subscribe to {props.habitat.name}?</StyledMessage>
            <StyledButtonContainer>
                <SubmitButton
                    onClick={() => props.onConfirm(props.habitat.id)}
                    text="request!"
                    styles={{ width: "50%", maxWidth: "200px", minWidth: "80px" }}
                />
            </StyledButtonContainer>
        </StyledContainer>
    );
};
