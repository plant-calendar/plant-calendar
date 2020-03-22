import styled from 'styled-components';
import React from "react";
import {COLORS} from "../../components/style-config";

const PicturesContainer = styled.div`
    border: 1px solid ${COLORS.darkGreen};
    width: 100%;
    height: 20vh;
    margin-top: 2px;
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
    cursor: pointer;
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

const AvatarImage = styled.img`
    height: 60%;
`;

const Avatar = ({ imageUrl }) => (
    <AvatarImage src={imageUrl} />
);


export default (imageUrls, selectedImageUrl: string, onSelectOne) => {
    const getRow = imageUrlsForRow => {
        const boxes = [];
        for (let i = 0; i < 4; i += 1) {
            // we will make a box whether or not there is an image
            const avatar = imageUrlsForRow[i] ? <Avatar imageUrl={imageUrlsForRow[i]}/> : null;
            const boxClick = imageUrlsForRow[i] ? () => onSelectOne(imageUrlsForRow[i]) : () => undefined;
            boxes.push(
                // @ts-ignore
                <SelectableBox
                    selected={imageUrlsForRow[i] === selectedImageUrl}
                    onClick={boxClick}
                    key={`box-${i}`}
                >
                    {avatar}
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