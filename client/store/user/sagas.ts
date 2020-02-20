import {call, put, takeLatest} from "@redux-saga/core/effects";
import TYPES from "./types";
import api from "../../api";
import {setAllNames, setUser} from "./actions";

function* fetchById({ id, callback }) {
    const response = yield call(api.user.getById.request, id);
    const user = api.user.getById.response(response);
    yield put(setUser(user));
    callback(user);
}

function* fetchAllNames() {
    const response = yield call(api.user.getAllNames.request);
    const names = api.user.getAllNames.response(response);
    yield put(setAllNames(names));
}

function* updateName({ name, callback }) {
    const response = yield call(api.user.updateName.request, name);
    const updatedUser = api.user.updateName.response(response);
    yield put(setUser(updatedUser));
    console.log(callback);
    callback(updatedUser);
}


export default [
    // @ts-ignore
    takeLatest(TYPES.USER_FETCH_BY_ID_REQUESTED, fetchById),
    // @ts-ignore
    takeLatest(TYPES.USER_FETCH_ALL_NAMES_REQUESTED, fetchAllNames),
    // @ts-ignore
    takeLatest(TYPES.USER_UPDATE_NAME_REQUESTED, updateName),
];
