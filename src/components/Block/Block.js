import React from "react";
import DayBlock from "../DayBlock/DayBlock";
import NamesClasses from "../NamesClasses/NamesClasses";
import "./Block.css";


function Block(props) {
  return (
    <>
      <div className="Block">
        <NamesClasses numberClass={props.numberOfClass} />
        <div className="wrapper1">
        <DayBlock />
        </div>
        <div className="wrapper2">
        <DayBlock />
        </div>
        <div className="wrapper3">
        <DayBlock />
        </div>
        <div className="wrapper4">
        <DayBlock />
        </div>
        <div className="wrapper5">
        <DayBlock />
        </div>
      </div>
    </>
  );
}

export default Block;
