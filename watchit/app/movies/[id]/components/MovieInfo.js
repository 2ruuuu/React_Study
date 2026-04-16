export default function MovieInfo({ movie }) {
  return (
    <div>
      <img src={movie.posterUrl} alt={movie.title} width={350} height={511} />
      <h1>{movie.title}</h1>
      <div>개봉 {movie.date}</div>
      <div>장르 {movie.genre}</div>
      <div>국가 {movie.country}</div>
      <div>등급 {movie.rating}</div>
      <div>러닝타임 {movie.runningTime}</div>
      <div>평점 {movie.starRating}</div>
      <p>{movie.description}</p>
    </div>
  );
}
