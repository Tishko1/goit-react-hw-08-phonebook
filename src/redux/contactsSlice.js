import { createSlice, isAnyOf  } from '@reduxjs/toolkit';
import { addContact, deleteContact, getContacts } from './operations';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.items = [...payload].reverse();
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(item => item.id !== payload.id);
        state.isLoading = false;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items = [payload, ...state.items];
        state.isLoading = false;
      })
      .addMatcher(
        isAnyOf(getContacts.pending, deleteContact.pending, addContact.pending),
        state => {
          state.isLoading = true;
        }
      )
      .addMatcher(
        isAnyOf(
          getContacts.rejected,
          deleteContact.rejected,
          addContact.rejected
        ),
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;

// extraReducers: {
//   [getContacts.pending]: state => {
//     state.isLoading = true;
//   },
//   [getContacts.fulfilled]: (state, { payload }) => {
//     state.items = [...payload].reverse();
//     state.isLoading = false;
//   },
//   [getContacts.rejected]: (state, { payload }) => {
//     state.error = payload;
//     state.isLoading = false;
//   },
//   [deleteContact.pending]: state => {
//     state.isLoading = true;
//   },
//   [deleteContact.fulfilled]: (state, { payload }) => {
//     state.items = state.items.filter(item => item.id !== payload.id);
//     state.isLoading = false;
//   },
//   [deleteContact.rejected]: (state, { payload }) => {
//     state.error = payload;
//     state.isLoading = false;
//   },
//   [addContact.pending]: (state, { payload }) => {
//     state.isLoading = true;
//   },
//   [addContact.fulfilled]: (state, { payload }) => {
//     state.items = [payload, ...state.items];
//     state.isLoading = false;
//   },
//   [addContact.rejected]: (state, { payload }) => {
//     state.error = payload;
//     state.isLoading = false;
//   },
// },