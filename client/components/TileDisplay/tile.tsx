import React, {useState} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Avatar from './avatar';
import {COLORS, TILE_HEIGHT} from "../style-config";
import {Gear, getElementIds} from "../common/Gear";
import {Tag, ITagProps} from "./tag";
import {entityId} from "../../../common/db-interfaces/types";
import WaveWrapper from './wrap-in-wave';

// the position is relative in order to accomodate the Gear's absolute position
const StyledTile = styled.div`
    position: relative;
    height: ${TILE_HEIGHT}px;
    box-shadow: 2px 2px #e8e8e8;
    cursor: pointer;
    margin-bottom: 15px;

    width: 49%;
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const HorizontalFlexer = styled.div`
    display: flex;
    padding-top: 3px;
    justify-content: space-between;
    margin-left: 2%;
    margin-right: 8%;
`;

const AvatarVerticalFlexer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TextVerticalFlexer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1vw;
    flex-grow: 2;
    
    width: 40%;
    @media (max-width: 768px) {
        width: 27vw;
    }
`;

const GearContainer = styled.button`
    position: absolute;
    right: 2%;
    top: 30%;
    background: none;
    border: none;
    cursor: pointer;
`;

const Title = styled.div`
    font-weight: 600;
    color: ${COLORS.darkGreen};
`;

const Details = styled.div`
    font-size: 14px;
    color: ${COLORS.primaryGreen};
`;

export interface ITileProps {
    title: string;
    details?: string;
    elementKey: entityId;
    imageUrl: string;
    linkTo?: string;
    onClick?: () => any;
    tags?: ITagProps[];
    hasSettings?: boolean;
    openSettings?: () => any;
    isWaterablePlant?: boolean;
    onReachEndOfWaveTransition?: () => any;
    containerStyle?: object;
}

export default (props: ITileProps) => {
    const gearContainerId = `gear-container-${props.elementKey}`;
    // @ts-ignore
    const elementIdsForGear = getElementIds(props.elementKey).concat(gearContainerId);
    const [isHover, setIsHover] = useState(false);

    const innerContents = (
        <HorizontalFlexer>
            <AvatarVerticalFlexer>
                <Avatar imageUrl={props.imageUrl} />
            </AvatarVerticalFlexer>
            <TextVerticalFlexer>
                <Title style={{ ...(isHover ? { color: COLORS.primaryGreen } : {})}}>{props.title}</Title>
                <Details>{props.details || ''}</Details>
            </TextVerticalFlexer>
            <div>
                {...(props.tags || []).map(tagProps => <Tag {...tagProps} />)}
            </div>
            {
                props.hasSettings
                    ? (
                        <GearContainer
                            id={gearContainerId}
                            onClick={e => {
                                e.preventDefault();
                                // @ts-ignore
                                props.openSettings();
                            }}
                        >
                            <Gear
                                color={isHover ? COLORS.primaryGreen : COLORS.darkGray}
                                opacity={1}
                                elementIds={elementIdsForGear}
                            />
                        </GearContainer>
                    ) : null
            }
        </HorizontalFlexer>
    );

    let contents = innerContents;
    if (props.linkTo) {
        contents = <Link style={{ textDecoration: 'none' }} to={props.linkTo}>{innerContents}</Link>;
    } else if (props.isWaterablePlant) {
        contents = (
            <WaveWrapper
                elementIdKey={props.elementKey}
                onReachEnd={props.onReachEndOfWaveTransition ? props.onReachEndOfWaveTransition : () => undefined}
                suppressWaveForNodes={elementIdsForGear}
            >
                {innerContents}
            </WaveWrapper>
        );
    }

    const addedStyle = {
        ...(isHover ? { border: `1px solid ${COLORS.fadedPrimaryGreen}` } : {}),
        ...(props.containerStyle || {}),
    };
    return (
        <StyledTile
            onClick={props.onClick || (() => undefined)}
            onMouseOver={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={addedStyle}
            key={props.elementKey}
        >
            {contents}
        </StyledTile>
  );
};