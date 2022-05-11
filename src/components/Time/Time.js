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
let times = [
  "08:00:00",
  "09:00:00",
  "10:00:00",
  "11:00:00",
  "22:00:00",
  "23:00:00",
]; //перевести в миллисикунды

let date = new Date();

// let h = date.getHours();

// let currentTime = date.valueOf()+10800000;  //+3h
// alert(currentTime)

new Date(new Date().toDateString() + "08:00:00").valueOf();

setTimeout(Active, 1000);
function Active() {
  for (let i = 0; i < times.length; i++) {
    console.log(times[i]);
    // alert(typeof(Number(times[i])))
    if (currentTime > times[i] && currentTime < times[i + 1]) {
      // alert(1)
      let input = document.querySelector(".i");
      input.style.backgroundColor = "#18a0fb";
      input.style.color = "#fff";
    }
  }
}

let timerId2 = setTimeout(function tick2() {
  Active();
  timerId2 = setTimeout(tick2, 2000); // (*)
}, 2000);

// let date = new Date(); // Получаем текущие дату и время
// let h = date.getHours(); // Получаем текущий час
// if (h > 16 || h < 17) document.querySelector(".Logo").style.background = 'blue';

//https://stackoverflow.com/questions/32340051/change-classes-to-an-element-with-react
