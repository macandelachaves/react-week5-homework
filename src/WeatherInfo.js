import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import Units from "./Units";

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
            <span>
              <Units celsius={props.data.temp} />
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity {props.data.humidity}%</li>{" "}
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
