import formatDate from '@/lib/formatDate';

const labels = {
  sex: {
    male: '남성',
    female: '여성',
  },
};

export default function MovieReviewList({ movieReviews }) {
  return (
    <ul>
      {movieReviews.map((movieReview) => (
        <li key={movieReview.id} style={{ marginTop: '20px' }}>
          <div>{formatDate(movieReview.createdAt)}</div>
          <div>{labels.sex[movieReview.sex]}</div>
          <div>{movieReview.age}대</div>
          <div>별점 {movieReview.starRating}</div>
        </li>
      ))}
    </ul>
  );
}
