import {GraphQLList} from "graphql";
import * as graphQl from "graphql";
import PlantService from "../../service/plant.service";
import {configs, plantType} from "./types";

const plantService = new PlantService();

const waterPlantsByIds = {
  args: {
    ids: { type: graphQl.GraphQLList(graphQl.GraphQLInt) },
  },
  resolve: (_, args) => {
    console.log('hello!!!!!!!, args: ', args);
    return plantService.updateMany(args.ids, { lastWatered: new Date() });
  },
  type: graphQl.GraphQLList(graphQl.GraphQLInt),
};

const plantMutations = {waterPlantsByIds};
export {plantMutations};