import {entityId} from "../db/types";
import GenericRepository from "../repository/generic.repository";

export default class {
  private repository;
  constructor(model) {
    this.repository = new GenericRepository(model);
  }

  public async findOneById(id: entityId) {
    return this.repository.findOneById(id);
  }

  public async findAll(params?: object) {
    return this.repository.findAll(params);
  }

  public async updateOne(id: entityId, update: object) {
    await this.repository.updateOne(id, update);
    return this.findOneById(id);
  }

  public async updateMany(ids: entityId[], update: object): Promise<entityId[]> {
    return this.repository.updateMany(ids, update);
  }

  public async createOne(entity: object): Promise<object> {
    return this.repository.createOne(entity);
  }

  public async findWhereNonNull(columnName) {
    return this.repository.findWhereNot(columnName, null);
  }
}