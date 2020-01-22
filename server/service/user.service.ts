import GenericService from './generic.service';
import {User} from "../db/models";
import {entityId} from "../db/types";
import * as GoogleAuth from "google-auth-library";
import {CLIENT_ID} from "../../common/configs/google";
import {IUser} from "../db/models/user/user.interface";

export default class extends GenericService {
    constructor() {
        super(User);
    }

    public async findOneByGoogleToken(googleToken: string) {
        const googleId = await this.getGoogleIdFromGoogleToken(googleToken);
        return (await this.findAll({ thirdPartyId: googleId }))[0] as IUser;
    }

    public async createFromToken(googleToken: string, name: string) {
        const googleId = await this.getGoogleIdFromGoogleToken(googleToken);
        return this.createOne({ thirdPartyId: googleId, name });
    }

    public async getOrCreateUserIdFromGoogleToken(googleToken: string, name?: string): Promise<any> {
        const googleId = await this.getGoogleIdFromGoogleToken(googleToken);
        const userForId: IUser = (await this.findAll({ thirdPartyId: googleId }))[0] as IUser;
        if (userForId) {
            return userForId.id;
        }
        // if the user for this google id does not exist, then a name must be provided to create a new user with
        if (!name || !name.length) {
            throw new Error('New users must provide a user name!');
        }
        // see if the name is taken
        const userForName = (await this.findAll({ name }))[0];
        if (userForName) {
            throw new Error('Name taken');
        }
        // if the user did not exist and the name is not taken, create new user
        const newUser = await this.createOne({
            name,
            thirdPartyId: googleId,
            isAdmin: false,
        }) as IUser;
        return newUser.id;
    }


    private async getGoogleIdFromGoogleToken(googleToken: string): Promise<string> {
        if (!googleToken) {
            throw new Error('No google token provided');
        }
        const client = new GoogleAuth.OAuth2Client(CLIENT_ID);
        let payload;
        try {
            const ticket = await client.verifyIdToken({
                idToken: googleToken,
                audience: CLIENT_ID,
            });
            payload = ticket.getPayload();
        } catch (e) {
            throw new Error(e); // todo hide actual error from client with "invalid token" message
        }
        // @ts-ignore
        return payload.sub;
    }
}