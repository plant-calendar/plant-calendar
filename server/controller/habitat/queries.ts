import * as graphQl from "graphql";
import {habitatType} from "./types";
import HabitatService from '../../service/habitat.service';
import UserService from '../../service/user.service';
import {IHabitat} from "../../db/models/habitat/habitat.interface";

const habitatService = new HabitatService();
const userService = new UserService();


const getHabitats = {
  args: {
    id: { type: graphQl.GraphQLList(graphQl.GraphQLInt) },
    name: { type: graphQl.GraphQLList(graphQl.GraphQLString) },
    userToken: { type: graphQl.GraphQLString },
  },
  resolve: async (_, args) => habitatService.findAll(args),
  type: graphQl.GraphQLList(habitatType),
};

const getUserSubscribedHabitats = {
  args: {
    id: { type: graphQl.GraphQLInt },
  },
  resolve: async (_, args, context) => {
    // only if they queried for themselves can they see subscriptions
    if (context.userId !== args.id) {
      return null;
    }
    const habitatIds = context.subscribedHabitats.map(subscription => subscription.habitatId);
    return habitatService.findAll({ id: habitatIds });
  },
  type: graphQl.GraphQLList(habitatType),
};



const habitatQueries = { getHabitats, getUserSubscribedHabitats };
export {habitatQueries};
