import styled from "styled-components";

const NavBar = () => {
  return (
    <div>
      <Container>교보문고</Container>
    </div>
  );
};

export default NavBar;

const Container = styled.h1`
  display: flex;
  justify-content: center;
  padding: 12px;
`;
