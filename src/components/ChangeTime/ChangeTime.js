import React from "react";
import "./ChangeTime.css";

let date = new Date(); // Получаем текущие дату и время
let h = date.getHours(); // Получаем текущий час
if (h > 8 || h < 21)
  document.querySelector(".Content").style.background = "red";
  
  const ChangeTime = () => {
    return (
      <div>ChangeTime</div>
    )
  }
  
  export default ChangeTime
