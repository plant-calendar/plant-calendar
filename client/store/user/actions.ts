import TYPES from './types';
import {IUser} from "../../../server/db/models/user/user.interface";
import {entityId} from "../../../server/db/types";
import {ISubscriptionRequest} from "../../components/User/AcceptSubscriptionsModal";

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

export function fetchSubscriptionRequests(callback = () => undefined) {
    return { type: TYPES.USER_FETCH_SUBSCRIPTION_REQUESTS_REQUESTED, callback };
}

export function setSubscriptionRequests(requests) {
    return { type: TYPES.USER_SET_SUBSCRIPTION_REQUESTS, requests };
}

export function acceptSubscriptionRequest(request: ISubscriptionRequest, callback = () => undefined) {
    return { type: TYPES.USER_ACCEPT_SUBSCRIPTION_REQUEST_REQUESTED, request, callback };
}

export function rejectSubscriptionRequest(request: ISubscriptionRequest, callback = () => undefined) {
    return { type: TYPES.USER_REJECT_SUBSCRIPTION_REQUEST_REQUESTED, request, callback };
}
