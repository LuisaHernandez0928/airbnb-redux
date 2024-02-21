import { useState } from "react";
import { TitleFilter } from "../titleFilter";
import styles from "./index.module.css";

function PriceAvailability({ header }) {
  const [saveCheckIn, setSaveCheckIn] = useState([]);
  const [saveCheckOut, setSaveCheckOut] = useState([]);
  const [temporaryImages, setTemporaryImages] = useState("");

  const uploadText = (e) => {
    console.log(e.target.value);
    setTemporaryImages(e.target.value);
  };

  const saveTypedText = () => {
    setSaveCheckIn([...saveCheckIn, temporaryImages]);
    setTemporaryImages("");
    console.log(saveCheckIn);
  };

  return (
    <div className={styles.uploadContainer}>
      <TitleFilter text={header} />
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Check In : YYYY-MM-DD"
          onChange={(e) => uploadText(e)}
          value={temporaryImages}
        />
        <input
          type="text"
          placeholder="Check Out: YYYY-MM-DD"
          onChange={(e) => uploadText(e)}
          value={temporaryImages}
        />
        <input
          type="number"
          placeholder="Price per night US$"
          onChange={(e) => uploadText(e)}
          value={temporaryImages}
        />
        <button className={styles.submitButton} onClick={() => saveTypedText()}>
          Submit
        </button>
        <div className={styles.imagesContainer}>
          <button>
            <svg
              viewBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "20px",
                width: "20px",
                fill: "currentcolor",
              }}
            >
              <path d="m6.75.75v4.5h4.5v1.5h-4.5v4.5h-1.5v-4.5h-4.5v-1.5h4.5v-4.5z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export { PriceAvailability };
