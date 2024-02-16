import { useState } from "react";
import styles from "./index.module.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function CheckBox({ id }) {
  const [selectedOption, setSelectedOption] = useState(false);

  const notifyAmenity = (e) => {
    setSelectedOption(!selectedOption);
  };
  if (!selectedOption) {
    return (
      <div
        id={id}
        className={styles.checkBox}
        onClick={(e) => notifyAmenity(e)}
      ></div>
    );
  } else {
    return (
      <CheckBoxIcon sx={{ fontSize: 30 }} onClick={(e) => notifyAmenity(e)} />
    );
  }
}
export { CheckBox };
