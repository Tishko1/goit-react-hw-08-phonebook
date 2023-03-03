import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice/contactsSlice';
import { userReducer } from './userSlice/userSlice';
import { filterReducer} from './filterSlice/filterSlice';

const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});