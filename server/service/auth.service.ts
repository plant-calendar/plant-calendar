import HabitatSubscriptionService from './habitat-subscription.service';
import {entityId} from "../../common/db-interfaces/types";
import {IHabitatSubscription} from "../../common/db-interfaces/habitatSubscription.interface";

export default class AuthService {
    private habitatSubscriptionService;

    constructor() {
        this.habitatSubscriptionService = new HabitatSubscriptionService();
    }

    public async urlIsAuthorized(url: string, userId: entityId) {
        const { prefix, id } = AuthService.parseUrl(url);
        if (!prefix || !id) {
            // (for now at least) we will let the user navigate to pages that don't exist
            return true;
        }
        if (prefix === 'users') {
            return +id === +userId;
        }
        if (prefix === 'habitats') {
            return this.userCanAccessHabitat(+id, userId);
        }
        return true;
    }

    private static parseUrl(url: string): { prefix, id } {
        const lowerCase = url.toLowerCase();
        const prefixMatch = /\/([a-z]|[-])+\//.exec(lowerCase);
        if (!prefixMatch) {
            return { prefix: null, id: null };
        }
        const prefix = prefixMatch[0].slice(1, prefixMatch[0].length - 1); // remove the slashes
        const urlAfterPrefix = lowerCase.slice(prefixMatch[0].length);
        const idMatch = /^[0-9]+/.exec(urlAfterPrefix);
        if (!idMatch) {
            return { prefix, id: null };
        }
        const id = idMatch[0];
        return { prefix, id };
    }

    private async userCanAccessHabitat(habitatId: entityId, userId: entityId): Promise<boolean> {
        const params: Partial<IHabitatSubscription> = {
            adminAccepted: true,
            userId,
            habitatId,
        };
        const existingSubscriptions = await this.habitatSubscriptionService.findAll(params);
        return !!existingSubscriptions.length;
    }
}