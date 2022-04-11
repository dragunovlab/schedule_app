import { React, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Ball from "./components/Ball/Ball";
import Menu from "./components/Menu/Menu";
import { loadItemsActions } from "./modules/counter/actions";


function App({}) {
  loadItemsActions()

  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { value: "Главная", href: "/main", icon: "school" },
    { value: "Услуги", href: "/service", icon: "school" },
    { value: "Магазин", href: "/shop", icon: "school" },
  ];

  return (
    <div className="App">
      <Header />
      <Ball />
      <Content />
      <Menu
        active={menuActive}
        setActive={setMenuActive}
        header={"Бургер меню"}
        items={items}
      />
    </div>
  );
}

export default App;
