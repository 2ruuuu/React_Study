import {BookData} from "@/types";
import axios from "axios";

const fetchRandomBooks = async (): Promise<BookData[]> => {
  try {
    const response = await axios.get("http://localhost:12345/book/random");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchRandomBooks;
