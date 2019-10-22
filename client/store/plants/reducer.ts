import {IPlant} from "../../../server/db/models/plant/plant.interface";
import {PLANTS_FETCH_BY_HABITAT_ID_SUCCEEEDED} from "./types";

const defaultState = {
  data: [],
};

interface IPlantAction {
  type: string;
  plants: IPlant[];
}

export default (state = defaultState, action: IPlantAction = { type: 'default', plants: [] }) => {
  switch (action.type) {
    case PLANTS_FETCH_BY_HABITAT_ID_SUCCEEEDED:
      const { plants } = action;
      return {
        ...state,
        data: plants,
      };
    default:
      return state;
  }
};
