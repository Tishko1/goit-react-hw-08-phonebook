import { createSelector } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';

export const selectFilter = state => state.filter.value;
// export const selectContacts = state => state.contacts.items;
export const selectContacts = state => state.contacts.contacts;
// const contacts = useSelector(selectContacts);

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],

  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
