import HabitatService from "../../service/habitat.service";
import UserService from "../../service/user.service";
import HabitatSubscriptionService from "../../service/habitat-subscription.service";
import * as graphQl from "graphql";
import {habitatType} from "./types";

const habitatService = new HabitatService();
const userService = new UserService();
const habitatSubscriptionService = new HabitatSubscriptionService();

const createHabitat = {
    args: {
        userToken: { type: graphQl.GraphQLString },
        name: { type: graphQl.GraphQLString },
    },
    resolve: async (_, args, context) => {
        // const { userToken, ...habitatProperties } = args;
        // const userId = await userService.getOrCreateUserIdFromGoogleToken(userToken);
        // context.userId = userId;
        //
        // const habitat = await habitatService.createOne(habitatProperties);
        // console.log('creating subscription');
        // await habitatSubscriptionService.createOne({
        //     // @ts-ignore
        //     habitatId: habitat.id,
        //     userId,
        //     isAdmin: true,
        //     status: 'active',
        // });
        // console.log('done creating subscription');
        // return habitat;
        throw new Error('not implemented')
    },
    type: habitatType,
};

const habitatMutations = { createHabitat };
export { habitatMutations };