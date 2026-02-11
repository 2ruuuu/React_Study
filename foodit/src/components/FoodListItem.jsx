const FoodListItem = ({item, onDelete}) => {
  const {id, imgUrl, title, calorie, content} = item;
  return (
    <div>
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <button onClick={() => onDelete(id)}>삭제</button>
    </div>
  );
};

export default FoodListItem;
