import React from 'react'
import './Time.css'
import svg from './Time.svg'

// let date = new Date(); // Получаем текущие дату и время
// let h = date.getHours(); // Получаем текущий час
// if (h > 16 || h < 17) document.querySelector(".Logo").style.background = 'blue';

class Time extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleString()
        };
    }

    render() {

        return (
            <div  className="Time">
            <img className='Time__img' src={svg} alt="" />
            <p>
            {this.state.time}.
            </p>
            </div>
        );
    }
}

export default Time