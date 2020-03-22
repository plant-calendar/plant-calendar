import {entityId} from "../../common/db-interfaces/types";
import {gql} from "apollo-boost";

export default client => ({
    getByIds: {
        request: async (habitatIds: entityId[]) => client.query({
            query: gql`
                query GetHabitats($habitatIds: [Int]!) {
                  getHabitats(id: $habitatIds) {
                    id
                    name
                    imageUrl
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
                    plantSubscriptions
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
                        imageUrl
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
                        plantSubscriptions
                        subscription {
                            id
                            userId
                            habitatId
                            status
                        }
                    }
                }
            `,
            variables: { id: userId },
            fetchPolicy: 'no-cache',
        }),
        response: res => res.data.getUserSubscribedHabitats,
    },
    createOne: {
        request: async ({ name, imageUrl }) => client.mutate({
            mutation: gql`
                mutation CreateHabitat($name: String!, $imageUrl: String!) {
                    createHabitat(name: $name, imageUrl: $imageUrl) {
                        id
                        name
                        imageUrl
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
                        plantSubscriptions
                    }
                }
            `,
            variables: { name, imageUrl },
        }),
        response: res => res.data.createHabitat,
    },
    nameSearch: {
      request: async (searchedString: string) => client.query({
        query: gql`
            query HabitatSearch($name: String!) {
                searchHabitats(name: $name) {
                    id
                    name
                    imageUrl
                }
            }
        `,
        variables: { name: searchedString },
        fetchPolicy: 'no-cache',
      }),
      response: res => res.data.searchHabitats,
    },
    requestSubscription: {
        request: async (habitatId: entityId) => client.mutate({
            mutation: gql`
                mutation RequestSubscriptionToHabitat($habitatId: Int!) {
                    requestSubscriptionToHabitat(habitatId: $habitatId)
                }
            `,
            variables: { habitatId },
        }),
        response: res => res.data.requestSubscriptionToHabitat,
    },
});