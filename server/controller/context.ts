import HabitatSubscriptionService from '../service/habitat-subscription.service';
import {entityId} from "../db/types";
import {IHabitatSubscription} from "../db/models/habitatSubsription/habitatSubscription.interface";
import * as _ from 'lodash';

const habitatSubscriptionService = new HabitatSubscriptionService();

interface IGraphQLContext {
    userId: entityId;
    googleId: string;
    subscribedHabitats: IHabitatSubscription[];
}

// set some variables on the context object from the request, before graphql begins processing
export default async (req): Promise<IGraphQLContext> => {
    const { session } = req; // this ID is put onto the request by passport middleware;
    const userId = _.get(session, `passport.user.userId`);
    const googleId = _.get(session, `passport.user.id`);

    if (!userId || !googleId) {
        throw new Error('Must be logged in to user graphql api!');
    }
    return {
        userId,
        googleId,
        // @ts-ignore
        subscribedHabitats: await habitatSubscriptionService.findAll({ userId }) || [],
    };
};