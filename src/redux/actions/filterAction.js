import { SET_FILTER, TOGGLE_FILTER } from 'redux/types/filterTypes';

export const set = payload => {
  return {
    type: SET_FILTER,
    payload,
  };
};

export const toggleFilterAction = payload => {
  return {
    type: TOGGLE_FILTER,
    payload,
  };
};
