import { Title } from "../title";
import styles from "./index.module.css";

function Footer() {

  const buttonFilter = (airbnbs) => {
    return <button className={styles.showAirbnb}>Mostrar {airbnbs} lugares</button>;
  };

  return (
    <footer className={styles.footerContainer}>
      <button className={styles.firstButton}>
        <Title text={"Quitar todos"} cardFilter={true} />
      </button>
      {buttonFilter(634)}
    </footer>
  );
}

export { Footer };
