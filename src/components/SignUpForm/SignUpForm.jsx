import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectStatus } from 'redux/userSlice/selectors';
import Loader from 'components/Loader/Loader';
import { StyledForm, FormTitle, FormInput, Input} from './SignUpForm.styled';

function SignUpForm({ onSubmit, isLoginForm = false }) {
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const status = useSelector(selectStatus);

  const handleSubmit = event => {
    event.preventDefault();

    const formData = {
      ...(!isLoginForm && { name: nameInputRef.current.value }),
      email: emailInputRef.current.value,
      password: passwordInputRef.current.value,
    };
    onSubmit(formData);

    event.target.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      
      <FormTitle>{isLoginForm ? 'Sign In' : 'Sign Up'}</FormTitle>
      {isLoginForm ? null : (
        <FormInput>
          <span>Ім'я: </span>
          <Input 
            type="text"
            name="name"
            placeholder={"Введіть ім'я"}
            ref={nameInputRef}
            required
          />
        </FormInput>
      )}
      <FormInput>
        <span>Емейл: </span>
        <input
          type="email"
          name="email"
          placeholder={'Введіть cвій e-mail'}
          ref={emailInputRef}
          required
        />
      </FormInput>
      <FormInput>
        <span>Пароль: </span>
        <input
          type="password"
          name="password"
          minLength={7}
          placeholder={'Введіть пароль'}
          ref={passwordInputRef}
          required
        />
      </FormInput>

      <button disabled={status === 'pending'} type="submit">
        {/* {status === 'pending' && <StyledFormLoader />} */}
        {isLoginForm ? 'Sign In' : 'Sign Up'}
      </button>
      {status === 'pending' && <Loader />}
      
    </StyledForm>
  );
}

SignUpForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SignUpForm;
