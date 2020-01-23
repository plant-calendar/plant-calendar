import React, { useState } from 'react';
import { connect } from 'react-redux';
import {GoogleLogin} from "react-google-login";
import { actions as userActions, selectors as userSelectors } from "../../store/user";
import {CLIENT_ID} from "../../../common/configs/google";
import { EnterName } from "./EnterName";
import { Redirect } from "react-router-dom";


const LoginComponent = props => {
    const [showNameField, setShowNameField] = useState(false);
    const [loading, setLoading] = useState(false);
    const [rerouteToPageOfUser, setRerouteToPageOfUser] = useState(0);

    const handleGoogleResponseSuccess = res => {
        const token = res.tokenObj.id_token;
        // set user token in redux for use in later requests
        props.setUserToken(token);
        // try to find user in db
        console.log('calling fetchUserByToken from loginComponent');
        props.fetchUserByToken(token, existingUser => {
            setLoading(false);
            if (existingUser) {
                // if found, send them to their home page
                // @ts-ignore
                setRerouteToPageOfUser(existingUser.id);
            } else {
                // if not found, give them name field so that they will create a new user
                setShowNameField(true);
            }
        });
    };
    const handleGoogleResponseError = err => {
        setLoading(false);
        console.log({err});
    };
    

    const onNameSubmit = name => {
        props.createUser(name, createdUser => {
            setRerouteToPageOfUser(createdUser.id);
        });
    };

    if (loading) {
        return 'LOADING';
    }
    if (rerouteToPageOfUser) {
        console.log(`calling history with ${rerouteToPageOfUser}`);
        return <Redirect to={`users/${rerouteToPageOfUser}/habitats`} />;
    }
    return (
        <div>
            {showNameField
                ? <EnterName onSubmit={onNameSubmit} />
                : <GoogleLogin
                        onRequest={() => setLoading(true)}
                        onSuccess={handleGoogleResponseSuccess}
                        onFailure={handleGoogleResponseError}
                        clientId={CLIENT_ID}
                    />
            }
        </div>
    );
};

const mapStateToProps = state => ({
   user: userSelectors.getUser(state),
   userToken: userSelectors.getUserToken(state),
});

const mapDispatchToProps = dispatch => ({
    setUserToken: token => dispatch(userActions.setUserToken(token)),
    fetchUserByToken: (token, callback) => dispatch(userActions.fetchUserByToken(token, callback)),
    createUser: (name, callback) => dispatch(userActions.createUser(name, callback)),
});
export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
