import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducerManagerProduct';

export const selectManagerProduct = state =>
  state[REDUX_KEY.managerProduct] || initialState;

function selectLoading() {
  return createSelector(
    selectManagerProduct,
    state => state.isLoading,
  );
}

export const selectList = () =>
  createSelector(
    selectManagerProduct,
    state => state.list,
  );

export const selectListProductLine = () =>
  createSelector(
    selectManagerProduct,
    state => state.productLine,
  );

export { selectLoading };
