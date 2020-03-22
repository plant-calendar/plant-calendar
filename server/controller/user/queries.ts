import UserService from '../../service/user.service';
import HabitatSubscriptionService from '../../service/habitat-subscription.service';
import {userType, habitatSubscriptionType, configs} from './types';
import {GraphQLList, GraphQLObjectType, GraphQLString} from "graphql";

const userService = new UserService();
const habitatSubscriptionService = new HabitatSubscriptionService();

const getUserById = {
    args: { id: configs.id },
    resolve: async (_, args) => userService.findOneById(args.id),
    type: userType,
};

const getAllNames = {
    // @ts-ignore
    resolve: async () => userService.getAllNames(),
    type: GraphQLList(GraphQLString),
};

const getSubscriptionRequests = {
    resolve: async (_, args, context) => habitatSubscriptionService.getSubscriptionRequestsForAdmin(context.userId),
    type: GraphQLList(habitatSubscriptionType),
};

const userQueries = { getUserById, getAllNames, getSubscriptionRequests };
export {userQueries};