import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    this.setState(prevState => {
      const isInclude = this.state.contacts.some(
        contact => contact.name === name
      );
      if (isInclude) {
        alert('This contact is already in your contact list');
        return;
      }

      
      const newContacts = [
        ...prevState.contacts,
        { id: nanoid(), name: name, number: number },
      ];

      
      return {
        contacts: newContacts,
      };
    });
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  deleteContactFromArr = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contactItem => contactItem.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const visibleItems = contacts.filter(contactItem => {
      return contactItem.name.toLowerCase().includes(normalizedFilter);
    });

    return (
      <Container>
        <h1>Phonebook App</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <Filter filterValue={filter} onChange={this.changeFilter} />
        {visibleItems.length > 0 ? (
          <ContactList
            contacts={visibleItems}
            deleteContact={this.deleteContactFromArr}
          />
        ) : (
          <p>Your contact list is empty</p>
        )}
      </Container>
    );
  }
}
