import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: 20px;
  padding: 15px;
  background-color: #c9bdd2;
  border-radius: 10px ;
`;

export const Form = styled.form`
width: 600px;
  padding: 20px;
  margin: 0 15px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: 3px solid #cca8e9;
`;

export const LabelGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const LabelTitle = styled.span`
  display: inline-block;
  margin: 5px;
  text-align: start;
  min-width: 80px;
  font-weight: bold;
`;

export const Input = styled.input`
  border: 1px solid #cca8e9;
  height: 20px;
  &:hover,
  &:focus {
    outline: 1px solid #cca8e9;
  }
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