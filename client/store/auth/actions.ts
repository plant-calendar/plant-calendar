import TYPES from './types';

export function getHaveCorrectUser(url) {
    return { type: TYPES.GET_HAVE_USER_REQUESTED, url };
}

export function setHaveCorrectUser(haveCorrectUser) {
    return { type: TYPES.SET_HAVE_USER, haveCorrectUser };
}