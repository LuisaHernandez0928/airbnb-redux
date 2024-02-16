import { useState } from "react";
import { SearchParameter } from "../../componets/searchParameter";
import { ModalSearchBar } from "../../componets/modalSearchBar";
import { Donde } from "../../componets/busquedaPorRegion";
import { DatePicker } from "../../componets/datePicker";
import { PeopleCounter } from "../../componets/peopleCounter";
import { TitleFilter } from "../../componets/titleFilter";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./index.module.css";

function HomeSearchBar() {
  const [filterSelected, setFilterSelected] = useState(0);

  const notifyFilterSelected = (identifier) => {
    setFilterSelected(identifier);
  };

  const filterBoxContent = (identifier) => {
    console.log(identifier);
    switch (identifier) {
      case 1:
        return <Donde />;
      case 2:
        return <DatePicker />;
      case 3:
        return <DatePicker />;
      case 4:
        return (
          <div className={styles.peopleContainerOpts}>
            <TitleFilter text={"Quienes pueden asistir?"} />
            <PeopleCounter
              peopleKind={"Adultos"}
              description={"Edad 13 anos o mas"}
            />
            <PeopleCounter
              peopleKind={"Bebes"}
              description={"Menos de 2 anos"}
            />
            <PeopleCounter
              peopleKind={"Mascotas"}
              description={"Mascotas de seguridad"}
            />
          </div>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className={styles.searchBar}>
      <div className={styles.parameterContainer}>
        <button id="1wedrty" onClick={() => notifyFilterSelected(1)}>
          <SearchParameter title={"Dónde"} subtitle={"Explora destinos"} />
        </button>
        <button id="1wefrty" onClick={() => notifyFilterSelected(2)}>
          <SearchParameter title={"Llegada"} subtitle={"Agrega fecha"} />
        </button>
        <button id="1wverty" onClick={() => notifyFilterSelected(3)}>
          <SearchParameter title={"Salida"} subtitle={"Agrega fecha"} />
        </button>
        <button id="1webrty" onClick={() => notifyFilterSelected(4)}>
          <SearchParameter title={"Quién"} subtitle={"¿Cuántos?"} />
        </button>
      </div>
      <button
        onClick={() => console.log("buscar")}
        className={styles.searchButton}
      >
        <div>
          <SearchIcon></SearchIcon>
        </div>
      </button>
      <ModalSearchBar
        modalContent={filterSelected}
        showParameterInfo={filterBoxContent}
      />
    </div>
  );
}

export { HomeSearchBar };
