import * as graphQl from "graphql";

const idConfig = {type: graphQl.GraphQLInt};

const configs = {
    token: {type: graphQl.GraphQLString},
    thirdPartyId: {type: graphQl.GraphQLString},
    name: {type: graphQl.GraphQLString},
    createdAt: {type: graphQl.GraphQLString},
    updatedAt: {type: graphQl.GraphQLString},
    id: idConfig,
};

const userType = new graphQl.GraphQLObjectType({
    fields: configs,
    name: 'User',
});

export {
    userType,
    configs,
};