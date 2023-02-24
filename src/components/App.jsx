import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

export function App() {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <Container>
      <h1>Phonebook App</h1>
      <ContactForm />
      <Filter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your contact list is empty</p>
      )}
    </Container>
  );
}
