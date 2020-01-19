import * as graphQl from "graphql";

const habitatIdConfig = {type: graphQl.GraphQLInt};
const nameConfig = {type: graphQl.GraphQLString};
const imageUrlConfig = {type: graphQl.GraphQLString};
const lastWateredConfig = {type: graphQl.GraphQLString};
const waterIntervalConfig = {type: graphQl.GraphQLInt};
const idConfig = {type: graphQl.GraphQLInt};

const configs = {
  habitatId: habitatIdConfig,
  name: nameConfig,
  imageUrl: imageUrlConfig,
  lastWatered: lastWateredConfig,
  waterInterval: waterIntervalConfig,
  createdAt: {type: graphQl.GraphQLString},
  updatedAt: {type: graphQl.GraphQLString},
  id: idConfig,
};

const plantType = new graphQl.GraphQLObjectType({
  fields: configs,
  name: 'Plant',
});

export {
  plantType,
  configs,
};