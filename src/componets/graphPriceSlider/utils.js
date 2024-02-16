export const createBarraRange = (minValue, range, barsAmount) => {
  const barsRange = [];
  let min = minValue;
  for (let i = 0; i <= barsAmount; i++) {
    let val1 = min;
    let val2 = val1 + range;
    min = val2;
    barsRange.push([val1, val2]);
  }
  return barsRange;
};

export const counterAirbnbRange = (barsRange, pricesSorted) => {
  const heigthRanges = [];
  for (let j = 0; j < barsRange.length; j++) {
    let count = 0;
    for (let i = 0; i < pricesSorted.length; i++) {
      if (
        pricesSorted[i] < barsRange[j][1] &&
        pricesSorted[i] >= barsRange[j][0]
      ) {
        count++;
      }
    }
    heigthRanges.push(count);
  }
  return heigthRanges;
};

export const heightEquivalences = (max, current) => current * (100 / max);

export const identifyMinIndex = (min, barsRange) => {
  let indexMin = 0;
  for (let i = 0; i < barsRange.length; i++) {
    if (barsRange[i][0] >= min && barsRange[i][0] < min + 8) {
      indexMin = i;
    }
  }
  return indexMin;
};

export const identifyMaxIndex = (max, barsRange) => {
  let indexMax = 0;
  for (let i = 0; i < barsRange.length; i++) {
    if (barsRange[i][1] >= max - 8 && barsRange[i][1] <= max) {
      indexMax = i;
    }
  }
  return indexMax;
};

export const getAirbnbPrices = (data) => {
  const airbnbs = [];
  for (const key in data) {
    const airbnbAvailability = data[key].availability;
    for (const availabilityKey in airbnbAvailability) {
      airbnbs.push(airbnbAvailability[availabilityKey].price);
    }
  }
  return airbnbs;
};