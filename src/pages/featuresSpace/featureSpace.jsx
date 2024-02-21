import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewAirbnb, getUpdatedAirbnbJSON } from "../../reducer/airbnbsSlice";
import { HabitacionesCamas } from "../../componets/habitacionesCamas";
import { Services } from "../../componets/services/services";
import { OpcionesReserva } from "../../componets/opcionesReserva/opcionesReserva";
import { PeopleCounter } from "../../componets/peopleCounter/peopleCounter";
import { AddPhotos } from "../../componets/addPhotos/addPhotos";
import { TitleFilter } from "../../componets/titleFilter";
import { CountrySelect } from "../../componets/countrySelect/countryComponent";
import { GoogleMaps } from "../../componets/googleMaps/googleMap";
import { AddTitleDescription } from "../../componets/addTitleDescription";
import { PriceAvailability } from "../../componets/priceAvailability/priceAvailability";
import styles from "./index.module.css";

function Features() {
  const dispatch = useDispatch();

  const [photos, setPhotos] = useState("Hola");
  const [title, setTitle] = useState("Hola");
  const [locationDescription, setLocationDescription] = useState("Hola");
  const [adults, setAdults] = useState(0);
  const [beds, setBeds] = useState("Hola");
  const [baths, setBaths] = useState("Hola");
  const [rooms, setRooms] = useState("Hola");
  const [bathKind, setBathKind] = useState("Hola");
  const [tipoAlojamiento, setTipoAlojamiento] = useState("Hola");
  const [tipoPropiedad, setTipoPropiedad] = useState("Hola");
  const [continent, setContinent] = useState("Hola");
  const [country, setCountry] = useState("Hola");
  const [city, setCity] = useState("Hola");
  const [state, setState] = useState("Hola");
  const [neighborhood, setNeighborhood] = useState("Hola");
  const [latitude, setLatitude] = useState("Hola");
  const [longitude, setLongitude] = useState("Hola");
  const [kindSpace, setKindSpace] = useState("Hola");

  const newAirbnb = {
    pics: photos,
    description: title,
    guestsFavorite: false,
    score: 0,
    numReviews: 0,
    beds: beds,
    rooms: rooms,
    peopleCapacity: adults,
    baths: baths,
    bathKind: bathKind,
    tipoAlojamiento: tipoAlojamiento,
    tipoPropiedad: tipoPropiedad,
    services: [],
    bookingOptions: [],
    location: {
      continent: continent,
      country: country,
      city: city,
      state: state,
      neighborhood: neighborhood,
      lat: latitude,
      long: longitude,
      description: locationDescription,
    },
    availability: [],
    kind: kindSpace,
  };

  const saveNewAirbnb = (newAirbnb) => {
    dispatch(addNewAirbnb(newAirbnb));
  };

  const notifyAdultsAmount = (value) => {
    setAdults(value);
  };

  const notifyHomeChanges = (rooms, beds, baths) => {
    setRooms(rooms);
    setBeds(beds);
    setBaths(baths);
  };
  //console.log(useSelector(getUpdatedAirbnbJSON));

  return (
    <div className={styles.featuresContainer}>
      <TitleFilter text={"Describe las caracteristicas de tu espacio"} />
      <div className={styles.peopleContainerOpts}>
        <TitleFilter text={"Quienes pueden asistir?"} />
        <PeopleCounter
          peopleKind={"Adultos"}
          description={"Edad 13 anos o mas"}
          notifyAdultsAmount={notifyAdultsAmount}
        />
        <PeopleCounter peopleKind={"Bebes"} description={"Menos de 2 anos"} />
        <PeopleCounter
          peopleKind={"Mascotas"}
          description={"Mascotas de seguridad"}
        />
      </div>

      <div className={styles.countryContainerOpts}>
        <TitleFilter
          text={"Ubica tu espacio: pais,  ciudad, estado, direccion"}
        />
        <CountrySelect />
        <GoogleMaps />
      </div>
      <HabitacionesCamas
        header={"Cuantas habitaciones, banos, camas ofreces?"}
        notifyHomeChanges={notifyHomeChanges}
      />

      <Services header={"Comodidades que ofreces"} />
      <AddPhotos header={"Add photos to know your space"} />
      <AddTitleDescription
        header={"Add the title and description of your airbnb"}
      />
      <PriceAvailability header={"Add Price in available dates"} />
      <OpcionesReserva header={"Configura el tipo de reserva"} />
      <div className={styles.saveContainer}>
        <button
          className={styles.saveAirbnb}
          onClick={() => saveNewAirbnb(newAirbnb)}
        >
          Save Airbnb
        </button>
      </div>
    </div>
  );
}

export { Features };
