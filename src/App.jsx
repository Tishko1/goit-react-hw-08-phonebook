import React, { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch} from 'react-redux';


import Loader from 'components/Loader/Loader';



import {
  getCurrentUserRequest,
} from 'redux/userSlice/userSlice';
import { Header } from 'components/Header/Header';

const HomePage = lazy(() => import('pages/Home/Home'));
const SignInPage = lazy(() => import('pages/SignIn/SignIn'));
const SignUpPage = lazy(() => import('pages/SignUp/SignUp'));
const ContactsPage = lazy(() => import('pages/Contacts/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  // const userData = useSelector(selectUserData);

  

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    dispatch(getCurrentUserRequest());
  }, [dispatch]);

  return (
    <div>
      <Header/>
        
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route index element={<HomePage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />

            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};

