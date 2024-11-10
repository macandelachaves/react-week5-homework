import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;

  let apiKey = "3bc520cc14bbdedfd7e45158f2ef0439";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}
`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="oneDay">
      <div className="row ">
        <div className="col">
          <div>Sun</div>
          <div>
            <WeatherIcon code={props.data.iconUrl} size={40} />
          </div>
          <div className="temp">
            <span>22</span>° <span>16</span>°
          </div>
        </div>
      </div>
    </div>
  );
}
