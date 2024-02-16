import { useState } from "react";
import styles from "./index.module.css";
import { TitleFilter } from "../titleFilter";
import { RadioButtonSeparated } from "../radioButtonSeparated/radioButtonSeparated";

function HabitacionesCamas({ handleHomeChanges, header}) {
  const [rooms, setRooms] = useState("Cualquiera");
  const [beds, setBeds] = useState("Cualquiera");
  const [baths, setBaths] = useState("Cualquiera");

  const notifyRoomChanged = (subtitle, value) => {
    if (subtitle === "Habitaciones") {
      setRooms(value);
      handleHomeChanges(value, beds, baths);
    }
    if (subtitle === "Camas") {
      setBeds(value);
      handleHomeChanges(rooms, value, baths);
    }
    if (subtitle === "Baños") {
      setBaths(value);
      handleHomeChanges(rooms, beds, value);
    }
  };

  return (
    <div className={styles.containerHabitacionesCamas}>
      <TitleFilter text={header} />
      <RadioButtonSeparated
        subtitle={"Habitaciones"}
        notifyRoomChanged={notifyRoomChanged}
      />
      <RadioButtonSeparated
        subtitle={"Camas"}
        notifyRoomChanged={notifyRoomChanged}
      />
      <RadioButtonSeparated
        subtitle={"Baños"}
        notifyRoomChanged={notifyRoomChanged}
      />
    </div>
  );
}

export { HabitacionesCamas };
