import { useRouter } from "next/router";
import styles from "./Header.module.css";

export function Header({ children }) {
  const router = useRouter();
  return (
    <div className={styles.header}>
      <button className={styles.back} onClick={() => router.back()}>
        Back
      </button>

      {children}
    </div>
  );
}
