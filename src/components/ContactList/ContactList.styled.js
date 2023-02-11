import styled from '@emotion/styled';

export const Title = styled.h2`
font-size: 20px;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 10px 10px 0 0;
`
export const List = styled.ul`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 0 0 10px 10px;
  border: 3px solid #cca8e9;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ListItem = styled.li`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  border: 3px solid #cca8e9;
`

export const ParagraphText = styled.span`
  display: inline-block;
  min-width: 110px;
  font-weight: bold;
`