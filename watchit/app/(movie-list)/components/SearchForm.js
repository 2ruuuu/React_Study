import styles from "./SearchForm.module.css";

const SearchForm = () => {
  return (
    <form action="/search" className={styles.container}>
      <input
        name="q"
        className={styles.searchInput}
        placeholder="영화를 검색해보세요."
        type="text"
      />
      <button className={styles.searchButton} type="submit">
        검색
      </button>
    </form>
  );
};

export default SearchForm;
