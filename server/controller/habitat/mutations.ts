import HabitatService from "../../service/habitat.service";
import UserService from "../../service/user.service";
import HabitatSubscriptionService from "../../service/habitat-subscription.service";
import * as graphQl from "graphql";
import {habitatType} from "./types";
import {IHabitatSubscription} from "../../db/models/habitatSubsription/habitatSubscription.interface";

const habitatService = new HabitatService();
const userService = new UserService();
const habitatSubscriptionService = new HabitatSubscriptionService();

const createHabitat = {
    args: {
        name: { type: graphQl.GraphQLString },
    },
    resolve: async (_, args, context) => {
        const habitat = await habitatService.createOne(args);
        const { userId } = context;
        const sub: Partial<IHabitatSubscription> = {
            // @ts-ignore
            habitatId: habitat.id,
            userId,
            isAdmin: true,
            adminAccepted: true,
            subscriberAccepted: true,
            status: 'active',
        };

        await habitatSubscriptionService.createOne(sub);
        console.log('done creating subscription');
        return habitat;
    },
    type: habitatType,
};

const acceptInvitationToHabitat = {
    args: {
        habitatId: { type: graphQl.GraphQLInt },
    },
    resolve: async (_, args, context) => {
        const { userId } = context;
        await habitatSubscriptionService.acceptInvitationToHabitat(userId, args.habitatId);
    },
    type: habitatType,
};

const adminAcceptUserRequestToHabitat = {
    args: {
      subscriptionId: { type: graphQl.GraphQLInt },
    },
    resolve: async (_, args, context) => {
        await habitatSubscriptionService.acceptUserRequestToHabitat(
            context.userId,
            args.subscriptionId,
        );
    },
    type: habitatType,
};

const adminInviteUserToHabitat = {
    args: {
        invitedId: { type: graphQl.GraphQLInt },
        habitatId: { type: graphQl.GraphQLInt },
        asAdmin: { type: graphQl.GraphQLBoolean },
    },
    resolve: async (_, args, context) => {
        await habitatSubscriptionService.inviteUserToHabitat(
            context.userId,
            args.invitedId,
            args.habitatId,
            args.asAdmin,
        );
    },
    type: habitatType,
};


const habitatMutations = {
    createHabitat,
    acceptInvitationToHabitat,
    adminAcceptUserRequestToHabitat,
    adminInviteUserToHabitat,
};
export { habitatMutations };