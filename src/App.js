import React from "react";
import useFetch from "use-http";
import { Error } from "./App.styled";
import BarLoader from "./components/BarLoader";
import WeatherCard from "./components/WeatherCard";
import { Header, Title } from "./components/Header";
import PopularCities from "./components/PopularCities";
import RandomLocation from "./components/RandomLocation";
import { toQueryString } from "./utils";
import { LocationInput } from "./components/Card";
import constants from "./constants";

function App() {
  const url = constants.API;
  const [queries, setQueries] = React.useState({
    appid: constants.APIKey,
    q: constants.query,
    units: constants.units,
  });

  const [request, response] = useFetch(`${url}`);
  const [data, setData] = React.useState();
  const [error, setError] = React.useState();

  const onUnitChange = (unit) => {
    const unitsMapper = {
      C: "metric",
      F: "imperial",
    };
    setQueries({
      ...queries,
      units: unitsMapper[unit],
    });
  };

  const onCityChange = (city) => {
    setQueries({
      ...queries,
      q: city,
    });
  };

  const onLocationChange = (event) => {
    const { value } = event.target;
    setQueries({
      ...queries,
      q: value,
    });
  };

  const onRandomLocationChange = (lonLat) => {
    let newQueries = { ...queries };
    delete newQueries.q;
    setQueries({
      ...newQueries,
      ...lonLat,
    });
  };

  React.useEffect(() => {
    async function getWeather() {
      const weatherData = await request.get(`?${toQueryString(queries)}`);
      if (response.ok) {
        setData(weatherData);
      } else {
        const errorJson = await response.json();
        setError(errorJson);
      }
    }
    getWeather();
  }, [request, response, queries]);
  return (
    <>
      {request.error && <Error>API Response: {error && error.message}</Error>}
      {request.loading && <BarLoader />}
      <Header>
        <Title>
          <LocationInput
            onChange={onLocationChange}
            placeholder="Enter location"
          />
        </Title>
      </Header>
      {data && (
        <>
          <WeatherCard
            data={data}
            onUnitChange={onUnitChange}
            units={queries.units}
          />
          <RandomLocation onClick={onRandomLocationChange} />
          <PopularCities onCityChange={onCityChange} />
        </>
      )}
    </>
  );
}

export default App;
