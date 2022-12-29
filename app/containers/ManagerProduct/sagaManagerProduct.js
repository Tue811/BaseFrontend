import { call, put, takeLatest } from 'redux-saga/effects';

import { axiosGet, axiosPost } from '../../utils/request';
import * as constants from './constantsManagerProduct';
import * as actions from './actionsManagerProduct';

export function* handleList() {
  const path = `/v1/products?currentPage=1&productLineId=00000000-0000-0000-0000-000000000000`;
  try {
    const res = yield call(axiosGet, path);
    if (res.status === 200) yield put(actions.listSuccess(res.data.data));
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* uploadImage(action) {
  // console.log(action);
  // const path = `v1/image/product/upload`;
  // try {
  //   const res = yield call(axiosPost, path);
  // } catch (error) {
  //   yield put(actions.requestFalse(error));
  // }
  const path = `v1/image/product/upload`;
  try {
    const res = yield call(axiosPost, path, action.body);
    if (res.status === 200) action.callback(res.data.data.id);
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export function* handleAdd(action) {
  const path =
    '/v1/products?currentPage=1&productLineId=00000000-0000-0000-0000-000000000000';
  try {
    const res = yield call(axiosPost, path, action.data);
    if (res.status === 200) yield action.callback(res.data.data);
  } catch (error) {
    yield put(actions.requesFalse(error));
  }
}

export function* handleGetProductLine() {
  const path = 'v1/product-line';
  try {
    const res = yield call(axiosGet, path);
    if (res.status === 200) yield put(actions.getProductLineSuccess(res.data));
  } catch (error) {
    yield put(actions.requestFalse(error));
  }
}

export default function* watchManagerProduct() {
  yield takeLatest(constants.LIST, handleList);
  yield takeLatest(constants.UPLOAD_IMG, uploadImage);
  yield takeLatest(constants.ADD, handleAdd);
  yield takeLatest(constants.GET_PRODUCT_LINE, handleGetProductLine);
}
