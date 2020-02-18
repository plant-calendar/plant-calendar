import {call, put, takeLatest} from "@redux-saga/core/effects";
import TYPES from "./types";
import api from "../../api";
import {setUser} from "./actions";

function* createOne({ name, callback }) {
    const response = yield call(api.user.createOne.request, name);
    const user = api.user.createOne.response(response);
    yield put(setUser(user));
    callback(user);
}

function* fetchById({ id, callback }) {
    const response = yield call(api.user.getById.request, id);
    const user = api.user.getById.response(response);
    yield put(setUser(user));
    callback(user);
}

export default [
    // @ts-ignore
    takeLatest(TYPES.USER_CREATE_REQUESTED, createOne),
    // // @ts-ignore
    // takeLatest(TYPES.USER_FETCH_BY_TOKEN_REQUESTED, fetchByToken),
    // @ts-ignore
    takeLatest(TYPES.USER_FETCH_BY_ID_REQUESTED, fetchById),
];
