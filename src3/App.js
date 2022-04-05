import React, { useState } from "react";
import "./App.css";

import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Ball from "./components/Ball/Ball";
import Slideshow from "./components/Slideshow/Slideshow";
import Menu from "./Menu/Menu";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Главная", href: "./main", icon: "redeem" },
    { value: "Услуги", href: "./service", icon: "redeem" },
    { value: "Магазин", href: "./shop", icon: "redeem" },
  ];

  return (
    <div className="App">
      <Header />
      <div className="burger-btn" onClick={() => setMenuActive(!menuActive)}>
        <span />
      </div>
      <Ball />
      <Content />
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Бургер меню"}
        items={items}
      />
      {/* <Slideshow /> */}
    </div>
  );
}

export default App;
