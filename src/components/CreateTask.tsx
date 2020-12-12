import React from 'react'

const CreateTask = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <div className="top-bar__icon"></div>
        <h2 className="top-bar__title">dodaj nowe zadanie</h2>
        <div className="top-bar__icon"></div>
      </div>
      <div className="icon"></div>
      <ul className="categories">
        <li className="category"></li>
        <li className="category"></li>
        <li className="category"></li>
        <li className="category"></li>
      </ul>
      <div className="task-name">
        <label className="task-name__label">Nazwa zadania</label>
        <input type="text" className="task-name__input" />
      </div>
      <button className="add-task-btn">dodaj zadanie</button>
    </div>
  )
}

export default CreateTask
