import * as graphQl from "graphql";
import PlantService from '../../service/plant.service';
import {plantType, configs} from './types';

const plantService = new PlantService();

const getPlants = {
  args: configs,
  resolve: (_, args) => plantService.findAll(args),
  type: graphQl.GraphQLList(plantType),
};

const plantQueries = { getPlants };
export {plantQueries};