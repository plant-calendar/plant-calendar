import {IHabitat} from "../db/models/habitat/habitat.interface";
import GenericRepository from "../repository/generic.repository";
import Habitat from "../db/models/habitat/habitat";

export default class {
  private repository;
  constructor() {
    this.repository = new GenericRepository(Habitat);
  }

  public async findAll(params?: object): Promise<IHabitat[]> {
    return this.repository.findAll(params);
  }
}