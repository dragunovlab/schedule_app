import React from "react";
import Ellipse from "../../Ellipse/Ellipse";
import "./ItemWhite.css";

function ItemWhite() {
  return (
    <div className="ItemWhite">
      <input placeholder="1"/>
      <Ellipse />
      <input placeholder="15:30"/>
    
      <Ellipse />
      <input placeholder="информатика"/>
  
      <Ellipse />
      <input placeholder="каб 155"/>

    </div>
  );
}

export default ItemWhite;
