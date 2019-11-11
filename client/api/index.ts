import axios from 'axios';
const BASE_URL = 'localhost:8080/graphql';

export default {
  habitat: {
    getByIds: async (habitatIds: number[]) => {
      const queryString = `habitat(id: ${habitatIds}) {
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
    }`;
      return axios.get(`${BASE_URL}?query=${queryString}`);
    },
  },
  plant: {
    waterById: async (plantId: number) => {
      // console.log(`client api watering plant ${plantId}`);
      // await client.mutate({
      //   mutation: gql`
      //     mutation waterMutation($plantId: Int!, $lastWatered: String!) {
      //       plant(id: $plantId, lastWatered: $lastWatered) {
      //         id
      //         lastWatered
      //       }
      //     }
      //   `,
      //   variables: { plantId, lastWatered: new Date() },
      // });
    },
  },
};
