import * as graphQl from "graphql";
import PlantService from '../../service/plant.service';
import {plantType, configs} from './types';

const plantService = new PlantService();

const plantQuery = {
  args: {
    habitatId: configs.habitatIdConfig,
    name: configs.nameConfig,
    lastWatered: configs.lastWateredConfig,
    waterInterval: configs.waterIntervalConfig,
    id: configs.idConfig,
  },
  resolve: (_, args) => plantService.findAll(args),
  type: graphQl.GraphQLList(plantType),
};

export {plantQuery};