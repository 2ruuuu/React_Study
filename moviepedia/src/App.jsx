import {useEffect, useState} from "react";
import ReviewList from "./components/ReviewList";
import Modal from "./components/Modal";
import ReviewForm from "./components/ReviewForm";
import Button from "./components/Button";
import Layout from "./components/Layout";
import styles from "./App.module.css";
import useTranslate from "./hooks/useTranslate";
import axios from "./utils/axios";

const LIMIT = 10;

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const [isCreateReviewOpen, setIsCreateReviewOpen] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const t = useTranslate();

  const handleLoad = async (orderParam) => {
    const response = await axios.get("/film-reviews", {
      params: {
        order: orderParam,
        limit: LIMIT,
      },
    });
    const {reviews, paging} = response.data;
    setItems(reviews);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = async () => {
    const response = await axios.get("/film-reviews", {
      params: {
        order,
        offset: items.length,
        limit: LIMIT,
      },
    });
    const {reviews, paging} = response.data;
    setItems((prevItem) => [...prevItem, ...reviews]);
    setHasNext(paging.hasNext);
  };

  const handleCreate = async (data) => {
    const response = await axios.post("/film-reviews", data);
    const {review} = response.data;
    setItems((prev) => [review, ...prev]);
    setIsCreateReviewOpen(false);
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

  useEffect(() => {
    handleLoad(order);
  }, [order]);

  return (
    <Layout>
      <div className={styles.buttons}>
        <div>
          <Button
            className={styles.orderButton}
            variant={order === "createdAt" ? "primary" : "ghost"}
            onClick={() => setOrder("createdAt")}
          >
            {t("sort by latest")}
          </Button>
          <Button
            className={styles.orderButton}
            variant={order === "rating" ? "primary" : "ghost"}
            onClick={() => setOrder("rating")}
          >
            {t("sort by best")}
          </Button>
        </div>
        <Button
          className={styles.createButton}
          onClick={() => setIsCreateReviewOpen(true)}
        >
          {t("create button")}
        </Button>
        <Modal
          isOpen={isCreateReviewOpen}
          onClose={() => setIsCreateReviewOpen(false)}
        >
          <h2 className={styles.modalTitle}>{t("create review title")}</h2>
          <ReviewForm onSubmit={handleCreate} />
        </Modal>
      </div>
      <ReviewList
        items={items}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
      {hasNext && <Button onClick={handleLoadMore}>더 불러오기</Button>}
    </Layout>
  );
}

export default App;
