import {GraphQLSchema, GraphQLObjectType} from "graphql";
import plant from './plant';
import habitat from './habitat';

// fetch all the plants for a habitat
// fetch all the habitats for a user
// fetch all the plants for a user
// fetch all the habitat subscriptions for a user

// request a habitat subscription
// subscribe to a plant
// create a plant
// create a habitat
// water a plant
// update a plant

const queryType = new GraphQLObjectType({
  fields: () => ({
    plant: plant.plantQuery,
    habitat: habitat.habitatQuery,
  }),
  name: 'Query',
});

export default new GraphQLSchema({
  query: queryType,
});