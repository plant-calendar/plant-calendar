import {IStoreHabitat} from "./interfaces/store-habitat.interface";
import TYPES from "./types";

const defaultState = {
  data: [],
};

export default (state = defaultState, action: { type: TYPES, habitats?: IStoreHabitat[] }) => {
  console.log("reducer got action of ", action);
  switch (action.type) {
    case TYPES.SET_HABITATS:
      const { habitats } = action;
      return {
        ...state,
        data: habitats,
      };
    default:
      return state;
  }
};
