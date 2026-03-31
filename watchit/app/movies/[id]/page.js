import styles from "./page.module.css";

const Movie = async ({params}) => {
  const {id} = await params;
  return <h1 className={styles.title}>영화 상세 페이지: {id}</h1>;
};

export default Movie;
