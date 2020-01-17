import GenericService from "./generic.service";
import Plant from "../db/models/plant/plant";

export default class extends GenericService {
  constructor() {
    super(Plant);
  }
}