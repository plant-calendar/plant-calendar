import Habitat from "../db/models/habitat/habitat";
import GenericService from './generic.service';

export default class extends GenericService {
  constructor() {
    super(Habitat);
  }

  public async searchByName(searched: string) {
    return this.stringColumnIncludesSearch('name', searched);
  }
}