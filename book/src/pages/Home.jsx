import {useEffect, useState} from "react";
import styled from "styled-components";
import BookItem from "../components/BookItem";
import Search from "../components/Search";
import getAllBooks from "../api/getAllBooks";

function Home() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await getAllBooks();
        setBookData(data);
      } catch (e) {
        console.error("데이터 로딩 실패", e);
      }
    };
    fetchBooks();
  }, []);

  return (
    <>
      <Search />
      <ListSection>
        {bookData.map((item) => (
          <BookItem key={item.id} item={item} />
        ))}
      </ListSection>
    </>
  );
}

export default Home;

const ListSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`;
