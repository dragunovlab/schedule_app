import React, { useState, useRef, useEffect } from "react";
import "./ContentBottom.css";

const ContentBottom = () => {
  const [isPlaying, setIsPlaying] = useState(false); //set State

  return (
    <>
    
      {isPlaying ? (<button className="start" onClick={() => setIsPlaying(!isPlaying) }>start</button>) : (<button className="stop" onClick={() => setIsPlaying(!isPlaying)} >stop</button>) }
      
    </>
  );
};

export default ContentBottom;
