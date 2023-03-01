import styled from '@emotion/styled';

const ContainerHome = styled.div`

min-height: calc(100vh - 200px);
// font-size: 14px;
  width: 600px;
  margin: 15px auto;
  // padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  // gap: 30px;
  text-align: center;
  border: 5px solid #77529e;
  border-radius: 20px;
`

const Welcome = styled.h1`
  color: #77529e;
  font-weight: 700;
  font-size: 48;
  text-align: center;
`;

export default function Home() {
  return (
    <ContainerHome>
      <Welcome>
        Phone Book {' '}
        
      </Welcome>
    </ContainerHome>
  );
}
