import { React, useState } from "react";
import "./BurgerBtn.css";

const BurgerBtn = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <div className="box-burger-btn">
      <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
        <span />
      </div>
    </div>
  );
};

export default BurgerBtn;
