import { IPlant } from '../db/models/plant/plant.interface';
import GenericRepository from '../repository/generic.repository';
import Plant from '../db/models/plant/plant';

export default class {
  private repository;
  constructor() {
    this.repository = new GenericRepository(Plant);
  }

  public async findAll(params?: object): Promise<IPlant[]> {
    return this.repository.findAll(params);
  }

  public async update(update: { id: number; [updatedProperty: string]: any }) {
    const { id, ...rest } = update;
    if (!id) {
      throw new Error(`Cannot update plant - must include an id!`);
    }
    return this.repository.update(id, rest);
  }
}
