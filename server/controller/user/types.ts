import * as graphQl from "graphql";

const idConfig = {type: graphQl.GraphQLInt};
const stringConfig = { type: graphQl.GraphQLString };

const configs = {
    thirdPartyId: stringConfig,
    name: stringConfig,
    createdAt: stringConfig,
    updatedAt: stringConfig,
    id: idConfig,
};

const userType = new graphQl.GraphQLObjectType({
    fields: configs,
    name: 'User',
});

const habitatSubscriptionType = new graphQl.GraphQLObjectType({
    fields: {
        id: idConfig,
        userId: idConfig,
        habitatId: idConfig,
        userName: stringConfig,
        habitatName: stringConfig,
        status: stringConfig,
    },
    name: 'HabitatSubscription',
});

export { userType, habitatSubscriptionType, configs };
