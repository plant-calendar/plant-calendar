import { IBaseEntity } from '../baseEntity.interface';
import {entityId} from "../../types";

export interface IUser extends IBaseEntity {
  id: entityId;
  name: string;
  thirdPartyId: string;
}
