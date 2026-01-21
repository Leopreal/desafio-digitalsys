import { styled } from "styled-components";
import { Button } from "./components/atoms/Button";

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #0a0e27;
  color: white;
`;

const Header = styled.header`
  background-color: #1a1f3a;
  padding: 1.5rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
`;

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;
function App() {
  return (
    <AppContainer>
      <Header>
        <Title>🚀 Stardust Ledger</Title>
      </Header>
      <Main>
        <p>Teste</p>
        <Button
          variant="primary"
          size="medium"
          onClick={() => alert("Button clicked!")}
          children={"Teste"}
        ></Button>
      </Main>
    </AppContainer>
  );
}

export default App;
