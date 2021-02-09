import { dayOfWeek, formatTimezone } from "../../utils";
import WeatherExtended from "../WeatherExtended/WeatherExtended";
import "./WeatherBigCard.scss";

const WeatherBigCard = ({ cityWeather }: any, key?: number) => {
  const daysToShow = 5;
  const nameCity = formatTimezone(cityWeather?.timezone);

  return (
    <>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${cityWeather?.current?.weather[0].icon}@2x.png`}
          alt={cityWeather?.current?.weather[0]?.description}
          className="big-icon"
        />
        <div>
          <h1>{nameCity}</h1>
          <h2>Temp: {cityWeather?.current?.temp}ºC</h2>
          <div className="weather-extended">
            <div>
              <h3>Pronóstico para los próximos {daysToShow} días</h3>
            </div>
            <div className="weather-extended-cards">
              {cityWeather?.daily?.map((e: any, i: number) => {
                const dow = new Date().getDay();
                if (i < daysToShow) {
                  return (
                    <WeatherExtended
                      key={`${i}`}
                      dia={`${dayOfWeek(dow + i + 1)}`}
                      max={e.temp.max}
                      min={e.temp.min}
                      icon={e.weather[0].icon}
                      desc={e.weather[0].description}
                    />
                  );
                } else {
                  return false;
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherBigCard;
