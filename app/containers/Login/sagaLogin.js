/**
 * ...
 */
import { call, put, takeLatest } from 'redux-saga/effects';

import * as constants from './constantsLogin';
import * as actions from './actionsLogin';

import { axiosPost } from '../../utils/request';

export function* handleLogin(action) {
  const path = `/v1/auth/login`;
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200) action.callback(res.data.data);
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}
export default function* watchLogin() {
  yield takeLatest(constants.LOGIN, handleLogin);
}
