import {call, takeLatest} from "@redux-saga/core/effects";
import TYPES from "./types";
import api from "../../api";
import {setUser} from "./actions";

function* createOne({ name, callback }) {
    console.log('store in createOne*');
    const { data } = yield call(api.user.createOne, name);
    console.log({dataInCreateOneSaga: data});
    setUser(data);
    callback(data);
}

function* fetchByToken({ token, callback }) {
    const { data } = yield call(api.user.getByToken, token);
    setUser(data);
    callback(data);
}

export default [
    // @ts-ignore
    takeLatest(TYPES.USER_CREATE_REQUESTED, createOne),
    // @ts-ignore
    takeLatest(TYPES.USER_FETCH_BY_TOKEN_REQUESTED, fetchByToken),
];
