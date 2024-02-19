import { useSelector } from "react-redux";
import { getAirbnbNumberUpdated } from "../../reducer/airbnbsSlice";
import { Title } from "../title";
import styles from "./index.module.css";

function Footer() {
  const updatedNumberOfAirbnbs = useSelector(getAirbnbNumberUpdated);

  const buttonFilter = (airbnbs) => {
    return (
      <button className={styles.showAirbnb}>Mostrar {airbnbs} lugares</button>
    );
  };

  return (
    <footer className={styles.footerContainer}>
      <button className={styles.firstButton}>
        <Title text={"Quitar todos"} cardFilter={true} />
      </button>
      {buttonFilter(updatedNumberOfAirbnbs)}
    </footer>
  );
}

export { Footer };
