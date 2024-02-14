import styles from "./index.module.css";
import { Subtitle } from "../subtitle";

import miimagenbonita from "./mapaMundi.png";

function RegionSearch({ location }) {
  return (
    <div className={styles.cardRegion}>
      <button className={styles.mapaContainer}>
        <img className={styles.mapaRegion} src={miimagenbonita} alt="mapa" />
      </button>
      <Subtitle className={styles.textCard} text={location} />
    </div>
  );
}

export { RegionSearch };
