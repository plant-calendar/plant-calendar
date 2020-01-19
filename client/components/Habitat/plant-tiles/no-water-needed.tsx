import React from 'react';
import {plantDataAccessors} from "../../../../common/data-accessors/plant";
import {IPlant} from "../../../../server/db/models/plant/plant.interface";
import {COLORS} from "../../style-config";
import Tile from '../../Tile';

interface INoWaterNeededPlantProps {
  plant: IPlant;
}

export const NoWaterNeededPlant = ({ plant }: INoWaterNeededPlantProps) => (
  <Tile
    title={plant.name}
    details={`Last watered ${plantDataAccessors.daysSinceWatered(plant)} days ago`}
    imageUrl={plant.imageUrl || ''}
    style={{ opacity: '0.4' }}
  />
);