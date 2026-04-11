import {Routes, Route} from "react-router-dom";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

function App() {
  return (
    <Container>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  padding: 0 20px;
`;
