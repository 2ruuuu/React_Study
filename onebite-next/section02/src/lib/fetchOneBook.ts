import {BookData} from "@/types";
import axios from "axios";

const fetchOneBook = async (bookId: number): Promise<BookData | null> => {
  try {
    const response = await axios.get(`http://localhost:12345/book/${bookId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchOneBook;
