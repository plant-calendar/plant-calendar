import React, {useState} from 'react';
import ReactModal from 'react-modal';
import styled from 'styled-components';
import {Close} from "../CloseSign";
import {SubmitButton} from "../SubmitButton";
import {COLORS} from "../../style-config";
import Avatar from "../../Tile/avatar";

interface IDisplayField {
    value: any;
    type?: string;
    onChange: any;
}

interface IProps {
    fields: IDisplayField[];
    errorMessage: string;
    imageChoices: string[];
    onSubmit: any;
    buttonText?: string;
    onAvatarSelect?: (avatarImageUrl: string) => any;
}

const StyledInput = styled.textarea`
    border: 1px solid ${COLORS.darkGreen};
    width: 95%;
`;

const StyledLabel = styled.div`
    color: ${COLORS.darkGreen};
`;

const fieldGetters = {
  input: ({ value, onChange, label }) => (
      <div key={`create-${label}-1`}>
        <StyledLabel>{label}</StyledLabel>
        <StyledInput value={value} onChange={onChange} />
      </div>
  ),
};

const Container = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const SubmitButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;


const PicturesContainer = styled.div`
    border: 1px solid ${COLORS.darkGreen};
    width: 95%;
    height: 20vh;
`;
const PicturesContainerRow = styled.div`
    display: flex;
    height: 50%;
`;
const SinglePictureContainer = styled.button`
    border: 1px solid ${COLORS.darkGreen};
    width: 25%;
    height: 100%;
    background: none;
`;

const SelectableBox = props => {
  return (
    <SinglePictureContainer
        style={props.selected ? { border: `4px solid ${COLORS.primaryGreen}`} : {}}
        onMouseDown={e => e.preventDefault()}
        onClick={props.onClick}>
        {props.children}
    </SinglePictureContainer>
  );
};

const getPictures = (imageUrls, onSelectOne) => {
    const [selectedPicture, selectPicture] = useState('');


    const getRow = imageUrlsForRow => {
        const boxes = [];
        for (let i = 0; i < 4; i += 1) {
            // we will make a box whether or not there is an image
            const avatar = imageUrlsForRow[i] ? <Avatar imageUrl={imageUrlsForRow[i]}/> : null;
            let boxClick = () => undefined;
            if (imageUrlsForRow[i]) {
                boxClick = () => {
                    onSelectOne(imageUrlsForRow[i]);
                    selectPicture(imageUrlsForRow[i]);
                };
            }
            boxes.push(
                <SelectableBox
                    selected={imageUrlsForRow[i] === selectedPicture}
                    onClick={boxClick}
                    key={`box-${i}`}
                >{avatar}
                </SelectableBox>);
        }
        return boxes;
    };
    return (
        <PicturesContainer>
            <PicturesContainerRow>
                {getRow(imageUrls.slice(0, 4))}
            </PicturesContainerRow>
            <PicturesContainerRow>
                {getRow(imageUrls.slice(4, 8))}
            </PicturesContainerRow>
        </PicturesContainer>
    );
};



export const CreateModalDisplay = (props: IProps) => {
    console.log(props.fields);
    return (
        <ReactModal isOpen style={{content: { left: '33%', width: '50%', minWidth: '300px', maxWidth: '500px' }}}>
            <Close/>
            <Container>
                {...(props.fields || []).map(field => fieldGetters[field.type || 'input'](field))}
                {getPictures(props.imageChoices, props.onAvatarSelect || (() => undefined))}
            </Container>
            <SubmitButtonContainer>
                <SubmitButton onClick={props.onSubmit} text={props.buttonText || "create!"} />
            </SubmitButtonContainer>
        </ReactModal>
    );
};