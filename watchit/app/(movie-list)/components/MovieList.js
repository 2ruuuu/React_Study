import Link from "next/link";

const MovieList = () => {
  <ul>
    {Array.from({length: 20}, (_, i) => i + 1).map((id) => (
      <li key={id} style={{marginBottom: "40px"}}>
        <Link href={`/movies/${id}`}>
          <div>영화 {id}</div>
        </Link>
      </li>
    ))}
  </ul>;
};

export default MovieList;
