import ApolloClient, { gql } from 'apollo-boost';
import {IPlant} from "../../server/db/models/plant/plant.interface";
import {entityId} from "../../server/db/types";
import reduxStore from '../store';
import { selectors as userSelectors } from '../store/user';

// by default uses the /graphql endpoint on the server you are on
// can optionally provide uri param if that is not the endpoint you want
const client = new ApolloClient({});

const getUserToken = () => userSelectors.getUserToken(reduxStore.getState());

export default {
  habitat: {
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
          query GetUserSubscribedHabitats($userId: String!, $token: String!) {
            getUserSubscribedHabitats(userId: $userId, token: $token) {
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
        variables: { userId, token: getUserToken() },
        fetchPolicy: 'no-cache',
      }),
      response: res => res.data.getUserSubscribedHabitats,
    },
  },
  plant: {
    waterByIds: {
      request: async (ids: entityId[]) => client.mutate({
        mutation: gql`
        mutation WaterPlantsByIds($ids: [Int]!) {
          waterPlantsByIds(ids: $ids)
        }
      `,
        variables: { ids }, // todo, there should be token???
      }),
      response: res => res.data.waterPlantsByIds,
    },
    createOne: {
      request: async (plant: IPlant) => client.mutate({
        mutation: gql`
        mutation CreatePlant($name: String!, $lastWatered: String!, $waterInterval: Int!, $habitatId: Int!) {
          createPlant(name: $name, lastWatered: $lastWatered, waterInterval: $waterInterval, habitatId: $habitatId) {
            id
            name
            habitatId
            lastWatered
            waterInterval
          }
        }
      `,
        variables: {
          name: plant.name,
          lastWatered: plant.lastWatered,
          waterInterval: plant.waterInterval,
          habitatId: plant.habitatId,
          // todo, there should be token here, right??
        },
      }),
      response: res => res.data.createPlant,
    },
  },
  user: {
    getByToken: {
      request: async (token: string) => client.query({
        query: gql`
        query GetUserByToken($token: String!) {
          getUserByToken(token: $token) {
            id
            name
          }
        }
      `,
        variables: { token },
      }),
      response: res => res.data.getUserByToken,
    },
    createOne: {
      request: async (name: string) => client.mutate({
        mutation: gql`
        mutation CreateUser($token: String!, $name: String!) {
          createUser(token: $token, name: $name) {
            id
            name
          }
        }
      `,
        variables: { token: getUserToken(), name },
      }),
      response: res => res.data.createUser,
    },
  },
};