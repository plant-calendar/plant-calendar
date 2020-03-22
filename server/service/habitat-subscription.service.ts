import GenericService from './generic.service';
import {HabitatSubscription} from "../db/models";
import {entityId, SUBSCRIPTION_STATUSES} from "../../common/db-interfaces/types";
import {IHabitatSubscription} from "../../common/db-interfaces/habitatSubscription.interface";
import HabitatSubscriptionRepository from "../repository/habitat-subscription.repository";

export default class extends GenericService {
    constructor() {
        super(HabitatSubscription);
        this.repository = new HabitatSubscriptionRepository(HabitatSubscription);
    }

    public async findInvitationToHabitat(userId: entityId, habitatId: entityId) {
        const params: Partial<IHabitatSubscription> ={
            userId,
            habitatId,
            status: 'pending',
            adminAccepted: true,
        };
        const found = await this.findAll(params);
        return found[0] || null;
    }

    public async acceptInvitationToHabitat(userId: entityId, habitatId: entityId) {
        const invitation: IHabitatSubscription =
            await this.findInvitationToHabitat(userId, habitatId);
        if (!invitation) {
            throw new Error(`You were not invited!`);
        }
        return this.updateOne(invitation.id, {
            status: 'active',
            subscriberAccepted: true,
        });
    }

    public async respondToUserRequestToHabitat(acceptorId: entityId, subscriptionId: entityId, accepted: boolean) {
        const subscription = await this.findOneById(subscriptionId);
        if (!await this.userIsAdminOfHabitat(acceptorId, subscription.habitatId)) {
            throw new Error(`Acceptor is not an active admin of this habitat`);
        }
        return this.updateOne(subscriptionId, {
           status: accepted ? SUBSCRIPTION_STATUSES.ACTIVE : SUBSCRIPTION_STATUSES.REJECTED,
           adminAccepted: accepted,
        });
    }

    public async inviteUserToHabitat(invitorId: entityId, invitedId: entityId, habitatId: entityId, asAdmin = false) {
        if (!(await this.userIsAdminOfHabitat(invitorId, habitatId))) {
            throw new Error(`Invitor is not an active admin of this habitat`);
        }
        const existingSubscription: IHabitatSubscription = (await this.findAll({
            userId: invitedId,
            habitatId,
        }))[0];
        if (existingSubscription) {
            throw new Error(`Invitee is already subscribed! (status ${existingSubscription.status})`);
        }
        return this.createOne({
            userId: invitedId,
            habitatId,
            status: 'pending',
            isAdmin: asAdmin,
            adminAccepted: true,
            subscriberAccepted: false,
        });
    }

    public async requestSubscriptionToHabitat(userId: entityId, habitatId: entityId) {
        const existingSubscription: IHabitatSubscription = (await this.findAll({
            userId,
            habitatId,
            status: ['active', 'pending'],
        }))[0];
        if (existingSubscription) {
            throw new Error(`Cannot request a subscription again! (currently have sub with status ${existingSubscription.status})`);
        }
        return this.createOne({
            userId,
            habitatId,
            status: 'pending',
            isAdmin: false,
            adminAccepted: false,
            subscriberAccepted: true,
        });
    }

    public async getSubscriptionRequestsForAdmin(userId: entityId) {
        const adminnedHabitatIds = (await this.findAll({
            userId,
            isAdmin: true,
            status: 'active',
        })).map(sub => sub.habitatId);
        console.log({adminnedHabitatIds});
        if (adminnedHabitatIds.length === 0) {
            return [];
        }
        return this.repository.getSubscriptionRequestsForHabitats(adminnedHabitatIds);
    }

    private async userIsAdminOfHabitat(userId: entityId, habitatId: entityId) {
        const subscriptions = await this.findAll({
            userId,
            habitatId,
            isAdmin: true,
            status: 'active',
        });
        return !!subscriptions.length;
    }
}