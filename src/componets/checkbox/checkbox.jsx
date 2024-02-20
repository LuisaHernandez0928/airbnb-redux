import { useSelector } from "react-redux";
import { getSelectedServices } from "../../reducer/airbnbsSlice";
import styles from "./index.module.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function CheckBox({ id }) {
  const servicesFromStore = useSelector(getSelectedServices);

  if (servicesFromStore.includes(id)) {
    return <CheckBoxIcon sx={{ fontSize: 30 }} />;
  } else {
    return <div id={id} className={styles.checkBox}></div>;
  }
}
export { CheckBox };
