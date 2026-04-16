import Link from 'next/link';
import logo from '@/assets/logo.svg';
import settingWhite from '@/assets/setting-white.svg';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <img
            src={logo.src}
            alt="Watchit"
            width={151}
            height={28}
            className={styles.logoImage}
          />
        </Link>
        <Link href="/settings">
          <img
            src={settingWhite.src}
            alt="Settings"
            width={20}
            height={20}
            className={styles.settingImage}
          />
        </Link>
      </div>
    </header>
  );
}
