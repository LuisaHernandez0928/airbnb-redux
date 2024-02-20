import { memo } from "react";
import { useSelector } from "react-redux";
import { DescriptionFilter } from "../descriptionFilter";
import { GraphPriceSlider } from "../graphPriceSlider";
import { MultiRangeSlider } from "../priceSlider/priceSlider";
import { TitleFilter } from "../titleFilter";
import { getMinPrice, getMaxPrice } from "../../reducer/airbnbsSlice";
import styles from "./index.module.css";

function RangePrices({ data, handlePriceChanges, header }) {
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);

  return (
    <div className={styles.layoutPrices}>
      <div className={styles.headerText}>
        <TitleFilter text={header} />
        <DescriptionFilter
          text={"Precios por noche sin incluir impuestos y tarifas"}
        />
      </div>
      <div className={styles.graphSlider}>
        <GraphPriceSlider
          data={data}
          minPrice={Number(minPrice)}
          maxPrice={Number(maxPrice)}
        />
        <MultiRangeSlider
          min={20}
          max={460}
          onChange={({ min, max }) => {
            handlePriceChanges(min, max);
          }}
        />
      </div>
    </div>
  );
}
const MemoizedRangePrices = memo(RangePrices);

export { MemoizedRangePrices };
