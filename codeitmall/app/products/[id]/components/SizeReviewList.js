import formatDate from "@/app/lib/formatDate";
import sizeReviewLabels from "@/app/lib/sizeReviewLabel";

const SizeReviewList = ({sizeReviews}) => {
  return (
    <ul>
      {sizeReviews.map((sizeReview) => (
        <li key={sizeReview.id} style={{marginTop: "20px"}}>
          <div>
            <div>{formatDate(new Date(sizeReview.createdAt))}</div>
            <div>
              ({sizeReviewLabels.sex[sizeReview.sex]} {sizeReview.height}cm
              기준) {sizeReview.size}
            </div>
          </div>
          <div>{sizeReviewLabels.fit[sizeReview.fit]}</div>
        </li>
      ))}
    </ul>
  );
};

export default SizeReviewList;
