import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ModalSearchBar } from "../modalSearchBar";
import { Title } from "../title";
import { RadioButton } from "../radioButton/radioButton";
import { MemoizedRangePrices } from "../rangePricesFilter/rangePricesFilter";
import { HabitacionesCamas } from "../habitacionesCamas";
import { Prizes } from "../alojamientosDePrimera";
import { Properties } from "../propertiesType";
import { Services } from "../services/services";
import { OpcionesReserva } from "../opcionesReserva/opcionesReserva";
import { Accesibility } from "../accesibility";
import { Languages } from "../languages/languages";
import { Footer } from "../footer/footer";
import { Header } from "../filterHeader/header";
import {
  changeTypeAccomodationFilter,
  changeBedsRoomsBathsAmountFilter,
  toggleSelectedServiceFilter,
  getFilteredAirbnbs,
  changePriceFilter,
  changeFavoriteGuestTag,
  changePropertyFilter,
  toggleBookingOptsFilter,
} from "../../reducer/airbnbsSlice";

import styles from "./index.module.css";
import TuneIcon from "@mui/icons-material/Tune";

function Filters() {
  const [showFilters, setShowFilters] = useState(false);
  const dispatch = useDispatch();

  const data = useSelector((state) => state.airbnbs.airbnbs);

  const filteredAirbnbs = useSelector(getFilteredAirbnbs);
  console.log(filteredAirbnbs);

  const handleAlojamientoChanges = (value) => {
    dispatch(changeTypeAccomodationFilter(value));
  };

  const handlePriceChanges = (minValue, maxValue) => {
    const prices = {
      min: minValue,
      max: maxValue,
    };
    dispatch(changePriceFilter(prices));
  };

  const handleHomeChanges = (rooms, beds, baths) => {
    const home = {
      rooms: rooms,
      beds: beds,
      baths: baths,
    };
    dispatch(changeBedsRoomsBathsAmountFilter(home));
  };
  const handleFavoriteChanges = (value) => {
    dispatch(changeFavoriteGuestTag(value));
  };
  const handlePropertyChanges = (casa, casaHuespedes, hotel) => {
    const property = [casa, casaHuespedes, hotel];

    dispatch(changePropertyFilter(property));
  };

  const handleServicesChanges = (value) => {
    dispatch(toggleSelectedServiceFilter(value));
  };

  const handleBookingChanges = (value) => {
    dispatch(toggleBookingOptsFilter(value));
  };

  const showInfo = (content) => {
    return <>{content}</>;
  };

  const openFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleClickOutside = () => {
    setShowFilters(false);
  };

  const filters = (
    <div className={styles.filterLayout}>
      <div style={{ display: "contents" }}>
        <div className={styles.verticalEnds}>
          <Header />
        </div>
        <div className={styles.filterComponents}>
          <RadioButton
            handleAlojamientoChanges={handleAlojamientoChanges}
            header={"Tipo de alojamiento"}
          />
          <MemoizedRangePrices
            data={data}
            handlePriceChanges={handlePriceChanges}
            header={"Rango precios"}
          />
          <HabitacionesCamas
            handleHomeChanges={handleHomeChanges}
            header={"Habitaciones y camas"}
          />
          <Prizes
            handleFavoriteChanges={handleFavoriteChanges}
            header={"Alojamientos de primera"}
          />
          <Properties
            handlePropertyChanges={handlePropertyChanges}
            header={"Tipo de propiedad"}
          />
          <Services
            handleServicesChanges={handleServicesChanges}
            header={"Servicios"}
          />
          <OpcionesReserva
            handleBookingChanges={handleBookingChanges}
            header={"Opciones de reserva"}
          />
          <Accesibility header={"Prestaciones de accesibilidad"} />
          <Languages header={"Idioma del anfitrion"} />
        </div>
        <div className={styles.verticalEnds}>
          <Footer />
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.filtersContainer}>
      <button onClick={openFilters}>
        <TuneIcon />
        <Title text={"Filtros"} />
      </button>
      {showFilters && (
        <div
          onClick={() => handleClickOutside()}
          className={styles.aboveScreen}
        >
          <ModalSearchBar
            modalContent={filters}
            showParameterInfo={showInfo}
            destinationSearch={"filter"}
          />
        </div>
      )}
    </div>
  );
}

export { Filters };
