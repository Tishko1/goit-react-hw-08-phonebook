import React from 'react';
import {  Navigate, Route, Routes } from 'react-router-dom';

import SignInPage from 'pages/SignIn/SignIn';
import SignUpPage from 'pages/SignUp/SignUp';
import ContactsPage from 'pages/Contacts/Contacts';
// import Loader from 'components/Loader/Loader';

import { StyledNavLink } from 'App.styled';



const styles = {
  color: '#010101',
  paddingTop: '80px',
};

export const App = () => {
  return (
    <div style={styles}>
      <header>
        <nav>
          <StyledNavLink to="/">Contacts</StyledNavLink>
          <StyledNavLink to="/sign-in">Sign In</StyledNavLink>
          <StyledNavLink to="/sign-up">Sign Up</StyledNavLink>
        </nav>
      </header>

      <main>
          <Routes>
            <Route path="/" element={<ContactsPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            
            <Route path="*" element={<Navigate to="/" replace={true} />} />
            
          </Routes>
      </main>
    </div>
  );
};






// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import { ContactForm } from './components/ContactForm/ContactForm';
// import { ContactList } from './components/ContactList/ContactList';
// import { Filter } from './components/Filter/Filter';
// import { Loader } from './components/Loader/Loader';
// import { Container } from './App.styled';
// import { useSelector } from 'react-redux';
// import { selectFilteredContacts, selectIsLoading } from 'redux/selectors';
// import { getContacts } from 'redux/operations';
// import { NavBar } from './components/NavBar/NavBar';
// import { Login } from "./components/Login/Login";
// import { Register } from "./components/Register/Register";
// import  Home from 'pages/Home';

// export function App() {
//   const contacts = useSelector(selectFilteredContacts);
//   const isLoading = useSelector(selectIsLoading);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getContacts());
//   }, [dispatch]);

//   return (
//     <Routes>
//       <Route path="/" element={<NavBar/>}>
//         <Route path="/login" element={<Login/>}/>
//         <Route path="/register" element={<Register/>}/>
//         <Route index element={<Home />} />
//           <Route path="/сontactForm" element={<ContactForm/>}/>
//           <Route path="/filter" element={<Filter/>}/>
//           <Route path="/сontactList" element={<ContactList/>}/>
//       </Route>
//       <Route path="*" element={<Navigate to="/" replace={true} />} />
//     </Routes>
    
//   );
// }

// {/* <Container>
//       {isLoading && <Loader />}
//       <h1>Phonebook App</h1>
//       <ContactForm />
//       <Filter />
//       {contacts.length > 0 ? (
//         <ContactList />
//       ) : (
//         <p>Your contact list is empty</p>
//       )}
//     </Container> */}
