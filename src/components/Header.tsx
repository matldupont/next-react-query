import Link from "next/link";
import styles from "./Header.module.css";

export function Header({ children }) {
  return (
    <div className={styles.header}>
      <Link href="/">
        <a className={styles.back}>Back</a>
      </Link>
      {children}
    </div>
  );
}
