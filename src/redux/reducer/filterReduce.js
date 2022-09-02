import { SET_FILTER, TOGGLE_FILTER } from 'redux/types/filterTypes';

const initialStore = {
  value: '',
  isOpen: false,
};

export const filterReducer = (store = initialStore, { type, payload }) => {
  switch (type) {
    case SET_FILTER:
      return { ...store, value: payload };

    case TOGGLE_FILTER:
      return { ...store, isOpen: !store.isOpen };

    default:
      return store;
  }
};
