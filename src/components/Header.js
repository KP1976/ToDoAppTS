import React from 'react'
import '../scss/header.scss'
import Categories from './Categories'
import Menu from './Menu'

const Header = () => {
  return (
    <header className="header">
      <div className="header__left-side">
        <Menu />
        <h1 className="header__title">Do zrobienia</h1>
        <span className="header__date">20 listopada, 2020</span>
        <div className="header__bottom-bar"></div>
      </div>
      <div className="header__right-side">
        <Categories />
        <div className="header__tasks-done"></div>
      </div>
    </header>
  )
}

export default Header
