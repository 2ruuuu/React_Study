import Link from "next/link";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">홈</Link>
      <Link href="/settings">설정</Link>
    </header>
  );
};

export default Header;
