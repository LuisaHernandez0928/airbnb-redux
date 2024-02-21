import { useState } from "react";
import { Subtitle } from "../subtitle";
import { Title } from "../title";
import styles from "./index.module.css";

function PeopleCounter({ peopleKind, description, notifyAdultsAmount }) {
  const [peopleAmount, setPeopleAmount] = useState(0);
  const decreaseAmount = () => {
    setPeopleAmount((prevAmount) => prevAmount - 1);
    notifyAmount((prevAmount) => prevAmount - 1);
  };

  const notifyAmount = (value) => {
    if (peopleKind === "Adultos") notifyAdultsAmount(value);
  };
  const increaseAmount = () => {
    setPeopleAmount((prevAmount) => prevAmount + 1);
    notifyAmount((prevAmount) => prevAmount + 1);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.textContainer}>
        <Title text={peopleKind} cardFilter={true} />
        <Subtitle text={description} typeColor={false} />
      </div>
      <div className={styles.counterContainer}>
        <button onClick={() => decreaseAmount()}>
          <svg
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: "12px",
              width: "12px",
              fill: "currentcolor",
            }}
          >
            <path d="m.75 6.75h10.5v-1.5h-10.5z"></path>
          </svg>
        </button>
        <div>{peopleAmount}</div>
        <button onClick={() => increaseAmount()}>
          <svg
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              height: "12px",
              width: "12px",
              fill: "currentcolor",
            }}
          >
            <path d="m6.75.75v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5h4.5v-4.5z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export { PeopleCounter };
