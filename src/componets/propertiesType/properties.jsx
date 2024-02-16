import { useState } from "react";
import { CardFilter } from "../cardFilter";
import { Title } from "../title";
import { TitleFilter } from "../titleFilter";
import styles from "./index.module.css";

function Properties({ handlePropertyChanges,header }) {
  const [casa, setCasa] = useState(false);
  const [casaHuespedes, setCasaHuespedes] = useState(false);
  const [hotel, setHotel] = useState(false);

  const notifyClick = (e) => {
    if (e.target.innerText === "Casa") {
      setCasa(!casa);
      handlePropertyChanges(!casa, casaHuespedes, hotel);
    }
    if (e.target.innerText === "Casa de huespedes") {
      setCasaHuespedes(!casaHuespedes);
      handlePropertyChanges(casa, !casaHuespedes, hotel);
    }
    if (e.target.innerText === "Hotel") {
      setHotel(!hotel);
      handlePropertyChanges(casa, casaHuespedes, !hotel);
    }
  };

  return (
    <div className={styles.propertiesContainer}>
      <TitleFilter text={header} />
      <div className={styles.propertyCardsRow}>
        <CardFilter
          text={<Title text={"Casa"} cardFilter={true} />}
          icon={
            <img
              style={{ width: "32px", height: "32px" }}
              src="https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg"
              alt="Casa"
            />
          }
          notifyClick={notifyClick}
          width={"166px"}
          height={"124px"}
        />
        <CardFilter
          text={<Title text={"Casa de huespedes"} cardFilter={true} />}
          icon={
            <img
              style={{ width: "32px", height: "32px" }}
              src="https://a0.muscache.com/pictures/6f261426-2e47-4c91-8b1a-7a847da2b21b.jpg"
              alt="Casa de huespedes"
            />
          }
          notifyClick={notifyClick}
          width={"166px"}
          height={"124px"}
        />
        <CardFilter
          text={<Title text={"Hotel"} cardFilter={true} />}
          icon={
            <img
              style={{ width: "32px", height: "32px" }}
              src="https://a0.muscache.com/pictures/64b27fed-56a1-4f03-950a-d8da08efb428.jpg"
              alt=""
            />
          }
          notifyClick={notifyClick}
          width={"166px"}
          height={"124px"}
        />
      </div>
    </div>
  );
}

export { Properties };
