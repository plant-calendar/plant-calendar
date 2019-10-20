import { IBaseEntity } from '../baseEntity.interface';

export interface Iuser extends IBaseEntity {
  id: number;
  userName: string;
  email: string;
  isAdmin: boolean;
  password: string;
}
