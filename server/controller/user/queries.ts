import UserService from '../../service/user.service';
import {userType, configs} from './types';
import {GraphQLList, GraphQLString} from "graphql";

const userService = new UserService();

const getUserById = {
    args: { id: configs.id },
    resolve: async (_, args) => userService.findOneById(args.id),
    type: userType,
};

const getAllNames = {
    // @ts-ignore
    resolve: async () => userService.getAllNames(),
    type: GraphQLList(GraphQLString),
};

const userQueries = { getUserById, getAllNames };
export {userQueries};