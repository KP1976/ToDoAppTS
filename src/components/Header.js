import React from 'react'
import '../scss/header.scss'
import Menu from './Menu'

const Header = () => {
  return (
    <header className="header">
      <Menu />
      <h1 className="header__title">Do zrobienia</h1>
      <span className="header__date">20 listopada, 2020</span>
      <div className="header__bottom-bar"></div>
    </header>
  )
}

export default Header
