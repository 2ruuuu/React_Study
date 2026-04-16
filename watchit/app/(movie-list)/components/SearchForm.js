import styles from './SearchForm.module.css';

export default function SearchForm() {
  return (
    <form action="/search">
      <input
        name="q"
        type="text"
        placeholder="영화를 검색해보세요."
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        검색
      </button>
    </form>
  );
}
