import React from "react";
import "./slideShowDots.css";

export const SlideShowDots = (props) => {
  return (
    <div className="slideshowDots">
      {props.dots.map((_, idx) => (
        <div
          key={idx}
          className={`slideshowDot${
            props.currentIndex === idx ? " active" : ""
          }`}
          onClick={() => {
            props.setCurrent(idx);
          }}
        ></div>
      ))}
    </div>
  );
};

export default SlideShowDots;
