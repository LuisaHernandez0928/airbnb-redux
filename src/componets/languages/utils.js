export const serviceOptions = {
  initial: ["ingles", "aleman", "frances", "japones"],
  secondary: [
    "italiano",
    "ruso",
    "español",
    "chino (simplificado)",
    "árabe",
    "hindi",
    "portugués",
    "holandés",
    "tailandés",
    "griego",
    "hebreo",
    "polaco",
    "tagalog",
    "sueco",
    "noruego",
    "checo",
    "húngaro",
  ],
};

export const getAllSections = (data) => {
  const amenities = [];
  for (const key in data) {
    amenities.push(data[key]);
  }
  return amenities;
};
