import { TOGGLE_FORM } from 'redux/types/addContactFormTypes';

export const addContactFormReducer = (store = { isOpen: false }, { type }) => {
  switch (type) {
    case TOGGLE_FORM:
      return { ...store, isOpen: !store.isOpen };

    default:
      return store;
  }
};
