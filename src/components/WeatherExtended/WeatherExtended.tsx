const WeatherExtended = (props: any) => {
  return (
    <>
      <div>
        <p>{props.dia}</p>
        <img
          src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
          alt={props.desc}
        />
        <div>
          Min: {props.min}
          <br />
          Max: {props.max}
        </div>
      </div>
    </>
  );
};

export default WeatherExtended;
