import {call, put, takeLatest} from "@redux-saga/core/effects";
import TYPES from "./types";
import api from "../../api";
import {setAllNames, setUser, setSubscriptionRequests} from "./actions";

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
    callback(updatedUser);
}

function* fetchSubscriptionRequests({ callback }) {
    const response = yield call(api.user.getSubscriptionRequests.request);
    const requests = api.user.getSubscriptionRequests.response(response);
    yield put(setSubscriptionRequests(requests));
    callback(requests);
}

function* acceptSubscriptionRequest({ request, callback }) {
    const response = yield call(api.user.acceptSubscriptionRequest.request, request.id);
    const resData = api.user.acceptSubscriptionRequest.response(response);
    callback(resData);
}

function* rejectSubscriptionRequest({ request, callback }) {
    const response = yield call(api.user.rejectSubscriptionRequest.request, request.id);
    const resData = api.user.rejectSubscriptionRequest.response(response);
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
