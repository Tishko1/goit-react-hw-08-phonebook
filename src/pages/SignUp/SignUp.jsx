import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { registerRequest } from 'redux/userSlice/userSlice';
import { selectAuthError, selectIsLoggedIn } from 'redux/userSlice/selectors';

import  SignUpForm  from 'components/SignUpForm/SignUpForm';

function SignUpPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectAuthError);

  useEffect(() => {
    if (!isLoggedIn) return;

    navigate('/contacts');
  }, [isLoggedIn, navigate]);

  const handleRegister = formData => {
    dispatch(registerRequest(formData));
  };

  return (
    <div>
      {error !== null && (
      
          <p>Oops, some error occured... {error}</p>
       
      )}
      <SignUpForm onSubmit={handleRegister} />
    </div>
  );
}

export default SignUpPage;
