import React, { useState, useRef, useEffect } from "react";
import Block from "../Block/Block";
import ContentBottom from "../ContentBottom/ContentBottom";
import SlideShowDots from "../SlideShowDots/SlideShowDots";
import Gear from "../Gear/Gear"
import Header from "../Header/Header"

import TextDay from "../TextDay/TextDay";

import "./Content.css";

const numbersOfClasses = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]; //Arr number
const delay = 2500; //const

function Content(props) {
  const [index, setIndex] = useState(0); //set State
  const timeoutRef = useRef(null); //link on let or DOM //timeoutRef.current

  const [stopTimeout, setStopTimeout] = useState(false); //set State

  const days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ"];
 

  function resetTimeout() {
    //if timeout = true {clearTimeout}
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const setCurrentCallback = (index) => {
    setIndex(index);
  };

  const callbackTimeout = (arg) => {
    if (arg) {
      setStopTimeout(false);
    } else {
      setStopTimeout(true);
    }
    console.log(arg);
  };

  useEffect(() => {
    resetTimeout();

    if (!stopTimeout) {
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === numbersOfClasses.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      );
    }

    return () => {
      //stop timeout
      resetTimeout();
    };
  }, [index, stopTimeout]); //State

  let a = 5
  const st = document.querySelector(".st")
  function f1() {
    console.log('f1 work' + 5)
    console.log(st)
    st.href = "../src/Dark.css"
  }

  return (
    <>
      <div className="Content">
      

      <TextDay day={days}  />  
      
        <div
          className="slideshow-slider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {numbersOfClasses.map((numberOfClass, index) => (
            <Block numberOfClass={numberOfClass} key={index} />
          ))}
        </div>
        <div className="lineBtn">
      <ContentBottom callbackTimeout={(res) => callbackTimeout(res)} />
      {/* <div className="style-box" onClick={f1}>
      <span className="style-icone material-icons">
      format_color_fill
      </span>

      </div> */}
       <SlideShowDots
        dots={numbersOfClasses}
        currentIndex={index}
        setCurrent={(idx) => setCurrentCallback(idx)}
      />
      <Gear />
      
      </div>   
      </div>
      
    
     
    </>
  );
}

export default Content;
