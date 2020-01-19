import ApolloClient, { gql } from 'apollo-boost';
import {entityId} from "../../server/db/types";

// by default uses the /graphql endpoint on the server you are on
// can optionally provide uri param if that is not the endpoint you want
const client = new ApolloClient({

});

export default {
  habitat: {
    getByIds: async (habitatIds: entityId[]) => client.query({
      query: gql`
        query GetHabitats($habitatIds: [Int]!) {
          getHabitats(id: $habitatIds) {
            id
            name
            plants {
              id
              name
              habitatId
              imageUrl
              lastWatered
              waterInterval
              createdAt
              updatedAt
            }
            subscriptions
          }
        }
      `,
      variables: { habitatIds },
      fetchPolicy: 'no-cache',
    }),
  },
  plant: {
    waterByIds: async (ids: entityId[]) => client.mutate({
      mutation: gql`
        mutation WaterPlantsByIds($ids: [Int]!) {
          waterPlantsByIds(ids: $ids)
        }
      `,
      variables: { ids },
    }),
  },
};