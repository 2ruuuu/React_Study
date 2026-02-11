import {useState} from "react";
import mockItems from "./mock.json";
import ReviewList from "./components/ReviewList";
import Modal from "./components/Modal";
import CreateReviewForm from "./components/CreateReviewForm";

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
        <button onClick={handleRecentClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
        <button onClick={() => setIsCreateReviewOpen(true)}>추가하기</button>
        <Modal isOpen={isCreateReviewOpen} onClose={handleModalClose}>
          <h2>리뷰 생성</h2>
          <CreateReviewForm handleCreate={handleCreate} />
        </Modal>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
