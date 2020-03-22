import * as graphQl from "graphql";
import {habitatType} from "./types";
import HabitatService from '../../service/habitat.service';
import UserService from '../../service/user.service';
import HabitatSubscriptionService from '../../service/habitat-subscription.service';
import {entityId} from "../../db/types";

const habitatService = new HabitatService();
const habitatSubscriptionService = new HabitatSubscriptionService();
const userService = new UserService();


const getHabitats = {
  args: {
    id: { type: graphQl.GraphQLList(graphQl.GraphQLInt) },
    name: { type: graphQl.GraphQLList(graphQl.GraphQLString) },
  },
  resolve: async (_, args) => habitatService.findAll(args),
  type: graphQl.GraphQLList(habitatType),
};

const searchHabitats = {
  args: { name: { type: graphQl.GraphQLString }},
  resolve: async (_, args) => habitatService.searchByName(args.name),
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
    const subscriptions = await habitatSubscriptionService.findAll({ userId: args.id });
    // @ts-ignore
    const habitatIds: entityId[] = subscriptions.map(sub => sub.habitatId);
    const habitats = await habitatService.findAll({ id: habitatIds });
    return habitats.map(habitat => ({
      ...habitat,
      // @ts-ignore
      subscription: subscriptions.find(sub => sub.habitatId === habitat.id),
    }));
  },
  type: graphQl.GraphQLList(habitatType),
};



const habitatQueries = { getHabitats, getUserSubscribedHabitats, searchHabitats };
export {habitatQueries};
