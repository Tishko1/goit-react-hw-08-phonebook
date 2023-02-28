import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { getContacts } from 'redux/operations';

export function App() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Container>
      {isLoading && <Loader />}
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
