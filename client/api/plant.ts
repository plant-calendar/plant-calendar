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
            variables: { ids },
        }),
        response: res => res.data.waterPlantsByIds,
    },
    createOne: {
        request: async (plant: IPlant) => client.mutate({
            mutation: gql`
                mutation CreatePlant($name: String!, $lastWatered: String!, $waterInterval: Int!, $habitatId: Int!, $imageUrl: String!, $subscribed: Boolean!) {
                  createPlant(name: $name, lastWatered: $lastWatered, waterInterval: $waterInterval, habitatId: $habitatId, imageUrl: $imageUrl, subscribed: $subscribed) {
                    id
                    name
                    habitatId
                    lastWatered
                    waterInterval
                    imageUrl
                  }
                }
              `,
            variables: {
                name: plant.name,
                lastWatered: plant.lastWatered,
                waterInterval: plant.waterInterval,
                habitatId: plant.habitatId,
                imageUrl: plant.imageUrl,
                subscribed: plant.subscribed,
            },
        }),
        response: res => res.data.createPlant,
    },
    updateOne: {
        request: async (plant: IPlant) => client.mutate({
            mutation: gql`
                mutation UpdatePlant($id: Int!, $name: String, $lastWatered: String, $waterInterval: Int, $habitatId: Int, $imageUrl: String, $subscribed: Boolean) {
                  updatePlant(id: $id, name: $name, lastWatered: $lastWatered, waterInterval: $waterInterval, habitatId: $habitatId, imageUrl: $imageUrl, subscribed: $subscribed) {
                    id
                    name
                    habitatId
                    lastWatered
                    waterInterval
                    imageUrl
                  }
                }
              `,
            variables: {
                id: plant.id,
                name: plant.name,
                lastWatered: plant.lastWatered,
                waterInterval: plant.waterInterval,
                habitatId: plant.habitatId,
                imageUrl: plant.imageUrl,
                subscribed: plant.subscribed,
            },
        }),
        response: res => res.data.updatePlant,
    },
});