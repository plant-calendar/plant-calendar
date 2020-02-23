import GenericService from './generic.service';
import {HabitatSubscription} from "../db/models";
import {entityId} from "../db/types";
import {IHabitatSubscription} from "../db/models/habitatSubsription/habitatSubscription.interface";

export default class extends GenericService {
    constructor() {
        super(HabitatSubscription);
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

    public async acceptUserRequestToHabitat(acceptorId: entityId, subscriptionId: entityId) {
        const subscription = await this.findOneById(subscriptionId);
        if (!await this.userIsAdminOfHabitat(acceptorId, subscription.habitatId)) {
            throw new Error(`Acceptor is not an active admin of this habitat`);
        }
        return this.updateOne(subscriptionId, {
           status: 'active',
           adminAccepted: true,
        });
    }

    public async inviteUserToHabitat(invitorId: entityId, invitedId: entityId, habitatId: entityId, asAdmin = false) {
        if (!await this.userIsAdminOfHabitat(invitorId, habitatId)) {
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