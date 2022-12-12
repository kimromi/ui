import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.css';

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Link href='/' className={styles.logo}>
          <Image src='/logo.png' alt='logo' width={32} height={32} />
        </Link>
        kimromi
      </div>
    </div>
  </header>
);
