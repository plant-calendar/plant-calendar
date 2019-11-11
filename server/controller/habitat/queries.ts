import * as graphQl from 'graphql';
import { habitatType } from './types';
import HabitatService from '../../service/habitat.service';

const habitatService = new HabitatService();

const habitatQuery = {
  args: {
    id: { type: graphQl.GraphQLList(graphQl.GraphQLInt) },
    name: { type: graphQl.GraphQLList(graphQl.GraphQLString) },
  },
  resolve: (_, args) => {
    console.log('habitat query was made');
    return habitatService.findAll(args);
  },
  type: graphQl.GraphQLList(habitatType),
};

export { habitatQuery };
