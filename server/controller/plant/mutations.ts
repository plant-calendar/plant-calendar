import {GraphQLList} from "graphql";
import * as graphQl from "graphql";
import PlantService from "../../service/plant.service";
import {configs, plantType} from "./types";

const plantService = new PlantService();

const waterPlantsByIds = {
  args: {
    ids: { type: graphQl.GraphQLList(graphQl.GraphQLInt) },
  },
  resolve: (_, args) => plantService.updateMany(args.ids, { lastWatered: new Date() }),
  type: graphQl.GraphQLList(graphQl.GraphQLInt),
};

const createPlant = {
  args: configs,
  resolve: (_, args) => plantService.createOne(args),
  type: plantType,
};

const plantMutations = {waterPlantsByIds, createPlant};
export {plantMutations};