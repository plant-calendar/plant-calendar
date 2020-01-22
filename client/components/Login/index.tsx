import React, { useState } from 'react';
import { connect } from 'react-redux';
import {GoogleLogin} from "react-google-login";
import { actions as userActions, selectors as userSelectors } from "../../store/user";
import {CLIENT_ID} from "../../../common/configs/google";
import { EnterName } from "./EnterName";

const LoginComponent = props => {
    const [showNameField, setShowNameField] = useState(false);

    const rerouteToMyHabitatsPage = userId => {
        console.log(`called rerouteToMyHabitatsPage with userID ${userId}`);
    };

    const handleGoogleResponseSuccess = res => {
        console.log({res});
        const token = res.tokenObj.id_token;
        // set user token in redux for use in later requests
        props.setUserToken(token);
        // try to find user in db
        props.fetchUserByToken(token, responseData => {
            if (responseData.getUserByToken) {
                // @ts-ignore
                rerouteToMyHabitatsPage(responseData.getUserByToken.id);
            } else {
                // if not found, give them name field
                setShowNameField(true);
            }
        });
    };
    const handleGoogleResponseError = err => {
        console.log({err});
    };
    

    const onNameSubmit = name => {
        props.createUser(name, response => {
            rerouteToMyHabitatsPage(response.id);
        });
    };

    return (
        <div>
            {showNameField
                ? <EnterName onSubmit={onNameSubmit} />
                : <GoogleLogin
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
