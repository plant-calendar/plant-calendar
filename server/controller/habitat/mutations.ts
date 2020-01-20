import HabitatService from "../../service/habitat.service";
import * as graphQl from "graphql";
import {habitatType} from "./types";

const habitatService = new HabitatService();

const createHabitat = {
    args: {
        name: { type: graphQl.GraphQLString },
    },
    resolve: (_, args) => habitatService.createOne(args),
    type: habitatType,
};

const habitatMutations = { createHabitat };
export { habitatMutations };