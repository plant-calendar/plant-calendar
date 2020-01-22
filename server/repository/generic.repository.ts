import Sequelize from "sequelize";
import {entityId} from "../db/types";

export default class {
  private model;

  constructor(model) {
    // a sequelize model
    this.model = model;
  }

  /**
   * this method can handle "where x = 1 or x = 2" by passing x: [1, 2]
   * this method CANNOT handle "where x = 1 or y = 2"... create a custom method for that
   * this method also cannot handle "where x = [1, 2]"
   * @param params
   */
  public async findAll(params?: object) {
    console.log("generic repository received find all params of", params);
    if (!params || !Object.keys(params).length) {
      return this.model.findAll();
    }
    // convert arrays to Op.or's... leave other kinds of values as they are
    const where = Object.keys(params).reduce((acc, colName) => {
      acc[colName] = Array.isArray(params[colName])
        ? { [Sequelize.Op.or]: params[colName] }
        : params[colName];
      return acc;
    }, {});
    return (await this.model.findAll({ where })).map(entity => entity.dataValues);
  }

  public async updateOne(id: entityId, update: object) {
    return this.model.update(update, { where: { id }});
  }

  public async updateMany(ids: entityId[], update: object) {
    return this.model.update(update, { where: { id: { [Sequelize.Op.in]: ids }}});
  }

  public async createOne(entity: object) {
    return this.model.create(entity);
  }
}