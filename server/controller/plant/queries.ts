import * as graphQl from "graphql";
import PlantService from '../../service/plant.service';
import {plantType, configs} from './types';

const plantService = new PlantService();

const getPlants = {
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

const plantQueries = { getPlants };
export {plantQueries};