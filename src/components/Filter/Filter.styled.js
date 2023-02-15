import styled from '@emotion/styled';

export const Title = styled.h2`
  font-size: 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 10px 10px 0 0;
`;

export const Content = styled.div`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 0 0 10px 10px;
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
