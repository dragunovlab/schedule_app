import React, { useState, useRef, useEffect } from "react";
import "./ContentBottom.css";

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
        <span className="start material-icons" onClick={startStopClick}>
        play_circle
        </span>
        // <button className="start" onClick={startStopClick}>
        //   start
        // </button>
      ) : (
        <button className="stop" onClick={startStopClick}>
          stop
        </button>
      )}
    </>
  );
};

export default ContentBottom;
