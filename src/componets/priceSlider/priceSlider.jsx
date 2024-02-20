import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  getMinPrice,
  getMaxPrice,
  notifyFiltersRemoved,
} from "../../reducer/airbnbsSlice";
import styles from "./index.module.css";

const MultiRangeSlider = ({ min, max, onChange }) => {
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);
  const removedFilters = useSelector(notifyFiltersRemoved);
  const [minInput, setMinInput] = useState(minPrice);
  const [maxInput, setMaxInput] = useState(maxPrice);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  console.log(minPrice, maxPrice, min, max, removedFilters);
  const modifyMaxSlider = (e) => {
    let val;
    if (e.target.value === "") {
      val = max;
      setMaxInput(e.target.value);
    } else if (e.target.value <= minPrice) {
      val = minPrice + 1;
      setMaxInput(e.target.value);
    } else if (e.target.value >= max) {
      val = max;
      setMaxInput(e.target.value);
    } else if (!Number(e.target.value)) {
      val = max;
      setMaxInput(max);
    } else {
      val = e.target.value;
      setMaxInput(e.target.value);
    }
    onChange({ min: minPrice, max: val });
  };

  const modifyMinSlider = (e) => {
    let val;
    if (e.target.value === "") {
      val = min;
      setMinInput(e.target.value);
    } else if (e.target.value >= maxPrice) {
      val = maxPrice - 1;
      setMinInput(e.target.value);
    } else if (e.target.value <= min) {
      val = min;
      setMinInput(e.target.value);
    } else if (!Number(e.target.value)) {
      val = min;
      setMinInput(min);
    } else {
      val = e.target.value;
      setMinInput(e.target.value);
    }
    onChange({ min: val, max: maxPrice });
  };

  useEffect(() => {
    minValRef.current = minPrice;
    maxValRef.current = maxPrice;
  }, [minPrice, maxPrice]);

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = Math.round(((minPrice - min) / (max - min)) * 100);
    const maxPercent = Math.round(
      ((maxValRef.current - min) / (max - min)) * 100
    );
    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minPrice, min, max]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = Math.round(
      ((minValRef.current - min) / (max - min)) * 100
    );
    const maxPercent = Math.round(
      ((maxValRef.current - min) / (max - min)) * 100
    );

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxPrice, min, max]);

  return (
    <div className={styles.container}>
      <div className={styles.barraConlosCirculos}>
        <input
          type="range"
          min={min}
          max={max}
          step={5}
          value={minPrice}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxPrice - 1);
            onChange({ min: value, max: maxPrice });
            setMinInput(value);
          }}
          className={styles.thumb + " " + styles.thumbLeft}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={5}
          value={maxPrice}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minPrice + 1);
            onChange({ min: minPrice, max: value });
            setMaxInput(value);
          }}
          className={styles.thumb + " " + styles.thumbRight}
        />
        <div className={styles.slider}>
          <div className={styles.sliderTrack} />
          <div ref={range} className={styles.sliderRange} />
        </div>
      </div>
      <div className={styles.inputSlider}>
        <div className={styles.inputLeftValue}>
          <div className={styles.fontFormat}>Minimo</div>
          <div className={styles.priceFormat}>
            <span aria-hidden="true">$</span>
            <input
              type="text"
              value={removedFilters ? minPrice : minInput}
              onChange={(e) => modifyMinSlider(e)}
            />
          </div>
        </div>
        <div className={styles.separator}>___</div>
        <div className={styles.inputRightValue}>
          <div className={styles.fontFormat}>Maximo</div>
          <div className={styles.priceFormat}>
            <span aria-hidden="true">$</span>
            <input
              type="text"
              value={removedFilters ? maxPrice : maxInput}
              onChange={(e) => modifyMaxSlider(e)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { MultiRangeSlider };
