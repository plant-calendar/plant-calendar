import { IBaseEntity } from '../baseEntity.interface';

export interface IHabitatSubscription extends IBaseEntity {
  id: number;
  isAdmin: boolean;
  status: string;
  subscriberAccepted: boolean;
  adminAccepted: boolean;
}
