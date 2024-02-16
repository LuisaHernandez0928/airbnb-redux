export const serviceOptions = {
  entrada: [
    "Entrada de los huéspedes sin escalones",
    "Entrada de huéspedes de más de 81 cm",
    "Área de estacionamiento accesible",
    "Acceso sin escalones a la entrada de los huéspedes",
  ],
  dormitorio: [
    "Acceso a la habitación sin escalones",
    "Entrada al dormitorio de más de 81 cm",
  ],
  baño: [
    "Acceso al baño sin escalones",
    "Entrada al baño de más de 81 cm",
    "Barra de agarre de la ducha",
    "Barra de agarre del inodoro",
    "Ducha sin escalones",
    "Asiento en la ducha o en la bañera",
  ],
  equipos: ["Grúa de techo o móvil"],
};

export const subtitles = [
  "Entrada de los huéspedes y estacionamiento",
  "Dormitorio",
  "Baño",
  "Equipos de adaptación",
];

export const getAllSections = (data) => {
  const amenities = [];
  for (const key in data) {
    amenities.push(data[key]);
  }
  return amenities;
};
