import HabitatSubscriptionService from '../service/habitat-subscription.service';
import {entityId} from "../../common/db-interfaces/types";
import {IHabitatSubscription} from "../../common/db-interfaces/habitatSubscription.interface";
import * as _ from 'lodash';

const habitatSubscriptionService = new HabitatSubscriptionService();

interface IGraphQLContext {
    userId: entityId;
    googleId: string;
    authorizedHabitats: IHabitatSubscription[];
}

// set some variables on the context object from the request, before graphql begins processing
export default async (req): Promise<IGraphQLContext> => {
    const { session } = req; // this ID is put onto the request by passport middleware;
    const userId = _.get(session, `passport.user.userId`);
    const googleId = _.get(session, `passport.user.id`);
    return {
        userId,
        googleId,
        // @ts-ignore
        authorizedHabitats: await habitatSubscriptionService.findAll({ userId, adminAccepted: true }) || [],
    };
};