import TYPES from './types';

export function getHaveUser() {
    return { type: TYPES.GET_HAVE_USER_REQUESTED };
}

export function setHaveUser(haveUser) {
    return { type: TYPES.SET_HAVE_USER, haveUser };
}