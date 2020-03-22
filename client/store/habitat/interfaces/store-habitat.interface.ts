import {IHabitat} from "../../../../common/db-interfaces/habitat.interface";
import {IPlant} from "../../../../common/db-interfaces/plant.interface";

export interface IStoreHabitat extends IHabitat {
  plants?: IPlant[];
  subscriptions?: string[]; // plant ids of the plants the user is subscribed to
}