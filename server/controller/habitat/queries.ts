import * as graphQl from "graphql";
import {habitatType} from "./types";
import HabitatService from '../../service/habitat.service';
import UserService from '../../service/user.service';

const habitatService = new HabitatService();
const userService = new UserService();


const getHabitats = {
  args: {
    id: { type: graphQl.GraphQLList(graphQl.GraphQLInt) },
    name: { type: graphQl.GraphQLList(graphQl.GraphQLString) },
    userToken: { type: graphQl.GraphQLString },
  },
  resolve: async (_, args, context) => {
    const { userToken, ...habitatQuery } = args;
    context.userId = await userService.getOrCreateUserIdFromGoogleToken(userToken);
    return habitatService.findAll(habitatQuery);
  },
  type: graphQl.GraphQLList(habitatType),
};

const habitatQueries = { getHabitats };
export {habitatQueries};
