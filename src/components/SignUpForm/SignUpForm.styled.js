import styled from '@emotion/styled';


export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  width: 100%;
  margin: 0 auto 25px;
  background-color: #f2f2f2;
 `;

export const FormTitle = styled.h2`
font-size: 25px;
    font-weight: 500;
    text-align: center;
    margin: 0;
    `;

//     export const LabelGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;

export const FormInput = styled.label`
display: flex;
    gap: 12px;
    align-items: center;
    
`;

export const Input = styled.input`
&placeholrer{
    backgroundColor: #c3bef0;
}
`;
