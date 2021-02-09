# Weather App

Desarrollar una app full client-side que permita visualizar el pronóstico climático actual y de los próximos 5 días en la ubicación actual y permita visualizar el pronóstico de otras 5 ciudades seleccionables.

# Pre requisitos

Para poder instalar y correr la aplicación deberá tener instalado [Node](https://nodejs.org/es/) v10.16.3 o superior.

## Seteando la app

Crear un archivo .env.local en el directorio raiz con la siguiente estructura

    REACT_APP_OPENWEATHERMAP_API_KEY="YOUR-API-KEY"
    REACT_APP_BASE_API_URL="https://api.openweathermap.org/data/2.5"
    REACT_APP_DEFAULT_CITY_LAT="-34.603722450118504"
    REACT_APP_DEFAULT_CITY_LON="-58.38165716562355"

y reemplazar YOUR-API-KEY con la clave generada de su cuenta en [openweathermap.org](https://home.openweathermap.org/api_keys)

_NOTA: La ciudad por defecto es Buenos Aires, puede cambiarse modificando REACT_APP_DEFAULT_CITY_LAT y REACT_APP_DEFAULT_CITY_LON con las latitud y longitud deseada._
## Corriendo la app

Al clonar el proyecto por primera vez ejecutar `npm install` para agregar todas las dependecias necesarias.

Luego ejecute `npm start` para correr la app y abra su navegador en [http://localhost:3000](http://localhost:3000).
