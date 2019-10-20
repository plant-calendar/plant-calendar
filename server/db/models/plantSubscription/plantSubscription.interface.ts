import { IBaseEntity } from '../baseEntity.interface';

export interface IPlantSubscription extends IBaseEntity {
  id: number;
  status: string;
}
