import * as graphQl from "graphql";
import {habitatType} from "./types";
import HabitatService from '../../service/habitat.service';

const habitatService = new HabitatService();

const getHabitats = {
  args: {
    id: { type: graphQl.GraphQLList(graphQl.GraphQLInt) },
    name: { type: graphQl.GraphQLList(graphQl.GraphQLString) },
  },
  resolve: (_, args) => habitatService.findAll(args),
  type: graphQl.GraphQLList(habitatType),
};

const habitatQueries = { getHabitats };
export {habitatQueries};
