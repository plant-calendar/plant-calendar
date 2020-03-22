import GenericService from "./generic.service";
import Plant from "../db/models/plant/plant";
import {entityId} from "../db/types";
import {IPlant} from "../db/models/plant/plant.interface";

export default class extends GenericService {
  constructor() {
    super(Plant);
  }
}