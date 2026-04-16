import Link from 'next/link';

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id} style={{ marginTop: '40px' }}>
          <Link href={`/movies/${movie.id}`}>
            <img
              src={movie.posterUrl}
              alt={movie.title}
              width={300}
              height={438}
            />
            <div>
              <h2>{movie.title}</h2>
              <div>{movie.date}</div>
              <div>{movie.country}</div>
              <div>별점: {movie.starRating}</div>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
