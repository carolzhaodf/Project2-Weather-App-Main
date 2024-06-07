import React from "react";
import Name from "./Forecast_Name";
import Date from "./Forecast_Date";
import TemperatureRange from "./Forecast_TemperatureRange";
import WeatherIcon from "./Forecast_weathericon";

const DayOfWeek = ({ data }) => {
  return (
    <div className="container flex flex-col items-center">
      <Name name={data.name} />
      <Date date={data.date} />
      <TemperatureRange range={data.TemperatureRange} />
      <WeatherIcon icon={data.iconURL} />
    </div>
  );
};

export default DayOfWeek;
