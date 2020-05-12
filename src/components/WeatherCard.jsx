import React from "react";
import {
  WiDayCloudy,
  WiSunrise,
  WiSunset,
  WiNightClear,
  WiRain,
  WiFog,
  WiDaySunny,
  WiSnow,
} from "react-icons/wi";
import { getTime } from "../utils";
import Card, {
  Spacer,
  Region,
  CurrentDate,
  Temperature,
  TemperatureInfo,
  Stats,
  Stat,
  StatTitle,
  StatValue,
  SunHoursWrapper,
  SunHours,
  Time,
  Placer,
  Description,
  TemperatureWrapper,
} from "./Card";
import Switch from "./Switch";

const WeatherIconResolver = ({ main }) => {
  const sharedProps = {
    color: "white",
    size: "100%",
  };
  return (
    {
      Clouds: <WiDayCloudy {...sharedProps} />,
      Clear: <WiNightClear {...sharedProps} />,
      Rain: <WiRain {...sharedProps} />,
      Mist: <WiFog {...sharedProps} />,
      Snow: <WiSnow {...sharedProps} />,
    }[main] || <WiDaySunny {...sharedProps} />
  );
};

const WeatherCard = ({ data, onUnitChange, units }) => {
  const {
    main: { temp, humidity, temp_max, temp_min, pressure },
    wind: { speed },
    name,
    sys: { country, sunrise, sunset },
    weather,
    coord: { lon, lat },
  } = data;

  let today = new Date();
  return (
    <Card p={"1em"}>
      <Placer position="absolute" right={0} p={["0", "1em", "0", "0"]}>
        <Switch
          labelOn="C"
          labelOff="F"
          onToggle={onUnitChange}
          checked={units === "metric"}
        />
      </Placer>
      <Region>
        {name || lon}, {country || lat}
      </Region>
      <CurrentDate>{today.toDateString()}</CurrentDate>
      {/* <Spacer /> */}
      <TemperatureInfo>
        <WeatherIconResolver main={weather[0].main} />
        <TemperatureWrapper>
          <Temperature>{temp.toFixed(1)}</Temperature>
          <Description>{weather[0].description}</Description>
        </TemperatureWrapper>
      </TemperatureInfo>
      <Stats>
        <Stat>
          <StatValue>{temp_max}</StatValue>
          <StatTitle>High</StatTitle>
        </Stat>
        <Stat>
          <StatValue>{temp_min}</StatValue>
          <StatTitle>Low</StatTitle>
        </Stat>
        <Stat>
          <StatValue>{pressure}</StatValue>
          <StatTitle>Pressure</StatTitle>
        </Stat>
        <Stat>
          <StatValue>{humidity}</StatValue>
          <StatTitle>Humidity</StatTitle>
        </Stat>
        <Stat>
          <StatValue>38</StatValue>
          <StatTitle>Humidity</StatTitle>
        </Stat>
        <Stat>
          <StatValue>{speed}</StatValue>
          <StatTitle>Wind</StatTitle>
        </Stat>
      </Stats>
      <Spacer />
      <SunHoursWrapper>
        <SunHours>
          <WiSunrise color="white" size="100%" />
          <Time>{getTime(sunrise)}</Time>
        </SunHours>
        <SunHours>
          <WiSunset color="white" size="100%" />
          <Time>{getTime(sunset)}</Time>
        </SunHours>
      </SunHoursWrapper>
    </Card>
  );
};

export default WeatherCard;
