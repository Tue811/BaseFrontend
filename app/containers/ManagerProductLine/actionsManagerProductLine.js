import {
  RESET_REDUX,
  ADD,
  EDIT,
  SEARCH,
  REMOVE,
  LIST,
  LIST_SUCCESS,
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCESS,
} from './constantsManagerProductLine';

export function requestFalse() {}

export function resetRedux() {
  return {
    type: RESET_REDUX,
  };
}

export function list(name) {
  return {
    type: LIST,
    name,
  };
}

export function listSuccess(data) {
  return {
    type: LIST_SUCCESS,
    data,
  };
}

export function add(body, callback) {
  return {
    type: ADD,
    body,
    callback,
  };
}

export function uploadImage(body, callback) {
  return {
    type: UPLOAD_IMAGE,
    body,
    callback,
  };
}

export function edit(body, callback) {
  return {
    type: EDIT,
    body,
    callback,
  };
}

export function search(body, callback) {
  return {
    type: SEARCH,
    body,
    callback,
  };
}

export function remove(id, callback) {
  return {
    type: REMOVE,
    id,
    callback,
  };
}
