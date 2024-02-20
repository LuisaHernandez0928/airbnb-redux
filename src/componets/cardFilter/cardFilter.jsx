import { useSelector } from "react-redux";
import {
  getFavoriteGuestTag,
  getTipoPropiedad,
} from "../../reducer/airbnbsSlice";
import styles from "./index.module.css";

function CardFilter({
  text,
  icon,
  description,
  width,
  height,
  handleFavoriteChanges,
  handlePropertyChanges,
  name,
}) {
  const cardSelectedGuestFavorite = useSelector(getFavoriteGuestTag);
  const cardProperty = useSelector(getTipoPropiedad);
  const casa = useSelector(getTipoPropiedad).casa;
  const casaHuespedes = useSelector(getTipoPropiedad).casaHuespedes;
  const hotel = useSelector(getTipoPropiedad).hotel;

  const notifyClick = (e) => {
    if (description) {
      handleFavoriteChanges(!cardSelectedGuestFavorite);
    }
    if (e.target.innerText === "Casa") {
      handlePropertyChanges(!casa, casaHuespedes, hotel);
    }
    if (e.target.innerText === "Casa de huespedes") {
      handlePropertyChanges(casa, !casaHuespedes, hotel);
    }
    if (e.target.innerText === "Hotel") {
      handlePropertyChanges(casa, casaHuespedes, !hotel);
    }
  };

  return (
    <button
      className={
        (description ? cardSelectedGuestFavorite : cardProperty[name])
          ? styles.selectedContainer
          : styles.cardContainer
      }
      style={{ width: width, heigh: height }}
      onClick={(e) => notifyClick(e)}
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
