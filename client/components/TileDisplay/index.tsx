import React from 'react';
import styled from 'styled-components';
import Avatar from "./avatar";
import {COLORS, TILE_HEIGHT} from "../style-config";
import {ITagProps, Tag} from "./tag";

const TileText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 30px;
  color: ${COLORS.primaryGreen};
`;

const TitleRow = styled.div`
  display: flex;
  margin-bottom: 6px;
`;

const TileTitle = styled.div`
 font-weight: 600;
 color: ${COLORS.darkGreen};
`;

const TileDetails = styled.div`
  font-size: 14px;
`;

const TagsContainer = styled.div`
  display: flex;
  padding-left: 10px;
`;

interface ITileProps {
  title: string;
  details: string;
  imageUrl?: string;
  style?: object;
  alert?: boolean;
  tags?: ITagProps[];
}

const Tile = (props: ITileProps) => {
  const {
    style = {},
    imageUrl = "https://static.onecms.io/wp-content/uploads/sites/37/2016/05/15233355/zz-plant_AdobeStock_213696329_0.jpg",
    tags = [],
    alert = false,
    title,
    details,
  } = props;

  const getStyleFromKeyVal = (key, val) => `\n${key}: ${val};`;
  const styleString = Object.keys(style).reduce(
    (stringSoFar, styleKey) => stringSoFar + getStyleFromKeyVal(styleKey, style[styleKey]),
    `display: flex;
    justify-content: center;
    height: ${TILE_HEIGHT};
    text-decoration: none;`,
  );
  const StyledTile = styled.div`${styleString}`;

  // return (
  //   <div>
  //     <StyledTile>
  //       <Avatar alert={alert} imageUrl={imageUrl}/>
  //       <TileText>
  //         <TitleRow>
  //           <TileTitle>{title}</TileTitle>
  //           <TagsContainer>{
  //             // @ts-ignore
  //             ...tags.map(tagProps => <Tag {...tagProps} />)
  //           }</TagsContainer>
  //         </TitleRow>
  //         <TileDetails>{details}</TileDetails>
  //       </TileText>
  //     </StyledTile>
  //   </div>
  // );
  return (
    <div>
      <div>
        <Avatar alert={alert} imageUrl={imageUrl}/>
        <div>
          <div>
            header text
          </div>
          <div>
            details text
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tile;