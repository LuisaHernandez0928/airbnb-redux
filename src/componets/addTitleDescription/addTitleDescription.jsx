import { useState } from "react";
import { TitleFilter } from "../titleFilter";
import styles from "./index.module.css";

function AddTitleDescription({ header }) {
  const [saveText, setSaveText] = useState([]);
  const [temporaryImages, setTemporaryImages] = useState("");

  const uploadText = (e) => {
    console.log(e.target.value);
    setTemporaryImages(e.target.value);
  };

  const saveTypedText = () => {
    setSaveText([...saveText, temporaryImages]);
    setTemporaryImages("");
    console.log(saveText);
  };

  return (
    <div className={styles.uploadContainer}>
      <TitleFilter text={header} />
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type the title"
          onChange={(e) => uploadText(e)}
          value={temporaryImages}
        />
        <button className={styles.submitButton} onClick={() => saveTypedText()}>
          Submit
        </button>
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Type the description"
          onChange={(e) => uploadText(e)}
          value={temporaryImages}
        />
        <button className={styles.submitButton} onClick={() => saveTypedText()}>
          Submit
        </button>
      </div>
    </div>
  );
}

export { AddTitleDescription };
