import { IBaseEntity } from '../baseEntity.interface';

export interface IUser extends IBaseEntity {
  id: number;
  userName: string;
  email: string;
  isAdmin: boolean;
  password: string;
}
