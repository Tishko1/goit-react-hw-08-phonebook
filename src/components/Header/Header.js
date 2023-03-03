import { useDispatch, useSelector } from 'react-redux';

import { selectIsLoggedIn, selectUserData } from 'redux/userSlice/selectors';

import {
      logOutRequest,
  } from 'redux/userSlice/userSlice';
import { StyledNavLink, Button, Title} from './Header.styled';

export const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logOutRequest());
  };

  return (
    <header>
    <nav>
    <StyledNavLink to="/">Home</StyledNavLink>
      {isLoggedIn ? (
        <>
          
          <StyledNavLink to="/contacts">Contacts</StyledNavLink>
          <Title>Hello, {userData.name}</Title>
          <Button onClick={handleLogOut}>Logout</Button>
        </>
      ) : (
        <>
          <StyledNavLink to="/sign-in">Sign In</StyledNavLink>
          <StyledNavLink to="/sign-up">Sign Up</StyledNavLink>
        </>
      )}
    </nav>
  </header>

  );
};