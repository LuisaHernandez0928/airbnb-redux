import { useSelector, useDispatch } from "react-redux";
import {
  getAirbnbNumberUpdated,
  removeAllFilters,
} from "../../reducer/airbnbsSlice";
import { Title } from "../title";
import styles from "./index.module.css";

function Footer() {
  const dispatch = useDispatch();
  const updatedNumberOfAirbnbs = useSelector(getAirbnbNumberUpdated);

  const removeFilters = () => {
    dispatch(removeAllFilters());
  };

  const buttonFilter = (airbnbs) => {
    return (
      <button className={styles.showAirbnb}>Mostrar {airbnbs} lugares</button>
    );
  };

  return (
    <footer className={styles.footerContainer}>
      <button className={styles.firstButton} onClick={() => removeFilters()}>
        <Title text={"Quitar todos"} cardFilter={true} />
      </button>
      {buttonFilter(updatedNumberOfAirbnbs)}
    </footer>
  );
}

export { Footer };
