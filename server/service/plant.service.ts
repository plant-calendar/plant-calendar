import GenericService from "./generic.service";
import Plant from "../db/models/plant/plant";
import {entityId} from "../../common/db-interfaces/types";
import {IPlant} from "../../common/db-interfaces/plant.interface";

export default class extends GenericService {
  constructor() {
    super(Plant);
  }
}