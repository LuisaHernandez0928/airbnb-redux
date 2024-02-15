import { Subtitle } from "../subtitle";
import { Title } from "../title";
import styles from "./index.module.css";

function SearchParameter({ title, subtitle, notifySearch }) {
  return (
    <div className={styles.boxSeparator}>
      <Title text={title} />
      <Subtitle text={subtitle} />
    </div>
  );
}

export { SearchParameter };
