import MovieList from "./components/MovieList";
import {getMovies} from "@/api";

const Home = async ({searchParams}) => {
  const q = searchParams?.q;
  const data = await getMovies({q, limit: 10, offset: 0});
  return <MovieList movies={data.results} />;
};

export default Home;
