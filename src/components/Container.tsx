import styles from "./Container.module.css";

export function ListContainer({ children }) {
  return <div className={styles.container}>{children}</div>;
}
