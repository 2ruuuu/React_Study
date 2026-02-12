import EditFoodForm from "./EditFoodForm";
import Modal from "./Modal";
import {useState} from "react";

const FoodListItem = ({item, onDelete, onUpdate}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {id, imgUrl, title, calorie, content} = item;

  const handleEditFormSubmit = (data) => {
    onUpdate(item.id, data);
    setModalIsOpen(false);
  };

  return (
    <div>
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
      <div>{calorie}</div>
      <div>{content}</div>
      <button onClick={() => onDelete(id)}>삭제</button>
      <button onClick={() => setModalIsOpen(true)}>수정</button>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <h2>정보 수정</h2>
        <EditFoodForm item={item} onUpdate={handleEditFormSubmit} />
      </Modal>
    </div>
  );
};

export default FoodListItem;
