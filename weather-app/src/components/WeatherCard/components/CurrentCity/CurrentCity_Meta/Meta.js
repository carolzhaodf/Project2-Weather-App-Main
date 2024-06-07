import React from "react";
import humidity from "./CurrentCity_Meta_Icon/humidity.svg";
import windSpeed from "./CurrentCity_Meta_Icon/wind_speed.svg";
import pm from "./CurrentCity_Meta_Icon/PM2.5.svg";
import feelsLike from "./CurrentCity_Meta_Icon/Somatosensory_temperature.svg";

const Meta = () => {
  const metaInfo = [
    {
      weatherData: "85%",
      url: humidity,
    },
    {
      weatherData: "9km/h",
      url: windSpeed,
    },
    {
      weatherData: "75µg",
      url: pm,
    },
    {
      weatherData: "26°",
      url: feelsLike,
    },
  ];
  return (
    <div className="container flex h-[7rem] w-[100%] items-center justify-between rounded-[1rem] bg-[#ebf2fe] p-[2rem]">
      {metaInfo.map((info) => {
        return (
          <div className="flex flex-col items-center">
            <img className="mb-[0.5rem] h-[2rem] w-[2rem] " src={info.url} />
            <p>{info.weatherData}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Meta;
