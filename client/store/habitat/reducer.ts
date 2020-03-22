import {IStoreHabitat} from "./interfaces/store-habitat.interface";
import TYPES from "./types";
import {entityId} from "../../../common/db-interfaces/types";

const defaultState = {
  data: {
    habitats: [],
    queriedHabitats: [],
  },
};

export default (
    state = defaultState,
    action: {
      type: TYPES,
      habitats?: IStoreHabitat[],
      queriedHabitats?: Array<{ id: entityId; name: string }>,
    }) => {
      switch (action.type) {
        case TYPES.SET_HABITATS:
          const { habitats } = action;
          return {
            ...state,
            data: {
              ...state.data,
              habitats,
            },
          };
          case TYPES.HABITATS_SET_QUERIED_HABITATS:
            const { queriedHabitats } = action;
            return {
              ...state,
              data: {
                ...state.data,
                queriedHabitats,
              },
            };
        default:
          return state;
      }
};
