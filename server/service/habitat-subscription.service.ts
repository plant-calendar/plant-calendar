import GenericService from './generic.service';
import {HabitatSubscription} from "../db/models";

export default class extends GenericService {
    constructor() {
        super(HabitatSubscription);
    }
}