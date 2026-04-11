import styled from "styled-components";
import Button from "./Button";
import SearchBar from "./SearchBar";

const Search = () => {
  return (
    <div>
      <Container>
        <SearchBar />
        <Button />
      </Container>
    </div>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 12px;
  gap: 12px;
`;
