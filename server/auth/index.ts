// const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
import uuid from 'uuid/v4';
import fileStore from 'session-file-store';
import session from 'express-session';
import passport from 'passport';
import passportGoogle from 'passport-google-oauth';
import UserService from '../service/user.service';
import {IUser} from "../db/models/user/user.interface";

const FileStore = fileStore(session);
const userService = new UserService();

passport.use(new passportGoogle.OAuth2Strategy({
        clientID: '374923858820-kd4ffv80ht0tnttkqtnqcuco92l2nst4.apps.googleusercontent.com',
        clientSecret: '6islES8Wf2KF8z4R6oXmeXRf',
        callbackURL: "http://localhost:3000/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
        const users: IUser[] = await userService.findAll({ thirdPartyId: profile.id }) as IUser[];
        const userId = users && users.length ? users[0].id : null;
        done(null, { accessToken, refreshToken, id: profile.id, userId });
    },
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user.userId));

// export a function that configures the app for passport and session
export default app => {
    app.use(session({
        genid: req => uuid(), // use UUIDs for session IDs
        secret: 'keyboard cat',
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
            res.redirect(`/users/${req.user.userId}/habitats`);
        },
    );
};