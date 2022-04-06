import React, { useState, useRef, useEffect } from "react";
import Block from "../Block/Block";
import ContentBottom from "../ContentBottom/ContentBottom";
import SlideShowDots from "../SlideShowDots/SlideShowDots";
import "./Content.css";

const numbersOfClasses = ["1", "2", "3", "4", "5", "6", "7"]; //Arr number
const delay = 2500; //const

function Content(props) {
  const [index, setIndex] = useState(0); //set State
  const timeoutRef = useRef(null); //link on let or DOM //timeoutRef.current

  function resetTimeout() {
    //if timeout = true {clearTimeout}
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  const setCurrentCallback = (index) => {
    setIndex(index);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === numbersOfClasses.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      //stop timeout
      resetTimeout();
    };
  }, [index]); //State

  return (
    <>
      <div className="Content">
        <div
          className="slideshow-slider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {numbersOfClasses.map((numberOfClass, index) => (
            <Block numberOfClass={numberOfClass} key={index} />
          ))}
        </div>
      </div>
      <SlideShowDots
        dots={numbersOfClasses}
        currentIndex={index}
        setCurrent={(idx) => setCurrentCallback(idx)}
      />
    </>
  );
}

export default Content;
