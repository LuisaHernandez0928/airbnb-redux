import styles from "./index.module.css";
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

function Features() {
  return (
    <div className={styles.featuresContainer}>
      <TitleFilter text={"Describe las caracteristicas de tu espacio"} />
      <div className={styles.peopleContainerOpts}>
        <TitleFilter text={"Quienes pueden asistir?"} />
        <PeopleCounter
          peopleKind={"Adultos"}
          description={"Edad 13 anos o mas"}
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
      />

      <Services header={"Comodidades que ofreces"} />
      <AddPhotos header={"Add photos to know your space"} />
      <AddTitleDescription
        header={"Add the title and description of your airbnb"}
      />
      <PriceAvailability header={"Add Price in available dates"} />
      <OpcionesReserva header={"Configura el tipo de reserva"} />
    </div>
  );
}

export { Features };
