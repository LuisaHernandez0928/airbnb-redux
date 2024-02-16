import { useState } from "react";
import styles from "./index.module.css";

function CardFilter({ text, icon, description, notifyClick, width, height }) {
  const [selectedCards, setSelectedCards] = useState(false);

  const selectedCard = (e) => {
    notifyClick(e);
    setSelectedCards(!selectedCards);
  };
  return (
    <button
      className={
        selectedCards ? styles.selectedContainer : styles.cardContainer
      }
      style={{ width: width, heigh: height }}
      onClick={(e) => selectedCard(e)}
    >
      <span>{icon}</span>
      <span className={styles.textContainer}>
        {text}
        <span className={styles.descriptionContainer}>{description}</span>
      </span>
    </button>
  );
}

export { CardFilter };
