import {GraphQLList} from "graphql";
import * as graphQl from "graphql";
import UserService from "../../service/user.service";
import {configs, userType} from "./types";

const userService = new UserService();

const updateUserName = {
    args: {
        name: { type: graphQl.GraphQLString },
    },
    resolve: async (_, args, context) => {
        const { userId } = context;
        return userService.updateOne(userId, { name: args.name });
    },
    type: userType,
};

const userMutations = {updateUserName};
export {userMutations};