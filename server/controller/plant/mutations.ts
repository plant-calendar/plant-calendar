import * as graphQl from "graphql";
import * as _ from 'lodash';
import PlantService from "../../service/plant.service";
import {configs, plantType} from "./types";
import PlantSubscriptionService from "../../service/plant-subscription.service";

const plantService = new PlantService();
const plantSubscriptionService = new PlantSubscriptionService();

const waterPlantsByIds = {
  args: {
    ids: { type: graphQl.GraphQLList(graphQl.GraphQLInt) },
  },
  resolve: (root, args) => plantService.updateMany(args.ids, { lastWatered: new Date() }),
  type: graphQl.GraphQLList(graphQl.GraphQLInt),
};

const createPlant = {
  args: { ...configs, subscribed: { type: graphQl.GraphQLBoolean }},
  resolve: async (root, args, context) => {
    const plant = await plantService.createOne(_.omit(args, 'subscribed'));
    if (args.subscribed) {
      // @ts-ignore
      await plantSubscriptionService.createOne({ userId: context.userId, plantId: plant.id, status: 'active' });
    }
    return plant;
  },
  type: plantType,
};

const updatePlant = {
  args: { ...configs, subscribed: { type: graphQl.GraphQLBoolean }},
  resolve: async (root, args, context) => {
    const plant = await plantService.updateOne(args.id, _.omit(args, 'subscribed'));
    console.log(`successfully updated... ${plant.lastWatered}`);
    if (args.subscribed === true) {
      await plantSubscriptionService.subscribeIdempotently(context.userId, args.id);
    } else if (args.subscribed === false) {
      await plantSubscriptionService.unsubscribe(context.userId, args.id);
    }
    return plant;
  },
  type: plantType,
};

const plantMutations = {waterPlantsByIds, createPlant, updatePlant};
export {plantMutations};