import * as graphQl from 'graphql';
import PlantService from '../../service/plant.service';
import { plantType, configs } from './types';

const plantService = new PlantService();

const updatePlant = {
  args: {
    habitatId: configs.habitatIdConfig,
    name: configs.nameConfig,
    lastWatered: configs.lastWateredConfig,
    waterInterval: configs.waterIntervalConfig,
    id: configs.idConfig,
  },
  resolve: (_, args) => {
    console.log(args);
    return plantService.update(args);
  },
  type: graphQl.GraphQLList(plantType),
};

export { updatePlant };
