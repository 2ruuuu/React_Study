import {useEffect, useState} from "react";
import Layout from "./components/Layout";
import FoodList from "./components/FoodList";
import Modal from "./components/Modal";
import FoodForm from "./components/FoodForm";
import Button from "./components/Button";
import Input from "./components/Input";
import styles from "./App.module.css";
import {LocaleProvider} from "./contexts/LocaleContext";
import axios from "./utils/axios";

const LIMIT = 10;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [keyword, setKeyword] = useState("");
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [cursor, setCursor] = useState("");

  const handleLoad = async (orderParam, searchParam) => {
    const response = await axios.get("/foods", {
      params: {
        order: orderParam,
        search: searchParam,
        limit: LIMIT,
      },
    });
    const {foods, paging} = response.data;
    setItems(foods);
    setCursor(paging.nextCursor);
  };

  const handleLoadMore = async () => {
    const response = await axios.get("/foods", {
      params: {
        order,
        search: keyword,
        limit: LIMIT,
        cursor,
      },
    });
    const {foods, paging} = response.data;
    setItems((prev) => [...prev, ...foods]);
    setCursor(paging.nextCursor);
  };

  const handleLatestClick = () => setOrder("createdAt");

  const handleCalorieClick = () => setOrder("calorie");

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  const handleCreate = async (data) => {
    const response = await axios.post("/foods", data);
    const {food} = response.data;
    setItems((prev) => [food, ...prev]);
    setIsCreateModalOpen(false);
  };

  const handleUpdate = async (id, data) => {
    const response = await axios.patch(`/foods/${id}`, data);
    const {food} = response.data;

    setItems((prev) => {
      const targetIndex = prev.findIndex((item) => item.id === id);
      if (targetIndex < 0) return;

      return [
        ...prev.slice(0, targetIndex),
        food,
        ...prev.slice(targetIndex + 1),
      ];
    });
  };

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  useEffect(() => {
    handleLoad(order, keyword);
  }, [order, keyword]);

  return (
    <LocaleProvider defaultValue="ko">
      <Layout>
        <div className={styles.header}>
          <Input
            variant="search"
            onChange={handleKeywordChange}
            placeholder="검색어를 입력해주세요"
          />
          <div className={styles.buttonContainer}>
            <button
              className={`${styles.filter} ${
                order === "createdAt" ? styles.active : ""
              }`}
              onClick={handleLatestClick}
            >
              최신순
            </button>
            <button
              className={`${styles.filter} ${
                order === "calorie" ? styles.active : ""
              }`}
              onClick={handleCalorieClick}
            >
              칼로리순
            </button>
            <Button onClick={() => setIsCreateModalOpen(true)}>추가하기</Button>
            <Modal
              title="칼로리 기록하기"
              isOpen={isCreateModalOpen}
              onClose={() => setIsCreateModalOpen(false)}
            >
              <FoodForm onSubmit={handleCreate} />
            </Modal>
          </div>
        </div>
        <FoodList
          items={items}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
        {cursor && <Button onClick={handleLoadMore}>더 불러오기</Button>}
      </Layout>
    </LocaleProvider>
  );
}

export default App;
