import React from 'react';
import {plantDataAccessors} from "../../../../common/data-accessors/plant";
import Tile from "../../Tile";

export const PlantToWater = ({ plant }) => (
  <Tile
    title={plant.name}
    details={`Last watered ${plantDataAccessors.daysSinceWatered(plant)} days ago`}
    imageUrl={plant.imageUrl || ''}
  />
);