import axios from "axios";
import { useState } from "react";
import { endpoint } from "../endpoints";
import { Coords, CoordsDefault } from "../interfaces";

const useWeather = () => {
  const [currentCityWeather, setCurrentCityWeather] = useState<any>();

  const getPosition = async () => {
    let position: Coords = CoordsDefault;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((result) => {
        position = {
          lat: result.coords.latitude,
          lon: result.coords.longitude,
        };
      });
    }
    try {
      const data = await axios.get(
        endpoint.currentCity(position.lat, position.lon)
      );
      setCurrentCityWeather(data.data)
    } catch (err) {
      throw err;
    }
  };

 getPosition();
 return currentCityWeather;
};

export default useWeather;
