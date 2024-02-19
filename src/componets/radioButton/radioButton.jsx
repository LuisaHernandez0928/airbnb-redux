import { useSelector } from "react-redux";
import { getAccommodationType } from "../../reducer/airbnbsSlice";
import { TitleFilter } from "../titleFilter";
import { DescriptionFilter } from "../descriptionFilter";
import styles from "./index.module.css";
function RadioButton({ handleAlojamientoChanges, header }) {
  const buttonSelected = useSelector(getAccommodationType);

  const notifyButton = (e) => {
    handleAlojamientoChanges(e.target.innerText);
  };

  return (
    <div className={styles.layoutRadioButton}>
      <div className={styles.headerText}>
        <TitleFilter text={header} />
        <DescriptionFilter
          text={
            "Busca habitaciones, alojamientos enteros o cualquier tipo de espacio."
          }
        />
      </div>
      <div className={styles.radioButtonComponent}>
        <button
          className={
            buttonSelected === "Cualquier tipo"
              ? styles.buttonSelectedA
              : styles.buttonAlojamiento
          }
          onClick={(e) => notifyButton(e)}
        >
          Cualquier tipo
        </button>
        <button
          className={
            buttonSelected === "Habitacion"
              ? styles.buttonSelectedA
              : styles.buttonAlojamiento
          }
          onClick={(e) => notifyButton(e)}
        >
          Habitacion
        </button>
        <button
          className={
            buttonSelected === "Alojamiento entero"
              ? styles.buttonSelectedA
              : styles.buttonAlojamiento
          }
          onClick={(e) => notifyButton(e)}
        >
          Alojamiento entero
        </button>
      </div>
    </div>
  );
}

export { RadioButton };
