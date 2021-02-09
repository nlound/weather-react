const defaultParams = `&units=metric&lang=es&exclude=minutely,hourly&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`;

export const endpoint = {
  otherCity: (cityName: string) =>
    `${process.env.REACT_APP_BASE_API_URL}/weather?q=${cityName}${defaultParams}`,
  currentCity: (lat: number, lon: number) =>
    `${process.env.REACT_APP_BASE_API_URL}/onecall?lat=${lat}&lon=${lon}${defaultParams}`,
};
