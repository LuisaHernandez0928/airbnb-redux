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

import styles from "./index.module.css";
import TuneIcon from "@mui/icons-material/Tune";

function Filters() {
  const [showFilters, setShowFilters] = useState(false);

  const [userFilters, setUserFilters] = useState({
    tipoAlojamiento: "Cualquier tipo",
    priceMin: 20,
    priceMax: 416,
    rooms: "Cualquiera",
    beds: "Cualquiera",
    baths: "Cualquiera",
    guestsFavorite: false,
    tipoPropiedad: [],
    services: [],
    bookingOptions: [],
  });

  const data = useSelector((state) => state.airbnbs.value);
  console.log(data);
  const handleAlojamientoChanges = (value) => {
    setUserFilters((prevFilters) => ({
      ...prevFilters,
      tipoAlojamiento: value,
    }));
  };

  const handlePriceChanges = (minValue, maxValue) => {
    setUserFilters({
      ...userFilters,
      priceMin: minValue,
      priceMax: maxValue,
    });
  };

  const handleHomeChanges = (rooms, beds, baths) => {
    setUserFilters({
      ...userFilters,
      rooms: rooms,
      beds: beds,
      baths: baths,
    });
  };
  const handleFavoriteChanges = (value) => {
    setUserFilters({
      ...userFilters,
      guestsFavorite: value,
    });
  };
  const handlePropertyChanges = (casa, casaHuespedes, hotel) => {
    setUserFilters({
      ...userFilters,
      tipoPropiedad: [casa, casaHuespedes, hotel],
    });
  };

  const handleServicesChanges = (value) => {
    setUserFilters({
      ...userFilters,
      services: value,
    });
  };
  const handleBookingChanges = (value) => {
    setUserFilters({
      ...userFilters,
      bookingOptions: value,
    });
  };

  const showInfo = (content) => {
    return <div>{content}</div>;
  };

  const openFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleClickOutside = () => {
    setShowFilters(false);
  };

  const filters = (
    <div className={styles.filterLayout}>
      <Header />
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
      <Footer />
    </div>
  );

  const accommodationTypeFilter = (airbnbType, typeSelected) => {
    if (
      typeSelected.tipoAlojamiento === "Cualquier tipo" ||
      typeSelected.tipoAlojamiento === airbnbType.tipoAlojamiento
    ) {
      return true;
    } else {
      return false;
    }
  };

  const getAirbnbPrices = (data) => {
    const airbnbPrice = [];
    const airbnbAvailability = data.availability;
    for (const availabilityKey in airbnbAvailability) {
      airbnbPrice.push(airbnbAvailability[availabilityKey].price);
    }
    return airbnbPrice;
  };

  const priceRangeFilter = (
    airbnb,
    priceMinSelected,
    priceMaxSelected,
    pricesEachAirbnb
  ) => {
    let pricesArray = pricesEachAirbnb(airbnb);
    let priceMatch = pricesArray.find(
      (elem) => elem >= priceMinSelected && elem <= priceMaxSelected
    );

    if (priceMatch) {
      return true;
    } else {
      return false;
    }
  };

  const roomsQuantityFilter = (airbnb, quantitySelected) => {
    if (
      quantitySelected.rooms === "Cualquiera" ||
      quantitySelected.rooms <= airbnb.rooms
    ) {
      return true;
    } else {
      return false;
    }
  };

  const bedsQuantityFilter = (airbnb, quantitySelected) => {
    if (
      quantitySelected.beds === "Cualquiera" ||
      quantitySelected.beds <= airbnb.beds
    ) {
      return true;
    } else {
      return false;
    }
  };

  const bathsQuantityFilter = (airbnb, quantitySelected) => {
    if (
      quantitySelected.baths === "Cualquiera" ||
      quantitySelected.baths <= airbnb.baths
    ) {
      return true;
    } else {
      return false;
    }
  };

  const favoritesFilter = (airbnb, favoriteSelected) => {
    if (favoriteSelected.guestsFavorite && airbnb.guestsFavorite) {
      return true;
    } else if (!favoriteSelected.guestsFavorite) {
      return true;
    } else {
      return false;
    }
  };

  const propertyTypeFilter = (airbnb, propertiesSelected) => {
    if (
      (propertiesSelected.tipoPropiedad[0] &&
        propertiesSelected.tipoPropiedad[1] &&
        propertiesSelected.tipoPropiedad[2]) ||
      (!propertiesSelected.tipoPropiedad[0] &&
        !propertiesSelected.tipoPropiedad[1] &&
        !propertiesSelected.tipoPropiedad[2])
    ) {
      return true;
    } else if (
      propertiesSelected.tipoPropiedad[0] === true &&
      propertiesSelected.tipoPropiedad[1] === true &&
      (airbnb.tipoPropiedad === "Casa" ||
        airbnb.tipoPropiedad === "Casa de huespedes")
    ) {
      return true;
    } else if (
      propertiesSelected.tipoPropiedad[0] === true &&
      propertiesSelected.tipoPropiedad[2] === true &&
      (airbnb.tipoPropiedad === "Casa" || airbnb.tipoPropiedad === "Hotel")
    ) {
      return true;
    } else if (
      propertiesSelected.tipoPropiedad[1] === true &&
      propertiesSelected.tipoPropiedad[2] === true &&
      (airbnb.tipoPropiedad === "Casa de huespedes" ||
        airbnb.tipoPropiedad === "Hotel")
    ) {
      return true;
    } else if (
      propertiesSelected.tipoPropiedad[0] === true &&
      airbnb.tipoPropiedad === "Casa"
    ) {
      return true;
    } else if (
      propertiesSelected.tipoPropiedad[1] === true &&
      airbnb.tipoPropiedad === "Casa de huespedes"
    ) {
      return true;
    } else if (
      propertiesSelected.tipoPropiedad[2] === true &&
      airbnb.tipoPropiedad === "Hotel"
    ) {
      return true;
    }
  };

  const getAirbnbServices = (data) => {
    const airbnbServices = [];
    const airbnbAvailability = data.services;
    for (const availabilityKey in airbnbAvailability) {
      airbnbServices.push(airbnbAvailability[availabilityKey].name);
    }
    return airbnbServices;
  };

  const servicesFilter = (airbnb, servicesSelected, servicesEachAirbnb) => {
    let servicesArray = servicesEachAirbnb(airbnb);
    let selected = servicesSelected.services;
    let intersection = servicesArray.filter((element) =>
      selected.includes(element)
    );

    if (intersection.length === selected.length) {
      return true;
    } else {
      return false;
    }
  };

  const getBookingOptions = (data) => {
    const bookingOptions = [];
    const airbnbAvailability = data.bookingOptions;
    for (const availabilityKey in airbnbAvailability) {
      bookingOptions.push(airbnbAvailability[availabilityKey].name);
    }
    return bookingOptions;
  };

  const conversionBookingOptions = (data) => {
    if (data === "Reserva inmediata") return (data = 0);
    if (data === "Autonomous checking") return (data = 1);
    if (data === "Pets") return (data = 2);
  };
  const bookingOptionsFilter = (airbnb, optionsSelected, optionsEachAirbnb) => {
    let bookingOptionsArray = optionsEachAirbnb(airbnb);
    let selected = optionsSelected.bookingOptions;

    let convertedArray = bookingOptionsArray.map((option) =>
      conversionBookingOptions(option)
    );
    let intersection = convertedArray.filter((element) =>
      selected.includes(element)
    );

    if (intersection.length === selected.length) {
      return true;
    } else if (selected.length === 0) {
      return true;
    } else {
      return false;
    }
  };
  console.log(
    data.filter(
      (airbnb) =>
        priceRangeFilter(
          airbnb,
          userFilters.priceMin,
          userFilters.priceMax,
          getAirbnbPrices
        ) &&
        accommodationTypeFilter(airbnb, userFilters) &&
        roomsQuantityFilter(airbnb, userFilters) &&
        bedsQuantityFilter(airbnb, userFilters) &&
        bathsQuantityFilter(airbnb, userFilters) &&
        favoritesFilter(airbnb, userFilters) &&
        propertyTypeFilter(airbnb, userFilters) &&
        servicesFilter(airbnb, userFilters, getAirbnbServices) &&
        bookingOptionsFilter(airbnb, userFilters, getBookingOptions)
    )
  );
  /*<button onClick={openFilters}>
        <TuneIcon />
        <Title text={"Filtros"} />
      </button>
      {showFilters && (
        <div
          onClick={() => handleClickOutside()}
          className={styles.aboveScreen}
        >
          <ModalSearchBar
            typeParameter={filters}
            showParameterInfo={showInfo}
            destinationSearch={"filter"}
          />
        </div>
      )}*/

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
