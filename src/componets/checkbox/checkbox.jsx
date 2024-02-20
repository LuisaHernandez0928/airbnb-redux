import { useState } from "react";
import { useSelector } from "react-redux";
import { notifyFiltersRemoved } from "../../reducer/airbnbsSlice";
import styles from "./index.module.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function CheckBox({ id }) {
  const [selectedOption, setSelectedOption] = useState(false);

  const removeSelectedItems = useSelector(notifyFiltersRemoved);

  const notifyAmenity = () => {
    setSelectedOption(!selectedOption);
  };
  if (removeSelectedItems ? removeSelectedItems : !selectedOption) {
    return (
      <div
        id={id}
        className={styles.checkBox}
        onClick={() => notifyAmenity()}
      ></div>
    );
  } else {
    return (
      <CheckBoxIcon sx={{ fontSize: 30 }} onClick={() => notifyAmenity()} />
    );
  }
}
export { CheckBox };
