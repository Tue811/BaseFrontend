import produce from 'immer';
import {
  ADD,
  EDIT,
  LIST,
  LIST_SUCCESS,
  REMOVE,
  RESET_REDUX,
  UPLOAD_IMAGE,
} from './constantsManagerProductLine';

export const initialState = {
  isLoading: false,
  getList: [],
};
/* eslint-disable default-case, no-param-reassign */
const managerProductLineReducer = (state = initialState, action) =>
  produce(state, draft => {
    // eslint-disable-next-line default-case
    switch (action.type) {
      case RESET_REDUX:
        draft.isLoading = false;
        break;
      case LIST:
        draft.isLoading = true;
        break;
      case LIST_SUCCESS:
        draft.isLoading = false;
        console.log(action.data);
        draft.getList = action.data;
        break;
      case ADD:
        draft.isLoading = true;
        break;
      case UPLOAD_IMAGE:
        draft.isLoading = true;
        break;
      case EDIT:
        draft.isLoading = true;
        break;
      case REMOVE:
        draft.isLoading = true;
        break;
    }
  });

export default managerProductLineReducer;
