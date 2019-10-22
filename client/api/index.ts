import ApolloClient, { gql } from 'apollo-boost';

// by default uses the /graphql endpoint on the server you are on
// can optionally provide uri param if that is not the endpoint you want
const client = new ApolloClient({});

export default {
  plant: {
    getByHabitatId: (habitatId: number) => client.query({
      query: gql`
        query arbitrary($habitatId: Int!) {
          plant(habitatId: $habitatId) {
            id
            name
          }
        }
      `,
      variables: { habitatId },
    }),
  },
};