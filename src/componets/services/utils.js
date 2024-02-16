export const serviceOptions = {
  comodidades: [
    "Wifi",
    "Lavadora",
    "Aire acondicionado",
    "Zona de trabajo",
    "Secadora de pelo",
    "Cocina",
    "Secadora",
    "Calefaccion",
    "Televisor",
    "Plancha",
  ],
  caracteristicas: [
    "Piscina",
    "Jacuzzi",
    "Estacionamiento gratuito",
    "Cargador para autos eléctricos",
    "Cuna",
    "Cama King",
    "Gimnasio",
    "Parrilla",
    "Desayuno",
    "Chimenea interior",
    "Apto para fumadores",
  ],
  ubicacion: ["Linea de playa", "Costa"],
  seguridad: ["Detector de humo", "Detector de monóxido de carbono"],
};

export const subtitles= ["Comodidades", "Caracteristicas", "Ubicación", "Seguridad"]

export const getAllSections = (data) => {
  const amenities = [];
  for (const key in data) {
    amenities.push(data[key]);
  }
  return amenities;
};
