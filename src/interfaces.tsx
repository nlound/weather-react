export type Coords = {
  lat: number;
  lon: number;
};

export type CityWeather = {
  current: WeatherObject;
  lat: number;
  lon: number;
  timezone: string;
};

export type WeatherObject = {
  temp: number;
  max: number;
  min: number;
  weather: [
    {
      icon: string;
      description: string;
    }
  ];
};

export const CoordsDefault = {
  lat: +process.env.REACT_APP_DEFAULT_CITY_LAT!,
  lon: +process.env.REACT_APP_DEFAULT_CITY_LON!,
};
