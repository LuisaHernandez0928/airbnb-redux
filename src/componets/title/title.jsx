import styles from "./index.module.css";

function Title({text, cardFilter}) {
  return <div className={cardFilter ? styles.titleFontCardFilter: styles.titleFont }>{text}</div>;
}

export { Title };
