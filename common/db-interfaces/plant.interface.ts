import { IBaseEntity } from './baseEntity.interface';

export interface IPlant extends IBaseEntity {
  id: number;
  name: string;
  imageUrl: string;
  waterInterval: number;
  lastWatered: Date;
  wateredBy?: number;
  habitatId: number;
}
