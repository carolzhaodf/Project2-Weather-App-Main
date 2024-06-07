import React from "react";
import Icon from "./weather_icon/Cloudy.png";

const WeatherIcon = () => {
  return (
    <div>
      <img src={Icon} alt="Cloudy" />
    </div>
  );
};

export default WeatherIcon;
