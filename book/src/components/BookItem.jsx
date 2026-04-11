import styled from "styled-components";
import BookItemMock from "../mock/BookItemMock.json";

const BookItem = ({item}) => {
  return (
    <Container>
      <Image src={item.coverImgUrl} />
      <TextContainer>
        <Title>{item.title}</Title>
        <SubTitle>{item.subTitle}</SubTitle>
        <Description>{item.description}</Description>
      </TextContainer>
    </Container>
  );
};

export default BookItem;

const Container = styled.div`
  display: flex;
  padding: 10px;
  gap: 12px;
  border-bottom: 1px solid #000000;
`;

const Image = styled.img`
  width: 150px;
  height: auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h2``;

const SubTitle = styled.h3``;

const Description = styled.p``;
