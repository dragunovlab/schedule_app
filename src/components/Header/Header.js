import React from 'react'
import Bell from '../Bell/Bell'
import BurgerBtn from '../BurgerBtn/BurgerBtn'
import ContentBottom from '../ContentBottom/ContentBottom'
import Logo from '../Logo/Logo'
import Time from '../Time/Time'
import './Header.css'

function Header() {
  return (
    <div className='Header'>
    <Logo />
    <Bell />
    <ContentBottom />
    <Time />
    <BurgerBtn />

    </div>
    
  )
}

export default Header

// https://coderius.biz.ua/blog/article/reactjs-kak-sdelat-komponent-idusie-casy-s-avtoobnovleniem-vremeni