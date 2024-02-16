import React, { useState, useEffect } from "react";
import { SearchParameter } from "../searchParameter";
import { ModalSearchBar } from "../modalSearchBar";
import { Donde } from "../dondeHeader";
import { DestinationFinder } from "../destinationFinder";
import styles from "./index.module.css";
import SearchIcon from "@mui/icons-material/Search";
import { DatePicker } from "../datePicker";

function Header({
  notifyParameters,
  recentSearches,
  shouldBeClosed,
  notifyModalOpened,
}) {
  const [selected, setSelected] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [location, setLocation] = useState("");
  const [llegada, setLlegada] = useState("Cualquiera");
  const [salida, setsalida] = useState("Cualquiera");
  const [quienes, setQuienes] = useState({});

  useEffect(() => {
    if (shouldBeClosed === true) setSelected(false);
  }, [shouldBeClosed]);

  const cities = [
    "New York",
    "Yorkshire",
    "York",
    "Washington",
    "Maine",
    "Nevada",
    "Central",
    "Colorado",
    "Cupertino",
    "Arizona",
    "Barbados",
    "Dallas",
    "Jersey",
    "Luisiana",
    "Colombia",
    "La habana",
    "Haiti",
    "huila",
  ];

  const reportParameters = () => {
    let parameters = {
      location: location,
      llegada: llegada,
      salida: salida,
      quienes: {
        adultos: quienes.adults,
        niños: quienes.childs,
        bebes: quienes.babies,
        mascotas: quienes.pets,
      },
    };
    parameters?.location ? notifyParameters(parameters) : console.log("no");
  };

  const notifyClick = (identificador) => {
    setSelected(true);
    notifyModalOpened();
    setModalContent(identificador);
  };

  const notifyLocation = (locationSearched) => {
    setLocation(locationSearched);
  };

  const viewParameter = (modalContent) => {
    if (modalContent === "Dónde" && location === "") {
      return <Donde data={recentSearches} />;
    } else if (modalContent === "Llegada") {
      console.log(modalContent);
      return (
        <div className={styles.llegadaParam}>
          <DatePicker />
        </div>
      );
    } else if (modalContent === "Salida") {
      return <div className={styles.salidaParam}>{modalContent}</div>;
    } else if (modalContent === "Quién") {
      return <div className={styles.quienParam}>{modalContent}</div>;
    } else if (!(location === " ")) {
      return (
        <DestinationFinder
          destinationOptions={cities}
          destinationSearched={location}
          notifyLocation={notifyLocation}
        />
      );
    }
  };

  const handleSearch = () => {
    reportParameters();
  };

  return (
    <div className={styles.searchBar} onClick={(e) => e.stopPropagation()}>
      <div className={styles.parameterContainer}>
        <SearchParameter
          title={"Dónde"}
          subtitle={"Explora destinos"}
          itemSelected={notifyClick}
          notifyLocation={notifyLocation}
          isInput
        />
        <SearchParameter
          title={"Llegada"}
          subtitle={"Agrega fecha"}
          itemSelected={notifyClick}
        />
        <SearchParameter
          title={"Salida"}
          subtitle={"Agrega fecha"}
          itemSelected={notifyClick}
        />
        <SearchParameter
          title={"Quién"}
          subtitle={"¿Cuántos?"}
          itemSelected={notifyClick}
        />
      </div>
      <button onClick={() => handleSearch()} className={styles.searchButton}>
        <div>
          <SearchIcon></SearchIcon>
        </div>
      </button>
      {selected ? (
        <ModalSearchBar
          typeParameter={modalContent}
          showParameterInfo={viewParameter}
          destinationSearch={location}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export { Header };
