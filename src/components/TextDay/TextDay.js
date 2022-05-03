import React from "react";
import { daysIt } from "../../mockApi";
import "./TextDay.css";

var date = new Date();
var day = date.getDay();
var days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
// alert(daysIt[day]);
// alert(day)

const TextDay = (props) => {
  return (
    <div className="TextDay">
      {props.day.map((item, index) => (
        <li className={`list_${index + 1}`} key={Math.random()}>
          {item}
        </li>
      ))}
    </div>
  );
};

const ActiveTextDay = () => {
  if (day === 1) {
    let list_1 = document.querySelector(".list_1");

    list_1.classList.add("box-shadow");
  }

  if (day === 2) {
    let list_2 = document.querySelector(".list_2");

    list_2.classList.add("box-shadow");
  }

  if (day === 3) {
    let list_3 = document.querySelector(".list_3");

    list_3.classList.add("box-shadow");
  }

  if (day === 4) {
    let list_4 = document.querySelector(".list_4");

    list_4.classList.add("box-shadow");
  }
  if (day === 5) {
    let list_5 = document.querySelector(".list_5");

    list_5.classList.add("box-shadow");
  }
};

setTimeout(ActiveTextDay, 1000);

let timerId = setTimeout(function tick1() {
  ActiveTextDay();
  timerId = setTimeout(tick1, 2000); // (*)
}, 2000);

export default TextDay;
