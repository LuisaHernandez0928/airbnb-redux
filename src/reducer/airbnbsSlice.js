import { createSlice } from "@reduxjs/toolkit";
import data from "../data/data.json";

import {
  priceRangeFilter,
  accommodationTypeFilter,
  roomsQuantityFilter,
  bedsQuantityFilter,
  bathsQuantityFilter,
  favoritesFilter,
  propertyTypeFilter,
  servicesFilter,
  bookingOptionsFilter,
  getAirbnbPrices,
  getAirbnbServices,
  getBookingOptions,
} from "./filtersUtils";

export const airbnbsReducerPath = "airbnbs";

const arrayData = [];

for (const key in data) {
  arrayData.push(data[key]);
}

const initialState = {
  airbnbs: arrayData,
  filters: {
    tipoAlojamiento: "Cualquier tipo",
    priceMin: 20,
    priceMax: 416,
    rooms: "Cualquiera",
    beds: "Cualquiera",
    baths: "Cualquiera",
    guestsFavorite: false,
    tipoPropiedad: [],
    services: [],
    bookingOptions: [],
  },
};

console.log(arrayData);
export const airbnbsSlice = createSlice({
  name: "airbnbs",
  initialState,
  reducers: {
    //Las funciones que le asigno al objeto, son funciones que representan lo que debo hacer con la informacion que emite la accion, con el fin de usar esa informacion para alterar el estado
    changeTypeAccomodationFilter: (state, action) => {
      //Aqui obtengo el valor del filtro de tipo de alojamiento, que sera una string que le paso a la accion en el dispatch
      const accomodationType = action.payload;
      //Aqui le asigno al store, en el estado de filtro.alojamiento ese valor enviado por la accion
      state.filters.tipoAlojamiento = accomodationType;
    },
    changeBedsRoomsBathsAmountFilter: (state, action) => {
      const home = action.payload;
      state.filters.beds = home.beds;
      state.filters.rooms = home.rooms;
      state.filters.baths = home.baths;
    },
    toggleSelectedServiceFilter: (state, action) => {
      const service = action.payload;
      const currentFilters = state.filters.services;
      const index = currentFilters.indexOf(service);
      if (index !== -1) {
        currentFilters.splice(index, 1);
      } else {
        currentFilters.push(service);
      }
    },
    changePriceFilter: (state, action) => {
      const prices = action.payload;
      state.filters.priceMin = prices.min;
      state.filters.priceMax = prices.max;
    },
    changeFavoriteGuestTag: (state, action) => {
      const favoriteGuestTag = action.payload;
      state.filters.guestsFavorite = favoriteGuestTag;
    },
    changePropertyFilter: (state, action) => {
      const property = action.payload;
      state.filters.tipoPropiedad = property;
    },
    toggleBookingOptsFilter: (state, action) => {
      const bookingOptions = action.payload;
      state.filters.bookingOptions = bookingOptions;
    },
    removeAllFilters: (state, action) => {
      state.filters = initialState.filters;
    },
  },
});

export const getFilteredAirbnbs = (state) => {
  const data = state.airbnbs.airbnbs;
  const userFilters = state.airbnbs.filters;
  return data.filter(
    (airbnb) =>
      priceRangeFilter(
        airbnb,
        userFilters.priceMin,
        userFilters.priceMax,
        getAirbnbPrices
      ) &&
      accommodationTypeFilter(airbnb, userFilters) &&
      roomsQuantityFilter(airbnb, userFilters) &&
      bedsQuantityFilter(airbnb, userFilters) &&
      bathsQuantityFilter(airbnb, userFilters) &&
      favoritesFilter(airbnb, userFilters) &&
      propertyTypeFilter(airbnb, userFilters) &&
      servicesFilter(airbnb, userFilters, getAirbnbServices) &&
      bookingOptionsFilter(airbnb, userFilters, getBookingOptions)
  );
};

export const getAirbnbNumberUpdated = (state) => {
  return getFilteredAirbnbs(state).length;
};

export const {
  changeTypeAccomodationFilter,
  changeBedsRoomsBathsAmountFilter,
  toggleSelectedServiceFilter,
  changePriceFilter,
  changeFavoriteGuestTag,
  changePropertyFilter,
  toggleBookingOptsFilter,
} = airbnbsSlice.actions;

export default airbnbsSlice.reducer;
