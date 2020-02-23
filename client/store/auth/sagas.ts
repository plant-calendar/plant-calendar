import api from "../../api";
import {call, put, takeLatest} from "@redux-saga/core/effects";
import { setHaveCorrectUser } from "./actions";
import TYPES from './types';

function* getHaveCorrectUser({ url }) {
    const { data } = yield call(api.haveCorrectUser, url);
    yield put(setHaveCorrectUser(data));
}

export default [
    // @ts-ignore
  takeLatest(TYPES.GET_HAVE_USER_REQUESTED, getHaveCorrectUser),
];