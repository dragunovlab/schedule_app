import React from "react";
import "./SlideShowDots.css";

export const SlideShowDots = ({ dots, currentIndex, setCurrent }) => {
  return (
    <div className="slideshowDots">
      {dots.map((_, idx) => (
        <div
          key={idx}
          className={`slideshowDot${currentIndex === idx ? " active" : ""}`}
          onClick={() => {
            setCurrent(idx);
          }}
        />
      ))}
    </div>
  );
};

export default SlideShowDots;
