import {GraphQLInt, GraphQLList} from "graphql";
import * as graphQl from "graphql";
import plants from '../plant';
import PlantService from '../../service/plant.service';
import HabitatSubscriptionService from '../../service/habitat-subscription.service';

const idConfig = { type: graphQl.GraphQLInt };
const nameConfig = { type: graphQl.GraphQLString };

const plantService = new PlantService();
const habitatSubscriptionService = new HabitatSubscriptionService();

const habitatType = new graphQl.GraphQLObjectType({
  fields: {
    id: idConfig,
    name: nameConfig,
    plants: {
      type: GraphQLList(plants.plantType),
      resolve: async (root, args, context) => {
        // if the user is not subscribed to habitat, they cannot see plants in it
        // @ts-ignore
        const subscription = (await habitatSubscriptionService.findAll({ userId: context.userId, habitatId: root.id,
        }) || [])[0];
        if (!subscription) {
         return [];
        }
        // @ts-ignore
        return plantService.findAll({ habitatId: root.id });
      },
    },
    subscriptions: {
      type: GraphQLList(GraphQLInt), // list of plant ids
      resolve: (root, args) => {
        return [1, 2];
      },
    },
  },
  name: 'Habitat',
});

const configs = {
  idConfig,
  nameConfig,
};
export { habitatType, configs };