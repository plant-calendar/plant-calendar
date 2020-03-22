import {entityId} from "../../common/db-interfaces/types";
import GenericRepository from "../repository/generic.repository";

export default class {
  protected repository;
  constructor(model) {
    this.repository = new GenericRepository(model);
  }

  public async findOneById(id: entityId) {
    return this.repository.findOneById(id);
  }

  public async findAll(params: object, joins?: string[]) {
    return this.repository.findAll(params, joins);
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

  public async deleteWhere(params: object) {
    return this.repository.deleteWhere(params);
  }

  public async stringColumnIncludesSearch(columnName: string, queried: string) {
    return this.repository.stringColumnIncludesSearch(columnName, queried);
  }
}