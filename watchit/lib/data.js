import { get } from '@/lib/fetch';

export async function getMovies() {
  const response = await get('/movies');
  return response;
}

export async function getMovie(movieId) {
  const movie = await get(`/movies/${movieId}`);
  return movie;
}

export async function getMovieReviews(movieId) {
  const response = await get(`/movie_reviews/?movie_id=${movieId}`);
  return response;
}
