import { createSelector } from 'reselect';
import { REDUX_KEY } from '../../utils/constants';
import { initialState } from './reducerManagerProductLine';

export const selectManagerProductLine = state =>
  state[REDUX_KEY.managerProductLine] || initialState;

function selectLoading() {
  return createSelector(
    selectManagerProductLine,
    state => state.isLoading,
  );
}

export const selectList = () =>
  createSelector(
    selectManagerProductLine,
    state => state.getList,
  );

export { selectLoading };
