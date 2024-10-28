import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [WeatherData, setWeatherDAta] = useState();
  const [ready, setReady] = useState(false);

  function handleResponse(response) {
    console.log(response.data);

    setWeatherDAta({
      date: new Date(response.data.dt * 1000),
      temp: response.data.main.temp,
      city: response.data.name,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-10">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
              ></input>
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary"
              ></input>
            </div>
          </div>
        </form>

        <h1>{WeatherData.city}</h1>
        <ul>
          <li>
            <FormattedDate date={WeatherData.date} />
          </li>
          <li>{WeatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            {" "}
            <div className="clearfix">
              <span className="icon">
                <img src={WeatherData.iconUrl} alt="Mostly Sunny"></img>
              </span>
              <span className="temperature">
                {" "}
                <strong>{Math.round(WeatherData.temp)}</strong>
              </span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: </li>
              <li>Humidity {WeatherData.humidity}%</li>{" "}
              <li>Wind: {WeatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "311f1f45fee82242ab4086372ab360f5";
    let city = "Buenos Aires";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return "loading";
  }
}
