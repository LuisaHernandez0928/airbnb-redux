import styles from "./index.module.css";

function TitleFilter({ text }) {
  return <span className={styles.titleStyle}>{text}</span>;
}

export { TitleFilter };
