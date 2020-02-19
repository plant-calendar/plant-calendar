import TYPES from './types';
import {IUser} from "../../../server/db/models/user/user.interface";
import {entityId} from "../../../server/db/types";

export function setUserToken(token: string) {
    return { type: TYPES.USER_SET_TOKEN, token };
}

export function createUser(name: string, callback = () => undefined) {
    return { type: TYPES.USER_CREATE_REQUESTED, name, callback };
}

// export function fetchUserByToken(token: string, callback?: () => undefined) {
//     return { type: TYPES.USER_FETCH_BY_TOKEN_REQUESTED, token, callback };
// }
export function fetchUserById(id: entityId, callback = () => undefined) {
    return { type: TYPES.USER_FETCH_BY_ID_REQUESTED, id, callback };
}

export function setUser(user: IUser) {
    return { type: TYPES.USER_SET_USER, user };
}

export function fetchAllNames() {
    return { type: TYPES.USER_FETCH_ALL_NAMES_REQUESTED };
}

export function setAllNames(allNames: string[]) {
    return { type: TYPES.USER_SET_ALL_NAMES, allNames };
}

export function updateName(name, callback = () => undefined) {
    return { type: TYPES.USER_UPDATE_NAME_REQUESTED, name, callback };
}