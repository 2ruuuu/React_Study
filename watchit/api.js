import axios from "axios";

const api = axios.create({
  baseURL: "https://learn.codeit.kr/v2/watchit",
});

export const getMovies = async ({q, limit = 10, offset = 0} = {}) => {
  const response = await api.get("/movies", {params: {q, limit, offset}});
  return response.data;
};
