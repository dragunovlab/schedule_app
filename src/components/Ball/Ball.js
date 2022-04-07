import React, { useState } from "react";
import "./Ball.css";

function Ball() {
  const [loaderVisible, setLoaderVisible] = useState(false);

  return (
    <div className="Ball">
      <div className="Ball__2"></div>
    </div>
  );
}

export default Ball;
