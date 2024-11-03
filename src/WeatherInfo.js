import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          {" "}
          <div className="clearfix">
            <span className="icon">
              <WeatherIcon code={props.data.iconUrl} />
            </span>
            <span className="temperature">
              {" "}
              <strong>{Math.round(props.data.temp)}</strong>
            </span>
            <span className="unit">°C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: </li>
            <li>Humidity {props.data.humidity}%</li>{" "}
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
