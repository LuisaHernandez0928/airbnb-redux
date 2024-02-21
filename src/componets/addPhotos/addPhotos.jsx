import styles from "./index.module.css";

function AddPhotos() {
  const saveImages = [];

  const uploadImages = (e) => {
    saveImages.push(e.target.value);
  };

  const showUploadedImages = () => {
    saveImages.map((image) => (
      <img src={image} alt="Upload photos" className={styles.uploadImages} />
    ));
  };

  return (
    <div className={styles.uploadContainer}>
      <input type="text" placeholder="Upload photos" />
      <button onClick={(e) => uploadImages(e)}>Submit</button>
      <div className={styles.imagesContainer}>{showUploadedImages}</div>
    </div>
  );
}

export { AddPhotos };
