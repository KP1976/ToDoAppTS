import React from 'react'
import '../scss/categories.scss'

const Categories = () => {
  return (
    <div className="categories">
      <div className="categories__container">
        <span className="categories__number">8</span>
        <span className="categories__text">rekreacja</span>
      </div>
      <div className="categories__container">
        <span className="categories__number">11</span>
        <span className="categories__text">tech</span>
      </div>
      <div className="categories__container">
        <span className="categories__number">12</span>
        <span className="categories__text">osobiste</span>
      </div>
      <div className="categories__container">
        <span className="categories__number">5</span>
        <span className="categories__text">jedzenie</span>
      </div>
    </div>
  )
}

export default Categories
