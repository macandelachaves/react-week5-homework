import React from "react";

export default function UnitMetrics(props) {
  return (
    <div>
      <span className="temperature">
        {" "}
        <strong>{Math.round(props.celsius)}</strong>
      </span>
      <span className="unit">°C</span>
    </div>
  );
}
