import {useState} from "react";
import mockItems from "./mock.json";
import ReviewList from "./components/ReviewList";
import Modal from "./components/Modal";
import ReviewForm from "./components/ReviewForm";
import Button from "./components/Button";

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const [isCreateReviewOpen, setIsCreateReviewOpen] = useState(false);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleCreate = (data) => {
    const now = new Date();
    const newItem = {
      id: items.length + 1,
      ...data,
      createdAt: now.valueOf(),
      updatedAt: now.valueOf(),
    };
    setItems([newItem, ...items]);
    handleModalClose();
  };
  const handleRecentClick = () => {
    setOrder("createdAt");
  };
  const handleBestClick = () => {
    setOrder("rating");
  };

  const handleUpdate = (id, data) => {
    const index = items.findIndex((item) => item.id === id);
    const now = new Date();
    const newItem = {
      ...items[index],
      ...data,
      updatedAt: now.valueOf(),
    };
    const newItems = [
      ...items.slice(0, index),
      newItem,
      ...items.slice(index + 1),
    ];

    setItems(newItems);
  };

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleModalClose = () => {
    setIsCreateReviewOpen(false);
  };

  return (
    <div>
      <div>
        <Button
          variant={order === "createdAt" ? "primary" : "ghost"}
          onClick={handleRecentClick}
        >
          최신순
        </Button>
        <Button
          variant={order === "rating" ? "primary" : "ghost"}
          onClick={handleBestClick}
        >
          베스트순
        </Button>
        <Button onClick={() => setIsCreateReviewOpen(true)}>추가하기</Button>
        <Modal isOpen={isCreateReviewOpen} onClose={handleModalClose}>
          <h2>리뷰 생성</h2>
          <ReviewForm handleCreate={handleCreate} />
        </Modal>
      </div>
      <ReviewList
        items={sortedItems}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </div>
  );
}

export default App;
