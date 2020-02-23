import {entityId} from "../../server/db/types";
import {gql} from "apollo-boost";

export default client => ({
    getByIds: {
        request: async (habitatIds: entityId[]) => client.query({
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
            variables: { habitatIds }, // todo... there should be token here, right???
            fetchPolicy: 'no-cache',
        }),
        response: res => res.data.getHabitats,
    },
    getUserSubscribed: {
        request: async userId => client.query({
            query: gql`
                query GetUserSubscribedHabitats($id: Int!) {
                    getUserSubscribedHabitats(id: $id) {
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
            variables: { id: userId },
            fetchPolicy: 'no-cache',
        }),
        response: res => res.data.getUserSubscribedHabitats,
    },
    createOne: {
        request: async ({ name }) => client.mutate({
            mutation: gql`
                mutation CreateHabitat($name: String!) {
                    createHabitat(name: $name) {
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
            variables: { name },
        }),
        response: res => res.data.createHabitat,
    },
});