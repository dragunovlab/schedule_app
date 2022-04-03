import React from 'react'
import './ChangeTime.css'

let date = new Date(); // Получаем текущие дату и время
let h = date.getHours(); // Получаем текущий час
if (h < 8 || h > 21) document.querySelectorAll(".Logo").style.background = 'red'; 


