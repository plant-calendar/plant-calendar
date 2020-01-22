import {GraphQLList} from "graphql";
import * as graphQl from "graphql";
import UserService from "../../service/user.service";
import {configs, userType} from "./types";

const userService = new UserService();

const createUser = {
    args: {
        token: { type: graphQl.GraphQLString },
        name: { type: graphQl.GraphQLString },
    },
    resolve: (_, args) => {
        return userService.createFromToken(args.token, args.name);
    },
    type: userType,
};

const userMutations = {createUser};
export {userMutations};