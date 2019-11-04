import { IHabitat } from '../../../../server/db/models/habitat/habitat.interface';
import { IPlant } from '../../../../server/db/models/plant/plant.interface';

export interface IStoreHabitat extends IHabitat {
  plants?: IPlant[];
  subscriptions?: number[]; // plant ids of the plants the user is subscribed to
}
