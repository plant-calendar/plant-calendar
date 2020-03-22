import {GraphQLList} from "graphql";
import * as graphQl from "graphql";
import UserService from "../../service/user.service";
import HabitatSubscriptionService from "../../service/habitat-subscription.service";
import {configs, userType} from "./types";

const userService = new UserService();
const habitatSubscriptionService = new HabitatSubscriptionService();

const updateUserName = {
    args: {
        name: { type: graphQl.GraphQLString },
    },
    resolve: async (_, args, context) => {
        const { userId } = context;
        return userService.updateOne(userId, { name: args.name });
    },
    type: userType,
};

const acceptHabitatSubscriptionRequest = {
    args: {
        subscriptionId: { type: graphQl.GraphQLInt },
    },
    resolve: async (_, args, context) => {
        const { userId } = context;
        await habitatSubscriptionService.respondToUserRequestToHabitat(userId, args.subscriptionId, true);
    },
    type: graphQl.GraphQLInt,
};

const rejectHabitatSubscriptionRequest = {
    args: {
        subscriptionId: { type: graphQl.GraphQLInt },
    },
    resolve: async (_, args, context) => {
        const { userId } = context;
        await habitatSubscriptionService.respondToUserRequestToHabitat(userId, args.subscriptionId, false);
    },
    type: graphQl.GraphQLInt,
};

const userMutations = { updateUserName, acceptHabitatSubscriptionRequest, rejectHabitatSubscriptionRequest };
export {userMutations};