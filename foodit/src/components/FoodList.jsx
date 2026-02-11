import FoodListItem from "./FoodListItem";

const FoodList = ({items, onDelete}) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <FoodListItem item={item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default FoodList;
