import React from 'react';
import {COLORS} from "../style-config";
import styled from 'styled-components';

export interface ITagProps {
  text: string;
  elementKey: string;
  backgroundColor?: string;
  color?: string;
}

export const Tag = (props: ITagProps) => {
  const { text, backgroundColor, color, elementKey } = props;
  const TileAlert = styled.div`
    background-color: ${backgroundColor || COLORS.notification};
    margin-right: 5px;
    color: ${color || COLORS.white};
    font-size: 9px;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 3px;
    padding-right: 3px;
    opacity: 0.6;
  `;
  return <TileAlert key={elementKey}>{text}</TileAlert>;
};