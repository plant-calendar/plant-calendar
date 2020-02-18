import HabitatSubscriptionService from '../service/habitat-subscription.service';

const habitatSubscriptionService = new HabitatSubscriptionService();

export default async req => {
    const { user: userId } = req; // this ID is put onto the request by passport middleware
    if (!userId) {
        throw new Error('Must be logged in to user graphql api!');
    }
    return {
        userId,
        subscribedHabitats: await habitatSubscriptionService.findAll({ userId }) || [],
    };
};