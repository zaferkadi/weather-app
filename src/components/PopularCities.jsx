import React from "react";
import { City, Cities } from "./PopularCities.styled";

const PopularCities = ({ onCityChange }) => {
  const cities = ["London", "New York", "Berlin", "Paris"];

  return (
    <Cities>
      {cities.map((city, id) => (
        <City key={id} onClick={() => onCityChange(city)}>
          {city}
        </City>
      ))}
    </Cities>
  );
};

export default PopularCities;
