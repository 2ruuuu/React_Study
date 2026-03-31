import Link from "next/link";
import Image from "next/image";
import logoImg from "@/assets/logo.svg";
import settingImg from "@/assets/setting.svg";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.inner}>
      <div className={styles.container}>
        <Link href="/">
          <Image src={logoImg} alt="로고" />
        </Link>
        <Link href="/settings">
          <Image src={settingImg} alt="설정" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
