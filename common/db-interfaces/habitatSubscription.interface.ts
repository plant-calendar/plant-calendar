import { IBaseEntity } from './baseEntity.interface';
import {entityId} from "./types";

export interface IHabitatSubscription extends IBaseEntity {
  id: number;
  isAdmin: boolean;
  status: string;
  subscriberAccepted: boolean;
  adminAccepted: boolean;
  habitatId: entityId;
  userId: entityId;
}
