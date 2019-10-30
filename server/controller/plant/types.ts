import * as graphQl from "graphql";

const habitatIdConfig = {type: graphQl.GraphQLInt};
const nameConfig = {type: graphQl.GraphQLString};
const imageUrlConfig = {type: graphQl.GraphQLString};
const lastWateredConfig = {type: graphQl.GraphQLString};
const waterIntervalConfig = {type: graphQl.GraphQLInt};
const idConfig = {type: graphQl.GraphQLInt};

const plantType = new graphQl.GraphQLObjectType({
  fields: {
    habitatId: habitatIdConfig,
    name: nameConfig,
    imageUrl: imageUrlConfig,
    lastWatered: lastWateredConfig,
    waterInterval: waterIntervalConfig,
    createdAt: {type: graphQl.GraphQLString},
    updatedAt: {type: graphQl.GraphQLString},
    id: idConfig,
  },
  name: 'Plant',
});

const configs = {
  habitatIdConfig,
  nameConfig,
  imageUrlConfig,
  lastWateredConfig,
  waterIntervalConfig,
  idConfig,
};
export {
  plantType,
  configs,
};