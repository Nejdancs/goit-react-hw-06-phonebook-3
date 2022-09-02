import { createStore, combineReducers } from 'redux';
import { persistStore } from 'redux-persist';
import {
  persistedContactFormReducer,
  persistedContactsReducer,
  persistedFilterReducer,
} from './persist/presistReducer';

const rootReducer = combineReducers({
  contacts: persistedContactsReducer,
  filter: persistedFilterReducer,
  addContactForm: persistedContactFormReducer,
});

export const store = createStore(rootReducer);
export const persistor = persistStore(store);
