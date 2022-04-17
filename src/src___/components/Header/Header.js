import React from "react";
import Bell from "../Bell/Bell";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import ContentBottom from "../ContentBottom/ContentBottom";
import Logo from "../Logo/Logo";
import Time from "../Time/Time";
import "./Header.css";

import Navbar from "../NavBar/NavBar";
import { BrowserRouter as Router, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Reports from "../pages/Reports";
import Products from "../pages/Products";

function Header() {
  return (
    <div className="Header">
      {/* <Logo /> */}
      <Router>
        <Navbar />
        <Routes path="/" exact component={Home} />
        <Routes path="/reports" component={Reports} />
        <Routes path="/products" component={Products} />
      </Router>
      <Bell />
      <Time />
    </div>
  );
}

export default Header;

// https://coderius.biz.ua/blog/article/reactjs-kak-sdelat-komponent-idusie-casy-s-avtoobnovleniem-vremeni
