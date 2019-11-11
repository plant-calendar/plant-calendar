import { GraphQLInt, GraphQLList } from 'graphql';
import * as graphQl from 'graphql';
import { IHabitat } from '../../db/models/habitat/habitat.interface';
import plants from '../plant';
import PlantService from '../../service/plant.service';

const idConfig = { type: graphQl.GraphQLInt };
const nameConfig = { type: graphQl.GraphQLString };
const plantService = new PlantService();

const habitatType = new graphQl.GraphQLObjectType({
  fields: {
    id: idConfig,
    name: nameConfig,
    plants: {
      type: GraphQLList(plants.plantType),
      resolve: root => {
        const dataValues: IHabitat = root.dataValues;
        return plantService.findAll({ habitatId: dataValues.id });
      },
    },
    subscriptions: {
      type: GraphQLList(GraphQLInt), // list of plant ids
      resolve: root => {
        return [1];
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
