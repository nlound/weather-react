export const formatTimezone = (zona: string) => {
  if (zona && typeof zona === "string") {
    const formatted = zona!.replace("_", " ").split("/").reverse();
    return `${formatted[0]}, ${formatted[1]}`;
  }
  return "";
};

export const dayOfWeek = (day: number) => {
  const dayNames = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const dow = day - 7 * Math.floor(day / 7);
  return dayNames[dow];
};
