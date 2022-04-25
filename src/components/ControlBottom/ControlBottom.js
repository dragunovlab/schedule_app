import React, { useState, useRef, useEffect } from "react";
import "./ControlBottom.css";

const ContentBottom = (props) => {
  const [isPlaying, setIsPlaying] = useState(false); //set State

  const startStopClick = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
    }
    props.callbackTimeout(isPlaying);
  };
  return (
    <>
      {isPlaying ? (
        <div className="start-box"> 
        <span className="start material-icons md-48" onClick={startStopClick}>
        play_circle
        </span>
        </div>
     
        // <button className="start" onClick={startStopClick}>
        //   start
        // </button>
      ) : (
        <div className="stop-box"> 
        <span className="stop material-icons md-36" onClick={startStopClick}>
        stop_circle
        </span>  
        </div>
      //    <button className="stop" onClick={startStopClick}>
      //    stop
      //  </button>  
      )}
    </>
  );
};

export default ContentBottom;
