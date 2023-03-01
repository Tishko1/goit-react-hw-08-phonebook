import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader/Loader';
import { Container } from './App.styled';
import { useSelector } from 'react-redux';
import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import { getContacts } from 'redux/operations';
import { NavBar } from './NavBar/NavBar';
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";
import  Home from 'pages/Home';

export function App() {
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<NavBar/>}>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route index element={<Home />} />
          <Route path="/сontactForm" element={<ContactForm/>}/>
          <Route path="/filter" element={<Filter/>}/>
          <Route path="/сontactList" element={<ContactList/>}/>
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
    
  );
}

{/* <Container>
      {isLoading && <Loader />}
      <h1>Phonebook App</h1>
      <ContactForm />
      <Filter />
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>Your contact list is empty</p>
      )}
    </Container> */}
