import UserService from '../../service/user.service';
import {userType, configs} from './types';

const userService = new UserService();

const getUserByToken = {
    args: { token: configs.token },
    resolve: (_, args) => userService.findOneByGoogleToken(args.token),
    type: userType,
};

const userQueries = { getUserByToken };
export {userQueries};