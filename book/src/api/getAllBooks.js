import axios from "axios";

const getAllBooks = async () => {
  const response = await axios.get(`http://localhost:12345/book`);
  return response.data;
};

export default getAllBooks;
