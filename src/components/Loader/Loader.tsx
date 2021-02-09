import "./Loader.scss";

const Loader = ({ cityWeather }: any) => {
  return (
    <>
      <div className="loader">
        <div className="loader-circle"></div>
        <p> Cargando ...</p>
      </div>
    </>
  );
};

export default Loader;
