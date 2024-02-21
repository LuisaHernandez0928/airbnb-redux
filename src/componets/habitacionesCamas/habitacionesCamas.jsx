import { useState } from "react";
import styles from "./index.module.css";
import { TitleFilter } from "../titleFilter";
import { RadioButtonSeparated } from "../radioButtonSeparated/radioButtonSeparated";

function HabitacionesCamas({ header, handleHomeChanges, notifyHomeChanges }) {
  const [rooms, setRooms] = useState("Cualquiera");
  const [beds, setBeds] = useState("Cualquiera");
  const [baths, setBaths] = useState("Cualquiera");

  const notifyRoomChanged = (subtitle, value) => {
    if (subtitle === "Habitaciones") {
      setRooms(value);
      if (notifyHomeChanges) notifyHomeChanges(value, beds, baths);
      if (handleHomeChanges) handleHomeChanges(value, beds, baths);
    }
    if (subtitle === "Camas") {
      setBeds(value);
      if (notifyHomeChanges) notifyHomeChanges(rooms, value, baths);
      if (handleHomeChanges) handleHomeChanges(rooms, value, baths);
    }
    if (subtitle === "Baños") {
      setBaths(value);
      if (notifyHomeChanges) notifyHomeChanges(rooms, beds, value);
      if (handleHomeChanges) handleHomeChanges(rooms, beds, value);
    }
  };

  return (
    <div className={styles.containerHabitacionesCamas}>
      <TitleFilter text={header} />
      <RadioButtonSeparated
        subtitle={"Habitaciones"}
        notifyRoomChanged={notifyRoomChanged}
        buttonSelected={rooms}
      />
      <RadioButtonSeparated
        subtitle={"Camas"}
        notifyRoomChanged={notifyRoomChanged}
        buttonSelected={beds}
      />
      <RadioButtonSeparated
        subtitle={"Baños"}
        notifyRoomChanged={notifyRoomChanged}
        buttonSelected={baths}
      />
    </div>
  );
}

export { HabitacionesCamas };
