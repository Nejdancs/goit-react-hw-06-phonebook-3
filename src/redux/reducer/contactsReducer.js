import { CONTACTS_ADD, CONTACTS_REMOVE } from 'redux/types/contactsTypes';

const initialState = {
  value: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

export const contactsReducer = (store = initialState, { type, payload }) => {
  switch (type) {
    case CONTACTS_ADD:
      return { ...store, value: [...store.value, payload] };

    case CONTACTS_REMOVE:
      return {
        ...store,
        value: store.value.filter(({ id }) => id !== payload),
      };

    default:
      return store;
  }
};
