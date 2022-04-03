import React from 'react'
import Bell from '../Bell/Bell'
import Logo from '../Logo/Logo'
import Time from '../Time/Time'
import './Header.css'

function Header() {
  return (
    <div className='Header'>
    <Logo />
    <Bell />
    <Time />
    </div>
    
  )
}

export default Header

// https://coderius.biz.ua/blog/article/reactjs-kak-sdelat-komponent-idusie-casy-s-avtoobnovleniem-vremeni