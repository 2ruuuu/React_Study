import {BookData} from "@/types";
import axios from "axios";

const fetchBooks = async (q?: string): Promise<BookData[]> => {
  let url = `http://localhost:12345/book`;

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchBooks;
