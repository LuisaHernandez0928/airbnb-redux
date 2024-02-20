export const accommodationTypeFilter = (airbnbType, typeSelected) => {
  if (
    typeSelected.tipoAlojamiento === "Cualquier tipo" ||
    typeSelected.tipoAlojamiento === airbnbType.tipoAlojamiento
  ) {
    return true;
  } else {
    return false;
  }
};

export const getAirbnbPrices = (data) => {
  const airbnbPrice = [];
  const airbnbAvailability = data.availability;
  for (const availabilityKey in airbnbAvailability) {
    airbnbPrice.push(airbnbAvailability[availabilityKey].price);
  }
  return airbnbPrice;
};

export const priceRangeFilter = (
  airbnb,
  priceMinSelected,
  priceMaxSelected,
  pricesEachAirbnb
) => {
  let pricesArray = pricesEachAirbnb(airbnb);
  let priceMatch = pricesArray.find(
    (elem) => elem >= priceMinSelected && elem <= priceMaxSelected
  );

  if (priceMatch) {
    return true;
  } else {
    return false;
  }
};

export const roomsQuantityFilter = (airbnb, quantitySelected) => {
  if (
    quantitySelected.rooms === "Cualquiera" ||
    quantitySelected.rooms <= airbnb.rooms
  ) {
    return true;
  } else {
    return false;
  }
};

export const bedsQuantityFilter = (airbnb, quantitySelected) => {
  if (
    quantitySelected.beds === "Cualquiera" ||
    quantitySelected.beds <= airbnb.beds
  ) {
    return true;
  } else {
    return false;
  }
};

export const bathsQuantityFilter = (airbnb, quantitySelected) => {
  if (
    quantitySelected.baths === "Cualquiera" ||
    quantitySelected.baths <= airbnb.baths
  ) {
    return true;
  } else {
    return false;
  }
};

export const favoritesFilter = (airbnb, favoriteSelected) => {
  if (favoriteSelected.guestsFavorite && airbnb.guestsFavorite) {
    return true;
  } else if (!favoriteSelected.guestsFavorite) {
    return true;
  } else {
    return false;
  }
};

export const propertyTypeFilter = (airbnb, propertiesSelected) => {
  const currentlySelectedPropertyFilters = propertiesSelected.tipoPropiedad;
  if (
    !currentlySelectedPropertyFilters.casaHuespedes &&
    !currentlySelectedPropertyFilters.hotel &&
    !currentlySelectedPropertyFilters.casa
  )
    return true;
  if (
    airbnb.tipoPropiedad === "Casa de huespedes" &&
    currentlySelectedPropertyFilters.casaHuespedes
  )
    return true;
  if (
    airbnb.tipoPropiedad === "Hotel" &&
    currentlySelectedPropertyFilters.hotel
  )
    return true;
  if (airbnb.tipoPropiedad === "Casa" && currentlySelectedPropertyFilters.casa)
    return true;
  return false;
};

export const getAirbnbServices = (data) => {
  const airbnbServices = [];
  const airbnbAvailability = data.services;
  for (const availabilityKey in airbnbAvailability) {
    airbnbServices.push(airbnbAvailability[availabilityKey].name);
  }
  return airbnbServices;
};

export const servicesFilter = (
  airbnb,
  servicesSelected,
  servicesEachAirbnb
) => {
  let servicesArray = servicesEachAirbnb(airbnb);
  let selected = servicesSelected.services;
  let intersection = servicesArray.filter((element) =>
    selected.includes(element)
  );

  if (intersection.length === selected.length) {
    return true;
  } else {
    return false;
  }
};

export const getBookingOptions = (data) => {
  const bookingOptions = [];
  const airbnbAvailability = data.bookingOptions;
  for (const availabilityKey in airbnbAvailability) {
    bookingOptions.push(airbnbAvailability[availabilityKey].name);
  }
  return bookingOptions;
};

const conversionBookingOptions = (data) => {
  if (data === "Reserva inmediata") return (data = 0);
  if (data === "Autonomous checking") return (data = 1);
  if (data === "Pets") return (data = 2);
};

export const bookingOptionsFilter = (
  airbnb,
  optionsSelected,
  optionsEachAirbnb
) => {
  let bookingOptionsArray = optionsEachAirbnb(airbnb);
  let selected = optionsSelected.bookingOptions;

  let convertedArray = bookingOptionsArray.map((option) =>
    conversionBookingOptions(option)
  );
  let intersection = convertedArray.filter((element) =>
    selected.includes(element)
  );

  if (intersection.length === selected.length) {
    return true;
  } else if (selected.length === 0) {
    return true;
  } else {
    return false;
  }
};
