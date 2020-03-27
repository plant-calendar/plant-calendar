import uuid from 'uuid/v4';
import fileStore from 'session-file-store';
import session from 'express-session';
import passport from 'passport';
import passportGoogle from 'passport-google-oauth';
import UserService from '../service/user.service';
import {IUser} from "../../common/db-interfaces/user.interface";
import * as _ from 'lodash';
import AuthService from "../service/auth.service";
import LocalConfig from '../local-config';

const FileStore = fileStore(session);
const userService = new UserService();
const authService = new AuthService();

const configureGoogleStrategy = async () => {
    let clientID = process.env.GOOGLE_CLIENT_ID;
    let clientSecret = process.env.GOOGLE_CLIENT_SECRET;
    const callbackURL = process.env.GOOGLE_CALLBACK_URL || "http://localhost:3000/auth/google/callback";
    if (!process.env.GOOGLE_CLIENT_ID) {
        clientID = LocalConfig.GOOGLE_CLIENT_ID;
        clientSecret = LocalConfig.GOOGLE_CLIENT_SECRET;
    }
    passport.use(new passportGoogle.OAuth2Strategy({
            clientID,
            clientSecret,
            callbackURL,
        },
        async (accessToken, refreshToken, profile, done) => {
            const users: IUser[] = await userService.findAll({ thirdPartyId: profile.id }) as IUser[];
            let userId = _.get(users, ['0', 'id']);
            const userName = _.get(users, ['0', 'name']);
            if (!userId) {
                const newUser = await userService.createOne({ thirdPartyId: profile.id });
                // @ts-ignore
                userId = newUser.id;
            }
            done(null, { accessToken, refreshToken, id: profile.id, userId, userName });
        },
    ));
};

export default async app => {
    await configureGoogleStrategy();
    passport.serializeUser((user, done) => done(null, user));
    passport.deserializeUser((user, done) => done(null, user.userId));
    app.use(session({
        genid: () => uuid(), // use UUIDs for session IDs
        secret: process.env.SESSION_SECRET || 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        store: new FileStore(),
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.get('/auth/google', passport.authenticate('google', { scope: ['openid'] }));


    app.get(
        '/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/login' }),
        (req, res) => {
            // was this the first time this email was ever used?  If so, we want them to pick a name
            if (!req.session.passport.user.userName) {
                res.redirect(`/users/${req.user.userId}/make-profile`);
            } else {
                res.redirect(`/users/${req.user.userId}/habitats`);
            }
        },
    );

    // all graphql requests must have a session that corresponds to an existing user
    app.use('/graphql', (req, res, next) => {
        const userId = _.get(req.session, `passport.user.userId`);
        const googleId = _.get(req.session, `passport.user.id`);
        if (!userId || !googleId) {
            res.redirect('/login');
        } else {
            // if it's good, pass it on to the graphql api
            next();
        }
    });

    // this just exists as a convenience to the user.  it is used by frontend to redirect
    // users who go to unauthorized page.  even if this did not exist, they would not see any data
    // on said page, thanks to the /graphql endpoint being protected.
    app.use('/auth/have-correct-user', async (req, res) => {
        const desiredUrl = req.query.url;
        const userId = _.get(req.session, `passport.user.userId`);
        if (!userId || !(await authService.urlIsAuthorized(desiredUrl, userId))) {
            res.send(false);
            return;
        }
        res.send(true);
    });

    app.get('/auth/logout', (req, res) => {
        req.logout();
        res.redirect('/login');
    });
};