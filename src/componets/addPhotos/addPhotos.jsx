import { useState } from "react";
import styles from "./index.module.css";

function AddPhotos() {
  const [saveImages, setSaveImage] = useState([]);
  let temporaryImages = "";

  const uploadImages = (e) => {
    console.log(e.target.value);
    temporaryImages = e.target.value;
  };

  const saveUploadedImages = () => {
    setSaveImage([...saveImages, temporaryImages]);
    console.log(saveImages);
  };

  const showUploadedImages = () => {
    return saveImages.map((image) => (
      <img src={image} alt="Upload photos" className={styles.uploadImages} />
    ));
  };

  return (
    <div className={styles.uploadContainer}>
      <input
        type="text"
        placeholder="Upload photos"
        onChange={(e) => uploadImages(e)}
      />
      <button onClick={() => saveUploadedImages()}>Submit</button>
      <div>{showUploadedImages()}</div>
    </div>
  );
}

export { AddPhotos };
