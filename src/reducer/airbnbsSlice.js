import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

export const airbnbsReducerPath = "airbnbs";

const arrayData = [];

for (const key in data) {
  arrayData.push(data[key]);
}

const initialState = {
  value: arrayData,
};

console.log(arrayData);
export const airbnbsSlice = createSlice({
  name: airbnbsReducerPath,
  initialState,
  reducers: {
    test: (state) => {
      console.log("aqui");
    },
  },
});

export const { test } = airbnbsSlice.actions;

export default airbnbsSlice.reducer;
