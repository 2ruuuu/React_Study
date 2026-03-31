import styles from "./page.module.css";

const Search = async ({searchParams}) => {
  const {q} = await searchParams;
  return <div className={styles.title}>요요: {q}</div>;
};

export default Search;
