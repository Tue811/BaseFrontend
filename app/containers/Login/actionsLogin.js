/**
 * ...
 */
import { LOGIN, LOGIN_SUCCESS, RESET_REDUX } from './constantsLogin';

export function resetRedux() {
  return {
    type: RESET_REDUX,
  };
}

export function login(body, callback) {
  return {
    type: LOGIN,
    body,
    callback,
  };
}

export function loginSuccess(data) {
  return {
    type: LOGIN_SUCCESS,
    data,
  };
}
