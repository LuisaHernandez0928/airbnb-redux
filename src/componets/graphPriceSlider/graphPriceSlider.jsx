import {
  getAirbnbPrices,
  createBarraRange,
  counterAirbnbRange,
  identifyMinIndex,
  identifyMaxIndex,
  heightEquivalences
} from "./utils";

import styles from "./index.module.css";

const BARS_AMOUNT = 45;

function GraphPriceSlider({ data, minPrice, maxPrice }) {
  const airbnbPrices = getAirbnbPrices(data);
  const pricesSorted = airbnbPrices.sort((a, b) => a - b);

  const minValue = Math.min(...airbnbPrices);
  const maxValue = Math.max(...airbnbPrices);

  const distance = maxValue - minValue;
  const range = Math.round(distance / BARS_AMOUNT);
  const barsRange = createBarraRange(minValue, range, BARS_AMOUNT);
  const heigthRanges = counterAirbnbRange(barsRange, pricesSorted);

  const maxHeightReference = Math.max(...heigthRanges);

  const indexMin = identifyMinIndex(minPrice, barsRange);
  const indexMax = identifyMaxIndex(maxPrice, barsRange);

  const graphPrices = () => {
    return (
      <div className={styles.graphContainer}>
        {heigthRanges.map((heigthRange, i) => (
          <div
            key={heigthRange + '-' + i}
            style={{
              width: "12px",
              height:
                "" + heightEquivalences(maxHeightReference, heigthRange) + "%",
              backgroundColor: i >= indexMin && i <= indexMax ? "#222" : "#DDD",
              borderTopRightRadius: "2px",
              borderTopLeftRadius: "2px",
              marginRight: "1.25px",
              flexShrink: 0,
            }}
          ></div>
        ))}
      </div>
    );
  };

  return <div>{graphPrices()}</div>;
}

export { GraphPriceSlider };
