import { IBaseEntity } from './baseEntity.interface';

export interface IHabitat extends IBaseEntity {
  id: number;
  name: string;
  imageUrl: string;
}
