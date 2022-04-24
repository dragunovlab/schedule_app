import React from "react";
import "./TextDay.css";

function TextDay(props) {
  return <div className="TextDay">{props.day.map((item, index) =>
    <li key={Math.random()}>{item}</li>
  )}</div>;
}

export default TextDay;
