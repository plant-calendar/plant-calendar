import React from 'react';
import {COLORS} from "../style-config";
import styled from 'styled-components';

export interface ITagProps {
  text: string;
  backgroundColor?: string;
  color?: string;
}

export const Tag = (props: ITagProps) => {
  const { text, backgroundColor, color } = props;
  const TileAlert = styled.div`
    background-color: ${backgroundColor || COLORS.notification};
    margin-right: 5px;
    color: ${color || COLORS.white};
    font-size: 9px;
    padding: 5px;
    opacity: 0.6;
  `;
  return <TileAlert>{text}</TileAlert>;
};