import { React, useState } from "react";
import "./App.css";
import Header from "./src___/components/Header/Header";
import Content from "./src___/components/Content/Content";
import Ball from "./src___/components/Ball/Ball";
import Slideshow from "./src___/components/Slideshow/Slideshow";
import Menu from "./src___/components/Menu/Menu";

function App({ loadItemsActions }) {
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
            {/* <Ball /> */}
            <Content />
            {/* <Slideshow /> */}
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
