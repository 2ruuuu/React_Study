import {getMovies} from "@/lib/data";
import MovieList from "./components/MovieList";

export default async function Home() {
  // 여기에 코드를 작성하세요
  const {results: movies} = await getMovies();
  return (
    <div>
      <MovieList movies={movies} />
    </div>
  );
}
