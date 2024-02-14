import styles from "./index.module.css";
import { Title } from "../title";
import { RegionSearch } from "../regionSearch";

function Donde({ data }) {
  return (
    <div className={styles.dondeParam}>
      <div className={styles.busquedaRegion}>
        <Title text={"Busqueda por region"} />
        <div className={styles.cardsGrid}>
          <RegionSearch location={"Busqueda flexible"} />
          <RegionSearch location={"Colombia"} />
          <RegionSearch location={"Europa"} />
          <RegionSearch location={"Mexico"} />
          <RegionSearch location={"EstadosUnidos"} />
          <RegionSearch location={"España"} />
        </div>
      </div>
    </div>
  );
}

export { Donde };
