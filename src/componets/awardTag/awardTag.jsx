import { Title } from "../title";
import styles from "./index.module.css";

function AwardTag({ typeAward }) {
  return (
    <button className={typeAward ? styles.awardContainer : styles.noAwarded}>
      <Title text={typeAward && "Favorito entre huespedes"} />
    </button>
  );
}

export { AwardTag };
