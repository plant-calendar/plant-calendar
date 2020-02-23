import TYPES from './types';

const defaultState = {
    data: {
      haveCorrectUser: null,
    },
    loading: false,
};

export default (state = defaultState, action) => {
    if (action.type === TYPES.SET_HAVE_USER) {
        return { ...state, data: { ...state.data, haveCorrectUser: action.haveCorrectUser }, loading: false };
    }
    if (action.type === TYPES.GET_HAVE_USER_REQUESTED) {
        return { ...state, loading: true };
    }
    return state;
};

