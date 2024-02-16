import { useState } from "react";
import { Subtitle } from "../subtitle";
import styles from "./index.module.css";

function Categories({ image, name, notifySelection, activate }) {
  const [selected, setSelected] = useState(false);

  const [colorSubtitle, setColorSubtitle] = useState(false);

  const notifyCategory = (e) => {
    notifySelection(name);
    console.log(e.target.innerText);
    setSelected(!selected);
    setColorSubtitle(!colorSubtitle);
  };

  return (
    <div
      className={
        activate === name ? styles.selectedStyle : styles.categoryContainer
      }
      onClick={(e) => notifyCategory(e)}
    >
      <img className={styles.image} src={image} alt={name} />
      <Subtitle text={name} typeColor={activate === name} />
    </div>
  );
}

export { Categories };
