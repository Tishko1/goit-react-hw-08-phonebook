import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts') ;
    const parsedContacts = JSON.parse(contacts) ?? [];

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts  });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitHandler = ({ name, number }) => {
    const isInclude = this.state.contacts.some(
      contact => contact.name === name
    );
    if (isInclude) {
      alert('This contact is already in your contact list');
      return;
    } else {
      this.setState(prevState => {
        const newContacts = [
          ...prevState.contacts,
          { id: nanoid(), name: name, number: number },
        ];

        return {
          contacts: newContacts,
        };
      });
    }
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
