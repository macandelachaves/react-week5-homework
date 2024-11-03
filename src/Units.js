import React, { useState } from "react";

export default function Units(props) {
  let [unit, setUnit] = useState("celsius");

  function showFarenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function farenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  function showCelsius() {
    setUnit();
  }

  if (unit === "celsius") {
    return (
      <div className="units">
        <span className="temperature">
          {" "}
          <strong>{Math.round(props.celsius)}</strong>
        </span>
        <span className="unit">
          °C |{" "}
          <a href="" onClick={showFarenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="units">
        <span className="temperature">
          {" "}
          <strong>{Math.round(farenheit())}</strong>
        </span>
        <span className="unit">
          <a href="" onClick={showCelsius}>
            {" "}
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
