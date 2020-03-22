import sequelizeDb from '../db/db';
import GenericRepository from "./generic.repository";
import {SUBSCRIPTION_STATUSES} from "../db/types";

export default class HabitatSubscriptionRepository extends GenericRepository {
    public async getSubscriptionRequestsForHabitats(habitatIds: string[]) {
        const res = await sequelizeDb.query(`
            SELECT
                hs.id as "id",
                u.id as "userId",
                u.name as "userName",
                h.id as "habitatId",
                h.name as "habitatName"
            FROM users u
            JOIN "habitatSubscriptions" hs
            ON u.id = hs."userId"
            JOIN habitats h
            ON h.id = hs."habitatId"
            WHERE h.id IN (${habitatIds.join(', ')})
            AND hs.status = '${SUBSCRIPTION_STATUSES.PENDING}'
            AND hs."subscriberAccepted" = TRUE
            AND hs."adminAccepted" = FALSE;
        `);
        // sequelize gives us an array with some things we don't care about, where the first item is the actual records
        return res[0];
    }
}