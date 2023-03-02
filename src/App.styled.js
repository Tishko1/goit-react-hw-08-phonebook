import styled from '@emotion/styled';

import { NavLink } from 'react-router-dom';


export const ListsContainer = styled.div`
  display: flex;
  padding: 0 15px;
  position: relative;
`;

export const PostsList = styled.ul`
  display: flex;
  flex-basis: 60%;
  flex-grow: 1;
  flex-shrink: 1;
  padding-left: 0;
  padding-right: 7px;
  flex-direction: column;
  list-style-type: none;
  & button {
    padding: 0;
    margin: 0;
    border: none;
    background: transparent;
  }
  & li {
    padding: 15px;
    border: 2px solid gray;
    transition: all 0.3s;
    margin-bottom: 15px;
    &.selected {
      border: 2px solid yellow;
    }
  }
`;

export const CommentsList = styled.ul`
  display: flex;
  flex-basis: 40%;
  flex-grow: 1;
  flex-shrink: 1;
  flex-direction: column;
  padding-left: 7px;
  list-style-type: none;
  max-height: 100vh;
  overflow-y: scroll;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  & li {
    padding: 15px;
    margin-bottom: 15px;
    border: 1px solid blue;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  border-bottom: 2px solid transparent;

  padding: 15px;
  transition: all .3s;
  color: black;
  &.active {
    color: blue;
    border-bottom: 2px solid blue;
  }
`;


export const Container = styled.div`
  font-size: 14px;
  width: 560px;
  margin: 15px auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  text-align: center;
  border: 5px solid #77529e;
  border-radius: 20px;
`;

export const Button = styled.button`
  display: block;
  width: 110px;
  height: 40px;
  padding: 0px 10px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 5px;
  border: 3px solid #cca8e9;
  &:hover {
    background-color: #c3bef0;
  }
`;
