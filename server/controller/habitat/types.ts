import {GraphQLInt, GraphQLList} from "graphql";
import * as graphQl from "graphql";
import plants from '../plant';
import PlantService from '../../service/plant.service';
import HabitatSubscriptionService from '../../service/habitat-subscription.service';
import {entityId, SUBSCRIPTION_STATUSES} from "../../../common/db-interfaces/types";
import PlantSubscriptionService from "../../service/plant-subscription.service";
import userController from '../user';

const idConfig = { type: graphQl.GraphQLInt };
const nameConfig = { type: graphQl.GraphQLString };
const imageUrlConfig = { type: graphQl.GraphQLString };

const plantService = new PlantService();
const habitatSubscriptionService = new HabitatSubscriptionService();
const plantSubscriptionService = new PlantSubscriptionService();

// if the user is not subscribed to habitat, they cannot see plants in it
const canSeeHabitatPlants = async (userId, habitatId): Promise<boolean> => {
  const subscriptions = await habitatSubscriptionService.findAll({ userId, habitatId, status: SUBSCRIPTION_STATUSES.ACTIVE });
  return !!subscriptions.length;
};

const habitatType = new graphQl.GraphQLObjectType({
  fields: {
    id: idConfig,
    name: nameConfig,
    imageUrl: imageUrlConfig,
    plants: {
      type: GraphQLList(plants.plantType),
      resolve: async (root, args, context) => {
        if (!await canSeeHabitatPlants(context.userId, root.id)) {
          return [];
        }
        // @ts-ignore
        return plantService.findAll({ habitatId: root.id });
      },
    },
    plantSubscriptions: {
      type: GraphQLList(GraphQLInt), // list of plant ids
      resolve: async (root, args, context): Promise<entityId[]> => {
        if (!await canSeeHabitatPlants(context.userId, root.id)) {
          return [];
        }
        const habitatPlants = await plantService.findAll({ habitatId: root.id });
        const subs = await plantSubscriptionService.findAll({
          plantId: habitatPlants.map(plant => plant.id),
          userId: context.userId,
          status: 'active',
        });
        return subs.map(sub => sub.plantId);
      },
    },
    subscription: { type: userController.habitatSubscriptionType },
  },
  name: 'Habitat',
});

const configs = {
  idConfig,
  nameConfig,
};
export { habitatType, configs };