import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.dataForecast.temperature.maximum);

    return `${temperature}º`;
  }

  function minTemperature() {
    let temperature = Math.round(props.dataForecast.temperature.minimum);

    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.dataForecast.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="ForecastDay">
      <div>{day()}</div>
      <div>
        <WeatherIcon code={props.dataForecast.condition.icon} size={40} />
      </div>
      <div className="temp">
        <span>{maxTemperature()}</span> <span>{minTemperature()}</span>
      </div>
    </div>
  );
}
