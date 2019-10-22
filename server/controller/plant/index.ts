import * as graphQl from "graphql";
import PlantService from '../../service/plant.service';

const plantService = new PlantService();
const habitatIdConfig = { type: graphQl.GraphQLInt };
const nameConfig = { type: graphQl.GraphQLString };
const imageUrlConfig = { type: graphQl.GraphQLString };
const lastWateredConfig = { type: graphQl.GraphQLInt };
const waterIntervalConfig = { type: graphQl.GraphQLInt };
const idConfig = { type: graphQl.GraphQLInt };

const plantType = new graphQl.GraphQLObjectType({
  fields: {
    habitatId: habitatIdConfig,
    name: nameConfig,
    imageUrl: imageUrlConfig,
    lastWatered: lastWateredConfig,
    waterInterval: waterIntervalConfig,
    createdAt: { type: graphQl.GraphQLString },
    updatedAt: { type: graphQl.GraphQLString },
    id: idConfig,
  },
  name: 'Plant',
});

const query = {
  args: {
    habitatId: habitatIdConfig,
    name: nameConfig,
    lastWatered: lastWateredConfig,
    waterInterval: waterIntervalConfig,
    id: idConfig,
  },
  resolve: (_, args) => plantService.findAll(args),
  type: graphQl.GraphQLList(plantType),
};

export { query };