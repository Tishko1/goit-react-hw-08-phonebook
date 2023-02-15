import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );

  //

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = ({ name, number }) => {
    const isInclude = contacts.some(contact => contact.name === name);
    if (isInclude) {
      alert('This contact is already in your contact list');
      return;
    }
    setContacts(prevState => [
      ...prevState,
      { id: nanoid(), name: name, number: number },
    ]);
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const deleteContactFromArr = id => {
    setContacts(contacts =>
      contacts.filter(contactItem => contactItem.id !== id)
    );
  };

  const normalizedFilter = filter.toLowerCase();

  const visibleItems = contacts.filter(contactItem => {
    return contactItem.name.toLowerCase().includes(normalizedFilter);
  });

  return (
    <Container>
      <h1>Phonebook App</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <Filter filterValue={filter} onChange={changeFilter} />
      {visibleItems.length > 0 ? (
        <ContactList
          contacts={visibleItems}
          deleteContact={deleteContactFromArr}
        />
      ) : (
        <p>Your contact list is empty</p>
      )}
    </Container>
  );
}
