import {IPlant} from "../db/models/plant/plant.interface";
import GenericRepository from "../repository/generic.repository";
import Plant from "../db/models/plant/plant";

export default class {
  private repository;
  constructor() {
    this.repository = new GenericRepository(Plant);
  }

  public async findAll(params?: object): Promise<IPlant[]> {
    return this.repository.findAll(params);
  }
}