import { RESET_REDUX } from '../ManagerProductLine/constantsManagerProductLine';
import {
  ADD,
  EDIT,
  GET_PRODUCT_LINE,
  GET_PRODUCT_LINE_SUCCESS,
  LIST,
  LIST_SUCCESS,
  REMOVE,
  UPLOAD_IMG,
} from './constantsManagerProduct';

export function requestFalse() {}

export function resetRedux() {
  return {
    type: RESET_REDUX,
  };
}

export function list() {
  return {
    type: LIST,
  };
}

export function listSuccess(data) {
  return {
    type: LIST_SUCCESS,
    data,
  };
}

export function uploadImg(body, callback) {
  return {
    type: UPLOAD_IMG,
    body,
    callback,
  };
}

export function add(data, callback) {
  return {
    type: ADD,
    data,
    callback,
  };
}

export function edit(data, callback) {
  return {
    type: EDIT,
    data,
    callback,
  };
}

export function remove(id) {
  return {
    type: REMOVE,
    id,
  };
}

export function getProductLine() {
  return {
    type: GET_PRODUCT_LINE,
  };
}

export function getProductLineSuccess(data) {
  return {
    type: GET_PRODUCT_LINE_SUCCESS,
    data,
  };
}
