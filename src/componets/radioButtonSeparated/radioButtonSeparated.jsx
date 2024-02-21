import { DescriptionFilter } from "../descriptionFilter";
import styles from "./index.module.css";

function RadioButtonSeparated({ subtitle, notifyRoomChanged, buttonSelected }) {
  const notifyButton = (e) => {
    notifyRoomChanged(subtitle, e.target.innerText);
  };

  return (
    <div className={styles.container}>
      <DescriptionFilter text={subtitle} />
      <div className={styles.radioButtonContainer}>
        <button
          className={
            buttonSelected === "Cualquiera"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          Cualquiera
        </button>

        <button
          className={
            buttonSelected === "1"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          1
        </button>

        <button
          className={
            buttonSelected === "2"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          2
        </button>

        <button
          className={
            buttonSelected === "3"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          3
        </button>

        <button
          className={
            buttonSelected === "4"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          4
        </button>

        <button
          className={
            buttonSelected === "5"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          5
        </button>

        <button
          className={
            buttonSelected === "6"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          6
        </button>

        <button
          className={
            buttonSelected === "7"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          7
        </button>

        <button
          className={
            buttonSelected === "8+"
              ? styles.buttonSelectedA
              : styles.numericOption
          }
          onClick={(e) => notifyButton(e)}
        >
          8+
        </button>
      </div>
    </div>
  );
}

export { RadioButtonSeparated };
