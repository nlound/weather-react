import "./WeatherSmallCard.scss";

const WeatherSmallCard = ({ cityWeather }: any) => {
  return (
    <>
      <div>
        <img
          src={`http://openweathermap.org/img/wn/${cityWeather.weather[0].icon}@2x.png`}
          alt={cityWeather.weather[0].description}
        />

        <div>
          <h1>{cityWeather.cityName}</h1>
          <h2>Temp: {cityWeather.main.temp}ºC</h2>
          <p>
            {`Min: ${cityWeather.main.temp_min}ºC`}
            <br />
            {`Max: ${cityWeather.main.temp_max}ºC`}
          </p>
        </div>
      </div>
    </>
  );
};

export default WeatherSmallCard;
