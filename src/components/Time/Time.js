import React from "react";
import "./Time.css";

function FormattedDate(props) {
  return <div>{props.date.toLocaleTimeString()}</div>;
}

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <>
        <div className="Time">
          <div className="time-text">
            <FormattedDate date={this.state.date} />
          </div>

          <div className="time-box">
            <span className="time-icon material-icons">hourglass_top</span>
          </div>
        </div>
      </>
    );
  }
}

export default Time;

// >8 и <9
// let times = [
//   "08:00:00",
//   "09:00:00",
//   "10:00:00",
//   "11:00:00",
//   "20:00:00",
//   "21:00:00",
//   "22:00:00",
//   "23:00:00",
// ]; //перевести в миллисикунды

const times = [{subject: "Матем", time: "08:00:00"}]

let date = new Date(); // Получаем текущие дату и время
var h = date.getHours(); // Получаем текущий час




let currentTime = date.valueOf(); //+3h

setTimeout(Active, 1000);
function Active() {
  for (let i = 0; i < times.length; i++) {
    
    const timeInMs = new Date(
  //  new Date().toDateString() + ` ${times[i]}`   
  new Date().toDateString() + ` ${times[i].time}`).valueOf();

    const nextTimeInMs = new Date(
      new Date().toDateString() + ` ${times[i + 1]}`
    ).valueOf();

      console.log(timeInMs, 'timeInMs')
      console.log(nextTimeInMs, 'nextTimeInMs')
      console.log(currentTime, 'currentTime')
    // if (currentTime > timeInMs && currentTime < nextTimeInMs) {
    //   // return times[i]
    //   let input = document.querySelector(".i");
    //   input.style.backgroundColor = "red";
    //   input.style.color = "#fff";
    // }
     
    if(h >= 0 && h <= 1) {
    let elements = document.querySelectorAll('.i_1')
    elements.forEach(element => {
      element.style.background = "#18a0fb"
      element.style.color = "#fff" 
    });
  //   for(let i = 0; i < elements.length; i++){
  //     elements.style.border = "4px solid blue"  
  // }
    } // Если сейчас ночь, то меняем файл стилей
  }
}

let timerId2 = setTimeout(function tick2() {
 console.log(Active()) 
  timerId2 = setTimeout(tick2, 2000); // (*)
}, 2000);

// let date = new Date(); // Получаем текущие дату и время
// let h = date.getHours(); // Получаем текущий час
// if (h > 16 || h < 17) document.querySelector(".Logo").style.background = 'blue';

//https://stackoverflow.com/questions/32340051/change-classes-to-an-element-with-react
