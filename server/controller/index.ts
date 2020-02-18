import {GraphQLSchema, GraphQLObjectType} from "graphql";
import plant from './plant';
import habitat from './habitat';
import user from './user';


const queryType = new GraphQLObjectType({
  fields: () => ({
    ...plant.plantQueries,
    ...habitat.habitatQueries,
    ...user.userQueries,
  }),
  name: 'Query',
});
const mutationType = new GraphQLObjectType({
  fields: () => ({
    ...plant.plantMutations,
    ...habitat.habitatMutations,
    ...user.userMutations,
  }),
  name: 'Mutation',
});

export default new GraphQLSchema({
  query: queryType,
  mutation: mutationType,
});