import { NavLink, Outlet } from 'react-router-dom';

import { NavBlock, NavLinkStyled } from './NavBar.styled';

export const NavBar = () => {
  return (
    <>
    <NavBlock>
       
        <NavLinkStyled to="/">Home</NavLinkStyled>
  
        <NavLinkStyled  to="/register">Register </NavLinkStyled>
      
        <NavLinkStyled to="/login">Log In</NavLinkStyled>
  
    </NavBlock>
    <Outlet/>
    </>
  );
};

// export const Navbar=()=>{

//     return <>
//     <ul>
//     <li>
//     <NavLink  to='login'>Login</NavLink>
// </li>
// <li>
//     <NavLink  to='register'>Register</NavLink>
// </li>
// <li>
//     <NavLink  to='/'>Home</NavLink>
// </li>

// <li>
//     <NavLink  to='points'>Points</NavLink>
// </li>
// <li>
//     <NavLink  to='friends'>Friend-list</NavLink>
// </li>
// <li>
//     <NavLink  to='photos'>Photos</NavLink>
// </li>
//     </ul>
//     <Outlet/>
//     </>
// }
