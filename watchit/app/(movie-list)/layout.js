import SearchForm from './components/SearchForm';
import styles from './layout.module.css';

export default function MovieListLayout({ children }) {
  return (
    <div>
      <SearchForm />
      <div className={styles.container}>{children}</div>
    </div>
  );
}
