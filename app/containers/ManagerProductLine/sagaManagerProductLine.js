import { call, put, takeLatest } from 'redux-saga/effects';

import * as constants from './constantsManagerProductLine';
import * as actions from './actionsManagerProductLine';

import { axiosPost, axiosGet, axiosDelete } from '../../utils/request';

export function* handleList(action) {
  const path = `/v1/product-line?name=${action.name}`;
  try {
    const res = yield call(axiosGet, path);
    if (res.status === 200) yield put(actions.listSuccess(res.data.data));
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* handleAdd(action) {
  const path = `/v1/product-line`;
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200) action.callback(res.data.data);
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* handleUpLoadImage(action) {
  const path = `v1/image/product_line/upload`;
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200) action.callback(res.data.data.id);
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* handleEdit(action) {
  const path = `/v1/product-line`;
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200) action.callback(res.data.data);
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* handleRemove(action) {
  const path = `/v1/product-line/${action.id}`;
  try {
    const res = yield call(axiosDelete, path);
    if (res.status === 200) action.callback();
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export default function* watchManagerProductLine() {
  yield takeLatest(constants.LIST, handleList);
  yield takeLatest(constants.ADD, handleAdd);
  yield takeLatest(constants.UPLOAD_IMAGE, handleUpLoadImage);
  yield takeLatest(constants.EDIT, handleEdit);
  yield takeLatest(constants.REMOVE, handleRemove);
}
