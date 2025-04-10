import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo.js";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [WeatherData, setWeatherData] = useState();
  const [ready, setReady] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);

    setWeatherData({
      date: new Date(response.data.time * 1000),
      temp: response.data.temperature.current,
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon,
    });
    setReady(true);
  }

  function Search() {
    let apiKey = "36bb04605e1o2a2f7ce6c8t6fa5fe0ba";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="container">
        <div className="Weather">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-10">
                <input
                  type="search"
                  placeholder="Enter a city..."
                  className="form-control"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="col-2">
                <input
                  type="submit"
                  value="Search"
                  className="mainButton btn btn-primary "
                ></input>
              </div>
            </div>
          </form>

          <WeatherInfo data={WeatherData} />
          <WeatherForecast data={WeatherData} />
        </div>
      </div>
    );
  } else {
    Search();
    return "loading";
  }
}
