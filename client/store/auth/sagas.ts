import api from "../../api";
import {call, put, takeLatest} from "@redux-saga/core/effects";
import { setHaveUser } from "./actions";
import TYPES from './types';

function* getHaveUser() {
    const { data } = yield call(api.haveUser);
    yield put(setHaveUser(data));
}

export default [
  takeLatest(TYPES.GET_HAVE_USER_REQUESTED, getHaveUser),
];