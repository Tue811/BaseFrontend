import produce from 'immer';
import {
  LIST,
  LIST_SUCCESS,
  ADD,
  EDIT,
  REMOVE,
  GET_PRODUCT_LINE_SUCCESS,
} from './constantsManagerProduct';

export const initialState = {
  isLoading: false,
  list: [],
  productLine: [],
  infoProductLine: {},
};

/* eslint-disable default-case, no-param-reassign */

export const managerProductReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case LIST:
        draft.isLoading = true;
        break;
      case LIST_SUCCESS:
        draft.isLoading = false;
        draft.list = action.data.response;
        break;
      case ADD:
        draft.isLoading = true;
        break;
      case EDIT:
        draft.isLoading = true;
        break;
      case REMOVE:
        draft.isLoading = true;
        break;
      case GET_PRODUCT_LINE_SUCCESS:
        draft.isLoading = false;
        draft.productLine = action.data.data;
        break;
    }
  });

export default managerProductReducer;
