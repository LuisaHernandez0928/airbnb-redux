import { Toggle } from "../toggle";
import { TitleFilter } from "../titleFilter";
import styles from "./index.module.css";

function OpcionesReserva({ handleBookingChanges, header }) {
  const bookingTitle = [
    "Reserva inmediata",
    "Llegada autonoma",
    "Se permiten mascotas",
  ];
  const bookingDescription = [
    "Anuncios que puedes reservar sin esperar la aprovación del anfitrión",
    "Fácil acceso a la propiedad una vez que llegues",
    "¿Traes a un animal de servicio?",
  ];

  const notifyClick = (index) => {
    handleBookingChanges(index);
  };
  return (
    <div className={styles.reservasContainer}>
      <TitleFilter text={header} />
      {bookingTitle.map((title, index) => (
        <div key={index} className={styles.bookingRow}>
          <div className={styles.bookingText}>
            <div className={styles.titleFont}>{title} </div>
            <div className={styles.descriptionFont}>
              {bookingDescription[index]}
            </div>
          </div>
          <div className={styles.toggle}>
            <Toggle id={index} notifyClick={notifyClick} />
          </div>
        </div>
      ))}
    </div>
  );
}

export { OpcionesReserva };
