import ReviewListItem from "./ReviewListItem";

const ReviewList = ({items, onDelete}) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ReviewListItem item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
