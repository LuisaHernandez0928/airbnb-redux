import { useState, memo} from "react";
import { DescriptionFilter } from "../descriptionFilter";
import { GraphPriceSlider } from "../graphPriceSlider";
import { MultiRangeSlider } from "../priceSlider/priceSlider";
import { TitleFilter } from "../titleFilter";
import styles from "./index.module.css";

function RangePrices({ data, handlePriceChanges, header}) {
  const [min, setMin] = useState(20);
  const [max, setMax] = useState(460);

  return (
    <div className={styles.layoutPrices}>
      <div className={styles.headerText}>
        <TitleFilter text={header} />
        <DescriptionFilter
          text={"Precios por noche sin incluir impuestos y tarifas"}
        />
      </div>
      <div className={styles.graphSlider}>
        <GraphPriceSlider data={data} minPrice={Number(min)} maxPrice={Number(max)}/>
        <MultiRangeSlider
          min={20}
          max={460}
          onChange={({ min, max }) => {
            setMin(min);
            setMax(max);
            handlePriceChanges(min, max);
          }}
        />
      </div>
    </div>
  );
  
};
const MemoizedRangePrices = memo(RangePrices);

export {MemoizedRangePrices};
