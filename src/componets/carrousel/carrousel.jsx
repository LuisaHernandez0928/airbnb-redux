import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const Paginator = ({ totalItems, activeIndex }) => {
    const [left, setLeft] = useState(0);

    useEffect(() => {
      if (totalItems < 6) return;
      let marginLeft = 0;
      if (activeIndex <= 2) {
        marginLeft = 0;
      } else if (totalItems - activeIndex <= 3) {
        marginLeft = 10 * (totalItems - 5);
      } else {
        marginLeft = 10 * (activeIndex - 2);
      }
      setLeft(marginLeft);
    }, [activeIndex, totalItems]);

    const renderCircle = (position) => {
      const isActive = position === activeIndex;
      return (
        <div key={position} className={styles.circleContainer}>
          <div
            className={
              isActive
                ? styles["circle"] + " " + styles["circleActive"]
                : styles["circle"]
            }
          />
        </div>
      );
    };

    const renderCircles = () => {
      const circles = [];
      for (let i = 0; i < totalItems; i++) {
        circles.push(renderCircle(i));
      }
      return circles;
    };

    return (
      <div className={styles.paginator}>
        <div
          style={{
            width: totalItems * 10 + "px",
            marginLeft: -left + "px",
            display: "flex",
          }}
        >
          {renderCircles()}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.carrouselAndPaginator}>
      <div className={styles.carrouselContainer}>
        <div className={styles.buttonsRow}>
          <button onClick={() => prevImage()}>
            <div className={styles.buttonArrows}>
              <ArrowBackIosIcon sx={{ fontSize: 12 }} />
            </div>
          </button>
          <button onClick={() => nextImage()}>
            <div className={styles.buttonArrows}>
              <ArrowForwardIosIcon sx={{ fontSize: 12 }} />
            </div>
          </button>
        </div>
        <img style={{objectFit: 'cover'}} src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
      </div>
      <Paginator totalItems={images.length} activeIndex={currentImage} />
    </div>
  );
}

export { Carousel };
