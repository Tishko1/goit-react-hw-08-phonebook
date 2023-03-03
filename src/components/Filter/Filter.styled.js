import styled from '@emotion/styled';

export const Title = styled.h2`
width: 150px;

  font-size: 20px;
  padding: 15px;
  margin: 0 15px 15px;
  background-color: #d0bfd2;
  border-radius: 10px ;
`;

export const Content = styled.div`
width: 600px;
  padding: 20px;
  margin: 0 15px;
  background-color: #f2f2f2;
  border-radius: 10px;
  border: 3px solid #cca8e9;
`;

export const Input = styled.input`
  border: 1px solid #cca8e9;
  height: 20px;
  &:hover,
  &:focus {
    outline: 1px solid #cca8e9;
  }
`;

export const LabelTitle = styled.span`
  display: inline-block;
  margin: 5px;
  text-align: start;
  min-width: 80px;
  font-weight: bold;
`;
