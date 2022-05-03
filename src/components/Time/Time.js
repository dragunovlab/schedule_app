
import React from 'react'
import './Time.css'

function FormattedDate(props) {
  return <div>{props.date.toLocaleTimeString()}</div>;
}

class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <>
      <div className="Time">
        <div className="time-text"><FormattedDate date={this.state.date} /></div>
        
       
        <div className="time-box">
        <span className="time-icon material-icons">hourglass_top</span>
        </div>    

        </div>
        </>  
    );
  }
}

export default Time 


// let date = new Date(); // Получаем текущие дату и время
// let h = date.getHours(); // Получаем текущий час
// if (h > 16 || h < 17) document.querySelector(".Logo").style.background = 'blue';