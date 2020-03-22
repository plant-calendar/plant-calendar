import GenericService from "./generic.service";
import {PlantSubscription} from "../db/models";
import {entityId} from "../../common/db-interfaces/types";

export default class PlantSubscriptionService extends GenericService {
    constructor() {
        super(PlantSubscription);
    }

    public async subscribeIdempotently(userId: entityId, plantId: entityId) {
        const existing = await this.findAll({ userId, plantId });
        if (!existing.length) {
            await this.createOne({ userId, plantId, status: 'active' });
        }
    }

    public async unsubscribe(userId: entityId, plantId: entityId) {
        return this.deleteWhere({ userId, plantId });
    }

    private async findSubscription(userId: entityId, plantId: entityId) {
        return (await this.findAll({ userId, plantId }))[0];
    }
}