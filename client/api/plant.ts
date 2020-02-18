import {entityId} from "../../server/db/types";
import {gql} from "apollo-boost";
import {IPlant} from "../../server/db/models/plant/plant.interface";

export default client => ({
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
});