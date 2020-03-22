import Sequelize from "sequelize";
import {entityId} from "../../common/db-interfaces/types";
import Model from "sequelize";
import User from "../db/models/user/user";
import Habitat from "../db/models/habitat/habitat";
import Plant from "../db/models/plant/plant";
import PlantSubscription from "../db/models/plantSubscription/plantSubscription";
import HabitatSubscription from "../db/models/habitatSubsription/habitatSubscription";

export default class GenericRepository {
  private static getValuesFromFindAll = results => (results || []).map(r => r.dataValues);

  private static buildWhere = (params: object) => {
    return Object.keys(params).reduce((acc, colName) => {
      if (Array.isArray(params[colName])) {
        if (params[colName].length) {
          acc[colName] = { [Sequelize.Op.or]: params[colName] };
        }
      } else {
        acc[colName] = params[colName];
        return acc;
      }
      return acc;
    }, {});
  };

  private static getModel(name: string): typeof Model {
    const model = ({
      user: User,
      habitat: Habitat,
      plant: Plant,
      plantSubscription: PlantSubscription,
      habitatSubscription: HabitatSubscription,
    })[name];

    if (!model) {
      throw new Error(`GenericRepository.getModel got an invalid string ${name}`);
    }
    return model;
  }

  private model;

  constructor(model) {
    // a sequelize model
    this.model = model;
  }

  public async findOneById(id: entityId) {
    return this.model.findByPk(id);
  }

  /**
   * this method can handle "where x = 1 or x = 2" by passing x: [1, 2]
   * this method CANNOT handle "where x = 1 or y = 2"... create a custom method for that
   * this method also cannot handle "where x = [1, 2]"
   * @param params
   * @param joins
   */
  public async findAll(params: object, joins?: string[]) {
    console.log("generic repository received find all params of", params);
    if (!params || !Object.keys(params).length) {
      return GenericRepository.getValuesFromFindAll(await this.model.findAll());
    }
    const where = GenericRepository.buildWhere(params);
    // it is possible that we were passed params with just empty arrays for values to search on
    // the expected behavior is for no results to come back, but that is not what sequelize does,
    // so we make that happen manually
    if (!Object.keys(where).length) {
      return [];
    }
    const finalQueryObject = {
      where,
      ...((joins && joins.length) ? { include: joins.map(GenericRepository.getModel) } : {}),
    };
    console.log({finalQueryObject});
    return GenericRepository.getValuesFromFindAll((await this.model.findAll(finalQueryObject)));
  }

  public async findWhereNot(columnName: string, value: any) {
    const results = await this.model.findAll({
      where: {
        [columnName]: {
          [Sequelize.Op.ne]: value,
        },
      },
    });
    return GenericRepository.getValuesFromFindAll(results);
  }

  public async updateOne(id: entityId, update: object) {
    return this.model.update(update, { where: { id }});
  }

  public async updateMany(ids: entityId[], update: object) {
    return this.model.update(update, { where: { id: { [Sequelize.Op.in]: ids }}});
  }

  public async createOne(entity: object) {
    return (await this.model.create(entity)).dataValues;
  }

  public async deleteWhere(params: object) {
    const where = GenericRepository.buildWhere(params);
    return this.model.destroy({ where });
  }

  public async stringColumnIncludesSearch(columnName: string, queried: string) {
    const found = await this.model.findAll({
      where: {
        [columnName]: {
          [Sequelize.Op.iLike]: `%${queried}%`,
        },
      },
    });
    return GenericRepository.getValuesFromFindAll(found);
  }
}