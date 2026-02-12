import FoodListItem from "./FoodListItem";

const FoodList = ({items, onDelete, onUpdate}) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <FoodListItem item={item} onDelete={onDelete} onUpdate={onUpdate} />
        </li>
      ))}
    </ul>
  );
};

export default FoodList;
