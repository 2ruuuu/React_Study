import {getMovie, getMovieReviews} from "@/lib/data";
import MovieInfo from "./components/MovieInfo";
import MovieReviewList from "./components/MovieReviewList";

export default async function Movie({params}) {
  const {id} = await params;
  // 여기에 코드를 작성하세요
  const [moive, {result: movieReviews}] = await Promise.all([
    getMovie(id),
    getMovieReviews(id),
  ]);
  return (
    <div>
      <MovieInfo movie={moive} />
      <h2 style={{marginTop: "40px"}}>리뷰 목록</h2>
      <MovieReviewList movieReviews={movieReviews} />
    </div>
  );
}
