import {call, put, takeLatest} from "@redux-saga/core/effects";
import TYPES from "./types";
import { apiUser } from "../../api";
import {setAllNames, setUser, setSubscriptionRequests} from "./actions";

function* fetchById({ id, callback }) {
    const response = yield call(apiUser.getById.request, id);
    const user = apiUser.getById.response(response);
    yield put(setUser(user));
    callback(user);
}

function* fetchAllNames() {
    const response = yield call(apiUser.getAllNames.request);
    const names = apiUser.getAllNames.response(response);
    yield put(setAllNames(names));
}

function* updateName({ name, callback }) {
    const response = yield call(apiUser.updateName.request, name);
    const updatedUser = apiUser.updateName.response(response);
    yield put(setUser(updatedUser));
    callback(updatedUser);
}

function* fetchSubscriptionRequests({ callback }) {
    const response = yield call(apiUser.getSubscriptionRequests.request);
    const requests = apiUser.getSubscriptionRequests.response(response);
    yield put(setSubscriptionRequests(requests));
    callback(requests);
}

function* acceptSubscriptionRequest({ request, callback }) {
    const response = yield call(apiUser.acceptSubscriptionRequest.request, request.id);
    const resData = apiUser.acceptSubscriptionRequest.response(response);
    callback(resData);
}

function* rejectSubscriptionRequest({ request, callback }) {
    const response = yield call(apiUser.rejectSubscriptionRequest.request, request.id);
    const resData = apiUser.rejectSubscriptionRequest.response(response);
    callback(resData);
}


export default [
    // @ts-ignore
    takeLatest(TYPES.USER_FETCH_BY_ID_REQUESTED, fetchById),
    // @ts-ignore
    takeLatest(TYPES.USER_FETCH_ALL_NAMES_REQUESTED, fetchAllNames),
    // @ts-ignore
    takeLatest(TYPES.USER_UPDATE_NAME_REQUESTED, updateName),
    // @ts-ignore
    takeLatest(TYPES.USER_FETCH_SUBSCRIPTION_REQUESTS_REQUESTED, fetchSubscriptionRequests),
    // @ts-ignore
    takeLatest(TYPES.USER_ACCEPT_SUBSCRIPTION_REQUEST_REQUESTED, acceptSubscriptionRequest),
    // @ts-ignore
    takeLatest(TYPES.USER_REJECT_SUBSCRIPTION_REQUEST_REQUESTED, rejectSubscriptionRequest),
];
