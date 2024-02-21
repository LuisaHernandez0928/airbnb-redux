import { useState } from "react";
import styles from "./index.module.css";

function AddPhotos() {
  const [saveImages, setSaveImage] = useState([]);
  const [temporaryImages, setTemporaryImages] = useState("");

  const uploadImages = (e) => {
    console.log(e.target.value);
    setTemporaryImages(e.target.value);
  };

  const saveUploadedImages = () => {
    setSaveImage([...saveImages, temporaryImages]);
    setTemporaryImages("");
    console.log(saveImages);
  };

  const showUploadedImages = () => {
    return saveImages.map((image) => (
      <div className={styles.imagesContainer}>
        <img src={image} alt="Upload photos" />
      </div>
    ));
  };

  return (
    <div className={styles.uploadContainer}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Upload photos"
          onChange={(e) => uploadImages(e)}
          value={temporaryImages}
        />
        <button
          className={styles.submitButton}
          onClick={() => saveUploadedImages()}
        >
          Submit
        </button>
      </div>
      <div className={styles.imagesGallery}>
        {showUploadedImages()}
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
                height: "40px",
                width: "40px",
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

export { AddPhotos };
