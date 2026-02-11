import FoodList from "./components/FoodList";
import Modal from "./components/Modal";
import mockItems from "./mock.json";
import styles from "./App.module.css";
import {useState} from "react";
import CreateFoodForm from "./components/CreateFoodForm";

function App() {
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const [keyword, setKeyword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const resultItems = items
    .sort((a, b) => b[order] - a[order])
    .filter(
      (item) => item.title.includes(keyword) || item.title.includes(keyword),
    );

  const handleRecentClick = () => {
    setOrder("createdAt");
  };

  const handleCalorieClick = () => {
    setOrder("calorie");
  };

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleCreate = (data) => {
    console.log(data);
    setIsModalOpen(false);
  };

  return (
    <div>
      <input
        className={styles.input}
        value={keyword}
        onChange={handleKeywordChange}
      />
      <div>{keyword}</div>
      <div>
        <button onClick={handleRecentClick}>최신순</button>
        <button onClick={handleCalorieClick}>칼로리순</button>
        <button onClick={handleModalOpen}>추가하기</button>
      </div>
      <FoodList items={resultItems} onDelete={handleDelete} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>정보 입력</h2>
        <CreateFoodForm onSubmit={handleCreate} />
      </Modal>
    </div>
  );
}

export default App;
