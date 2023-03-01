import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavBlock = styled.div`
position: relative;
top: 75px;
margin: 15px auto;
max-width: 560px;
    display: flex;
   
  justify-content: space-between;

`;



export const NavLinkStyled = styled(NavLink)`
  font-size: 26px;
  text-decoration: none;
  color: black;
  padding: 0 30px;
  &:hover {
    color: rgb(59, 44, 44);
    // border: 1px solid rgb(169, 153, 153);
    border-radius: 10px;
    background-color: rgb(240, 225, 225);
  }
  &.active {
    // font-size: 26px;
    // text-decoration: none;
    color: black;
    padding: 0 30px;
    // border: 1px solid rgb(169, 153, 153);
    background-color: #ddc4ec;
    border-radius: 10px;
  }
`;
