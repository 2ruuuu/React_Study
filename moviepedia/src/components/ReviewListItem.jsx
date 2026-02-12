import styles from "./ReviewListItem.module.css";
import {useState} from "react";
import Modal from "./Modal";
import ReviewForm from "./ReviewForm";
import Button from "./Button";

const ReviewListItem = ({item, onUpdate, onDelete}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const dateString = new Date(item.createdAt).toLocaleDateString();

  const handleEditFormSubmit = (data) => {
    onUpdate(item.id, data);
    setIsEditModalOpen(false);
  };

  return (
    <div className={styles.item}>
      <img className={styles.image} src={item.imgUrl} alt={item.title} />
      <div>
        <h1>{item.title}</h1>
        <p>{item.rating}</p>
        <p>{dateString}</p>
        <p>{item.content}</p>
        <Button variant="ghost" onClick={() => setIsEditModalOpen(true)}>
          수정
        </Button>
        <Modal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
        >
          <h2>리뷰 수정</h2>
          <ReviewForm review={item} onSubmit={handleEditFormSubmit} />
        </Modal>
        <Button variant="danger" onClick={() => onDelete(item.id)}>
          삭제
        </Button>
      </div>
    </div>
  );
};

export default ReviewListItem;
