import React from 'react'
import '../scss/header.scss'
import '../scss/percent-tasks-done.scss'
import Categories from './Categories'
import Menu from './Menu'

const Header = () => {
  return (
    <header className="header">
      <div className="header__left-side">
        <Menu />
        <h1 className="header__title">Zadania</h1>
        <h2 className="header__subtitle">do zrobienia</h2>
        <span className="header__date">20 listopada, 2020</span>
        <div className="header__bottom-bar"></div>
      </div>
      <div className="header__right-side">
        <Categories />
        <div className="percent-tasks-done">
          <div className="progress-circle">
            <svg>
              <circle cx="16" cy="16" r="12"></circle>
              <circle cx="16" cy="16" r="12"></circle>
            </svg>
          </div>
          <span className="percent-tasks-done__text">63% zrobione</span>
        </div>
      </div>
    </header>
  )
}

export default Header
