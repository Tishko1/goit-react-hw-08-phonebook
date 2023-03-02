import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactsSlice/contactsSlice';
import { userReducer } from './userSlice/userSlice';

const rootReducer = combineReducers({
  user: userReducer,
  contacts: contactReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});