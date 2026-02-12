import ReviewListItem from "./ReviewListItem";

const ReviewList = ({items, onUpdate, onDelete}) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <ReviewListItem item={item} onDelete={onDelete} onUpdate={onUpdate} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
