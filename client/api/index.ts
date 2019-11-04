import ApolloClient, { gql } from 'apollo-boost';

// by default uses the /graphql endpoint on the server you are on
// can optionally provide uri param if that is not the endpoint you want
const client = new ApolloClient({});

export default {
  habitat: {
    getByIds: (habitatIds: number[]) =>
      client.query({
        // todo this is wrong for habitat
        query: gql`
          query arbitrary($habitatIds: [Int]!) {
            habitat(id: $habitatIds) {
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
      }),
  },
};
