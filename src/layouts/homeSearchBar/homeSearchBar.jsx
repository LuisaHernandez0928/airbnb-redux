import { SearchParameter } from "../../componets/searchParameter";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./index.module.css";
import { Donde } from "../../componets/busquedaPorRegion";
import { useState } from "react";
function HomeSearchBar() {
  const [filterSelected, setFilterSelected] = useState(false);

  const notifyFilterSelected = (identifier) => {
    setFilterSelected(identifier);
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
      {filterSelected === true ? <Donde /> : <></>}
    </div>
  );
}

export { HomeSearchBar };
