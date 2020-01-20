import React from 'react';
import {plantDataAccessors} from "../../../../common/data-accessors/plant";
import {COLORS} from "../../style-config";
import Tile from "../../Tile";
import {IPlant} from "../../../../server/db/models/plant/plant.interface";

interface IPlantTileProps {
  plant: IPlant;
  daysOverdueForWater: number;
  subscribed: boolean;
}

export const PlantTile = ({ plant, daysOverdueForWater, subscribed }: IPlantTileProps) => {
  const tags = [
    ...(daysOverdueForWater > 0
          ? [{ text: 'needs water', backgroundColor: COLORS.notification, color: COLORS.white, key: `${plant.id}-needs-water` }]
          : []
      ),
    ...(subscribed
          ? []
          : [{
              text: 'not subscribed',
              backgroundColor: COLORS.darkGray,
              color: COLORS.white,
              key: `${plant.id}-not-subscribed`,
            }]
      ),
  ];
  return (
    <Tile
      style={subscribed ? {} : { opacity: '0.4' }}
      alert={daysOverdueForWater > 0}
      tags={tags}
      title={plant.name}
      details={`Last watered ${plantDataAccessors.daysSinceWatered(plant)} days ago`}
      imageUrl={plant.imageUrl ? plant.imageUrl : undefined}
    />
  );
};