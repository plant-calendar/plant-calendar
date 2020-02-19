import GenericService from './generic.service';
import {User} from "../db/models";

export default class extends GenericService {
    constructor() {
        super(User);
    }

    public async getAllNames(): Promise<string[]> {
        const allNonNullNameUsers = await this.findWhereNonNull('name');
        return allNonNullNameUsers.map(user => user.name);
    }
}