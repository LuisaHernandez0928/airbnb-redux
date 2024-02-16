import { useState } from "react";
import { getAllSections, subtitles, serviceOptions } from "./utils";
import { TitleFilter } from "../titleFilter";
import { Title } from "../title";
import { CheckBox } from "../checkbox";
import styles from "./index.module.css";

function Accesibility({header}) {
  const [checkReport, setCheckReport] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const amenities = getAllSections(serviceOptions);

  const notifyClick = (item) => {
    setCheckReport([...checkReport, item]);
  };

  const showServices = () => {
    setShowMore(!showMore);
  };

  const showMoreSectios = (data, subtitle) => {
    return (
      <div className={styles.sectionContainer}>
        <Title text={subtitle} cardFilter={true} />
        <ul className={styles.boxOptions}>
          {data.map((item, index) => (
            <li key={index} onClick={() => notifyClick(item)}>
              <CheckBox />
              {item}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div className={styles.mainContainer}>
      <TitleFilter text={header} />
      {showMoreSectios(amenities[0], subtitles[0])}
      <div className={showMore ? styles.sectionContainer : styles.noExtend}>
        {showMoreSectios(amenities[1], subtitles[1])}
        {showMoreSectios(amenities[2], subtitles[2])}
        {showMoreSectios(amenities[3], subtitles[3])}
      </div>
      <button className={styles.showButton} onClick={() => showServices()}>
        {showMore ? (
          <Title text={"Muestra menos"} cardFilter={true} />
        ) : (
          <Title text={"Muestra más"} cardFilter={true} />
        )}
      </button>
    </div>
  );
}

export { Accesibility };
