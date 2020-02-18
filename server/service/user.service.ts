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
        const authUrl = await client.generateAuthUrl({
            // To get a refresh token, you MUST set access_type to `offline`.
            access_type: 'offline',
            // set the appropriate scopes
            scope: 'https://www.googleapis.com/auth/userinfo.profile',
            // A refresh token is only returned the first time the user
            // consents to providing access.  For illustration purposes,
            // setting the prompt to 'consent' will force this consent
            // every time, forcing a refresh_token to be returned.
            prompt: 'consent',
        });
        console.log({authUrl});
        const something = await client.request({ url: authUrl});
        console.log({something});

        let payload;
        try {
            console.log(await client.getTokenInfo(googleToken));
            const ticket = await client.verifyIdToken({
                idToken: googleToken,
                audience: CLIENT_ID,
            });
            payload = ticket.getPayload();
        } catch (e) {
            throw new Error(e); // todo hide actual error from client with "invalid token" message
        }
        console.log({payload});
        return payload.sub;
    }
}