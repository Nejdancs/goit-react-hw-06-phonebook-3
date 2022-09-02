import { CONTACTS_ADD, CONTACTS_REMOVE } from 'redux/types/contactsTypes';

export const add = payload => {
  return {
    type: CONTACTS_ADD,
    payload,
  };
};

export const remove = payload => {
  return {
    type: CONTACTS_REMOVE,
    payload,
  };
};
