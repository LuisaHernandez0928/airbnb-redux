import styles from "./index.module.css";

function DescriptionFilter({ text }) {
  return <span className={styles.descriptioStyle}>{text}</span>;
}

export {DescriptionFilter}