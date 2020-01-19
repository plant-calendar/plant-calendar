import {entityId} from "../db/types";
import GenericRepository from "../repository/generic.repository";

export default class {
  private repository;
  constructor(model) {
    this.repository = new GenericRepository(model);
  }

  public async findAll(params?: object): Promise<object[]> {
    return this.repository.findAll(params);
  }

  public async updateOne(id: entityId, update: object): Promise<object> {
    return this.repository.updateOne(id, update);
  }

  public async updateMany(ids: entityId[], update: object): Promise<entityId[]> {
    return this.repository.updateMany(ids, update);
  }
}