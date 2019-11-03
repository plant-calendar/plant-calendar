import React from 'react';
import {IPlant} from "../../../../server/db/models/plant/plant.interface";
import {SingleTileContainer} from "../styled-components";
import PlantTransition from '../plant-transition';


export const PlantTileWrapper = (props) => (
  <SingleTileContainer>
    {props.canWater ? (
      <PlantTransition
        onReachEnd={props.onReachEndOfWaterTransition}
        plantId={props.plant.id}>
        {props.children}
      </PlantTransition>
    ) : (
      props.children
    )}
  </SingleTileContainer>
);