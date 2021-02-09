import axios from "axios";
import Loader from "../Loader/Loader";
import SearchBar from "../SearchBar/SearchBar";
import WeatherBigCard from "../WeatherBigCard/WeatherBigCard";
import WeatherSmallCard from "../WeatherSmallCard/WeatherSmallCard";
import { endpoint } from "../../endpoints";
import { useState, useEffect } from "react";
import { CityWeather, Coords, CoordsDefault } from "../../interfaces";
import "./WeatherContainer.scss";

const WeatherContainer = () => {
  const [currentCityWeather, setCurrentCityWeather] = useState<CityWeather>();
  const [loading, setLoading] = useState<boolean>(true);
  const [otherCityWeather, setOtherCityWeather] = useState<CityWeather[]>([]);

  const handleSearch: any = async (city: string) => {
    try {
      const dataOtherCity = await axios.post(endpoint.otherCity(city));
      dataOtherCity.data.cityName = city;
      setOtherCityWeather((otherCityWeather) => [
        ...otherCityWeather!,
        dataOtherCity.data,
      ]);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
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
        const data = await axios.post(
          endpoint.currentCity(position.lat, position.lon)
        );
        setLoading(false);
        setCurrentCityWeather(data.data);
      } catch (err) {
        throw err;
      }
    };

    getPosition();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="weather-container">
          <div className="main-city">
            <WeatherBigCard cityWeather={currentCityWeather} />
          </div>
          <div className="search-bar-container">
            {otherCityWeather.length < 5 ? (
              <>
                <p>Agregue hasta 5 ciudades</p>
                <SearchBar handleSearch={handleSearch}></SearchBar>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="other-city">
            {otherCityWeather?.map((e: any, i) => (
              <WeatherSmallCard key={i} cityWeather={e} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherContainer;
