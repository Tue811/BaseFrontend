/**
 * ...
 */

import produce from 'immer';
import { RESET_REDUX, LOGIN, LOGIN_SUCCESS } from './constantsLogin';

export const initialState = {
  isLoading: false,
  infoUser: {},
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RESET_REDUX:
        draft.isLoading = false;
        break;
      case LOGIN:
        draft.isLoading = true;
        break;
      case LOGIN_SUCCESS:
        draft.isLoading = false;
        draft.infoUser = action.data;
        break;
    }
  });

export default loginReducer;
